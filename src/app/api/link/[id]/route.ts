import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const { id } = await params;
    const { link } = await req.json();

    const updatedLink = await prisma.link.update({
      where: {
        id: id,
      },
      data: {
        link,
      },
    });

    return NextResponse.json(updatedLink);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update the link",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorizd" }, { status: 401 });
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json({ message: "ID required!" }, { status: 400 });
    }

    const deletedLink = await prisma.link.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(deletedLink);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete the link",
      },
      {
        status: 500,
      }
    );
  }
}
