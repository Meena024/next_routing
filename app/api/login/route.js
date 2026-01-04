import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(request) {
  const { username, password } = await request.json();

  if (username !== "admin" || password !== "password") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await createToken({
    username,
    role: "user",
  });

  const res = NextResponse.json({
    message: "Login successful",
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60, // 1 hour
    path: "/",
  });

  return res;
}
