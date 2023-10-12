import { NextResponse } from "next/server";
import connectDB from "@/db/mongodb";
import Content from "@/models/Content";

// WE WANT A POST REQUEST
// I DID USE THE GET TO CHECK IF ITS WORKING WHILE BUILDING THIS PAGE

export async function POST(req) {
  // HERE WE ARE CONNECTING TO OUR MONGODB
  await connectDB();

  try {
    // HERE WE RECIEVE THE EMAIL FROM THE CLIENT
    const content = await req.json();

    const newContent = new Content({ ...content });

    let savedCont = await newContent.save();

    return NextResponse.json(savedCont, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export const GET = async () => {
  try {
    await connectDB();
    let getAll = await Content.find().sort({ createdAt: -1 });

    return NextResponse.json(getAll, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
