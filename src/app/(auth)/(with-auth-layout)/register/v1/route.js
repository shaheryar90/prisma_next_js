import { NextResponse } from "next/server";
import { comments } from "../../../../comments/data";
import { PrismaClient } from "../prisma/generated/clientPg";
const prisma = new PrismaClient();
export async function GET() {
  // return Response.json(comments);
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        country: true,
        phone: true,
        image: true,
      },
    });
    return NextResponse.json(
      { success: true, message: "Successfully registered", data: users },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// export async function POST(request) {
//   const comment = await request.json();
//   const newComment = {
//     id: comments.length + 1,
//     text: comment.text,
//   };
//   comments.push(newComment);
//   return new Response(JSON.stringify(newComment), {
//     headers: { "Content-Type": "application/json" },
//     status: 200,
//   });
// }

export async function POST(request) {
  const body = await request.json();
  const { name, email, password, country, phone } = body;
  try {
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }
    // If email doesn't exist, create a new user
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: "hashedPassword", // Replace with hashedPassword variable
        country,
        phone,
      },
    });
    return NextResponse.json(
      { success: true, message: "Successfully registered", data: newUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
