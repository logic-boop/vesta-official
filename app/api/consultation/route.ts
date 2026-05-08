import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Consultation Request Received:", body);

    return NextResponse.json(
        { message: "Lead captured successfully" }, 
        { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
        { message: "Failed to process request" },
        { status: 500 }
    );
  }
}