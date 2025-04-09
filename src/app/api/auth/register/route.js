import { hash } from "bcryptjs";
import db from "@/utils/db";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to database
    await db();

    // Get request body and parse it
    const body = await request.json();
    const { name, email, password } = body;

    // Add validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Remove password from response
    const user = newUser.toObject();
    delete user.password;

    return NextResponse.json(
      { success: true, message: "User registered successfully", user },
      { status: 201 }
    );

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Error registering user", error: error.message },
      { status: 500 }
    );
  }
}