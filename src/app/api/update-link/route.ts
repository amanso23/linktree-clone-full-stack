import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const updatedLink = await prisma.link.update({
      where: { id: data.linkId, userId: userId },
      data: {
        link: data.link,
      },
    });

    return NextResponse.json(updatedLink);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error updating link", error: error },
      { status: 500 }
    );
  }
}
