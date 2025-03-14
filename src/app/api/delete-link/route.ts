import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
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

    const data = await req.json();

    const removedLink = await prisma.link.delete({
      where: { id: data.linkId },
    });

    return NextResponse.json(removedLink);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error deleting link",
        error: error,
      },
      { status: 500 }
    );
  }
}
