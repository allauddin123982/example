import { NextResponse } from "next/server";

export async function POST(req) {
    // Parse the incoming JSON body
    const data = await req.json();
    console.log(data);

    return NextResponse.json({ data });
}
