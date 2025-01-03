import prisma from "@/app/libs/prisma";
import { validateEmail } from "@/app/libs/validation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// POST handler for user registration
export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  // Validation checks
  if (!email || !password ) {
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
    // Check if the email is already registered
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Error", error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in the database
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
       
      },
    });

    // Return success response
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

// Optionally, you can also define GET, PUT, DELETE, etc. handlers here
export const GET = async () => {
  // Handle GET request logic (if necessary)
  return NextResponse.json({ message: "GET method is not implemented" }, { status: 405 });
};

export const DELETE = async () => {
  // Handle DELETE request logic (if necessary)
  return NextResponse.json({ message: "DELETE method is not implemented" }, { status: 405 });
};

export const PUT = async () => {
  // Handle PUT request logic (if necessary)
  return NextResponse.json({ message: "PUT method is not implemented" }, { status: 405 });
};
