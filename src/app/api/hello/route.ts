export async function GET(): Promise<Response> {
    return new Response(JSON.stringify({ message: "Hello, world!" }), {
      status: 200,
    });
  }
  