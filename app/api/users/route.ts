import { createUserSchema } from "@/schemas/users/createUser";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany(); // Should show autocomplete now
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const data = createUserSchema.parse(req.body);
  } catch (error) {}
};
