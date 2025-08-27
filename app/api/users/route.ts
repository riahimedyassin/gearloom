import { Created, InternalServerError, OK } from "@/lib/http";
import { createUserSchema } from "@/schemas/users/createUser";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    const safeUsers = users.map(({ password, ...reset }) => reset);
    return OK({ body: safeUsers });
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
    const user = await prisma.user.create({
      data,
    });
    return Created({ body: user });
  } catch (error) {
    return InternalServerError({ error });
  }
};
