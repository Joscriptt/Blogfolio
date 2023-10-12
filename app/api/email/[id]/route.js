import connectDB from "@/db/mongodb";
import Content from "@/models/Content";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  await connectDB();

  try {
    const singlePost = await Content.findById(id);
    return NextResponse.json(singlePost, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
