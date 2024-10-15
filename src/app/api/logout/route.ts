import { Logout } from "@/entities/logout/logout";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await Logout();
    return NextResponse.json(response);
  } catch {
    return NextResponse.json({
      data: "Ooops! Something went wrong!",
      status: 500,
    });
  }
}
