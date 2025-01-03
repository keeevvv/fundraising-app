import prisma from "@/app/libs/prisma";
import { validateEmail } from "@/app/libs/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";




// POST handler
export const POST = async (req: NextRequest) => {
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json(
      { message: "Error", error: "All fields are required" },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return NextResponse.json(
      { message: "Error", error: "Invalid email format" },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Error", error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error", error: "Something went wrong" },
      { status: 500 }
    );
  }
};

// Default handler for other methods
export async function handler(req: NextRequest) {
  if (req.method === "POST") {
    return POST(req);
  }

  return NextResponse.json(
    { message: "Error", error: "Method Not Allowed" },
    { status: 405 }
  );
}


