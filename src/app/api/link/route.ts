import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const { data } = await req.json();

    const createdLink = await prisma.link.create({
      data: {
        ...data,
        userId,
      },
    });

    return NextResponse.json(createdLink);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed created the link",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
