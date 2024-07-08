// "use client";

import { redirect } from "next/navigation";
import { comments } from "../data";
import { headers } from "next/headers";
import { PrismaClient } from "../prisma/generated/clientPg";
const prisma = new PrismaClient();
// export async function GET(request, { params }) {
//   //   if (parseInt(params.id) > comments.length) {
//   //     redirect("/comments");
//   //   }
//   const comment = comments.find(
//     (comment) => comment.id === parseInt(params?.id)
//   );

//   return Response.json(comment);
// }
export async function GET(request, { params }) {
  const requestHeaders = new Headers(request.headers);
  const HeaderList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(HeaderList.get("Authorization"));
  //   const comment = comments.find(
  //     (comment) => comment.id === parseInt(params?.id)
  //   );

  const theme = request.cookies.get("theme");

  console.log(theme, "Themeeeeeeeee===>");
  return new Response("<h1>Profile Api Data</h1>", {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark", // cookie set in header
    },
  });
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params?.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(request, { params }) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params?.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
