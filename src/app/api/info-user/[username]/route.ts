import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;

    if (!username)
      return NextResponse.json(
        {
          message: "Username required!",
        },
        {
          status: 400,
        }
      );

    const findedUser = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        links: {
          orderBy: {
            name: "asc",
          },
        },
      },
    });

    return NextResponse.json(findedUser);
  } catch (error) {
    return NextResponse.json(
      {
        message: "User not found",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
