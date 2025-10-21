import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await prisma.note.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("DELETE /api/notes/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete note" },
      { status: 500 }
    );
  }
}
