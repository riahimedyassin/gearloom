import { Created, InternalServerError, OK } from "@/lib/http";
import { createUserSchema } from "@/schemas/users/createUser";
import { prisma } from "@/lib/prisma";
import { hash } from "@/lib/hash";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        avatar: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        // Include count of related data
        _count: {
          select: {
            ownedProjects: true,
            projectMembers: true,
            createdTasks: true,
            assignedTasks: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return OK({ body: users });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return InternalServerError({ error: 'Failed to fetch users' });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedData = createUserSchema.parse(body);
    
    // Check if user with this email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });
    
    if (existingUser) {
      return InternalServerError({ error: 'User with this email already exists' });
    }
    
    // Hash the password before storing
    const hashedPassword = await hash(validatedData.password);
    
    // Create user data without confirmPassword
    const userData = {
      firstname: validatedData.firstname,
      lastname: validatedData.lastname,
      email: validatedData.email,
      password: hashedPassword,
      // avatar is optional and will be null by default
      // role defaults to MEMBER in the schema
    };
    
    const user = await prisma.user.create({
      data: userData,
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        avatar: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        // Exclude password from response
      }
    });
    
    return Created({ body: user });
  } catch (error) {
    console.error('User creation error:', error);
    
    // Handle specific Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return InternalServerError({ error: 'User with this email already exists' });
    }
    
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return InternalServerError({ 
        error: 'Validation failed'
      });
    }
    
    return InternalServerError({ error: 'Failed to create user' });
  }
};
