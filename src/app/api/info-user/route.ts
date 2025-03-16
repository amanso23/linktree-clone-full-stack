import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    let existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: { links: true },
    });

    if (!existingUser) {
      existingUser = await prisma.user.create({
        data: {
          id: userId,
          name: "User",
          username: `user_${Date.now()}`,
          bio: "Welcome to Linktree Clone 😄",
          backgroundImage: "/default-background.webp",
          links: {
            create: [],
          },
        },
        include: {
          links: {
            orderBy: {
              name: "asc",
            },
          },
        },
      });
    }

    return NextResponse.json(existingUser);
  } catch (err) {
    console.error("[GET_USER_FIRST_LOGIN]", err);
    return NextResponse.json(
      {
        message: "Error fetching user",
      },
      {
        status: 500,
      }
    );
  }
}
