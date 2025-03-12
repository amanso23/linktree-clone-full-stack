import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    const data = await req.json();

    const { name, username, avatarUrl, links, typeUser } = data;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        username,
        avatarUrl,
        firstLogin: false,
        typeUser,
        links: {
          create: links,
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error creating user",
        error: error,
      },
      { status: 500 }
    );
  }
}
