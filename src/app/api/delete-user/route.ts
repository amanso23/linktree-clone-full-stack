import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const deleteUser = await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(deleteUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting user", error: error },
      { status: 500 }
    );
  }
}
