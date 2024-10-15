import { getSession } from "@/entities/check-session/check-session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getSession();
    return NextResponse.json(session);
  } catch {
    return NextResponse.json({
      data: "Ooops! Something went wrong!",
      status: 500,
    });
  }
}
