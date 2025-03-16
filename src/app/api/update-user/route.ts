import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { create } from "domain";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const data = await req.json();

    const { links, ...userData } = data;

    console.log(links);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...userData,
        links: {
          create: links,
        },
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating user", error: error },
      { status: 500 }
    );
  }
}
