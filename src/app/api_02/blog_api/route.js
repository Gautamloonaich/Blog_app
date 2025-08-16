import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/config/db";
import { bloggmodle } from "../../../../lib/moddles/blogmodle";
import { writeFile } from "fs/promises";

async function LoadDB() {
  await connectDb();
}

LoadDB();

// Get method Api
export async function GET() {
  try {
    let data = await bloggmodle.find();
    return NextResponse.json({ result: data, success: true });
  } catch (err) {
    return NextResponse.json({ result: "data is not found ", success: false });
  }
}

//Post method Api
export async function POST(request) {
  try {
    const formdata = await request.formData();

    const timestamp = Date.now();
    const image = formdata.get("image");
    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);

    const path = `./public/${timestamp}${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}${image.name}`;
    const blogdata = {
      title: formdata.get("title"),
      description: formdata.get("description"),
      category: formdata.get("category"),
      author: formdata.get("author"),
      author_img: formdata.get("authorImg"),
      image: imgUrl,
    };

    const result = await bloggmodle.create(blogdata);

    return NextResponse.json(
      { msg: "data is added", success: true },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { msg: "error occur", success: false },
      { status: 404 }
    );
  }
}
