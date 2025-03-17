import { navbarService } from "@/features/shared/data/navbar-service";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(navbarService)
}