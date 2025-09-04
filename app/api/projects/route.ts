import { Created, InternalServerError, OK } from "@/lib/http";
import { createProjectSchema } from "@/schemas/projects/createProject";
import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        owner: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
          }
        },
        _count: {
          select: {
            tasks: true,
            members: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return OK({ body: projects });
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return InternalServerError({ error: 'Failed to fetch projects' });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validatedData = createProjectSchema.parse(body);
    
    // Transform the form data to match Prisma schema
    const projectData = {
      name: validatedData.name,
      description: validatedData.description,
      type: validatedData.type,
      category: validatedData.category,
      priority: validatedData.priority || "medium",
      targetAudience: validatedData.targetAudience,
      timeline: validatedData.timeline,
      context: validatedData.context,
      // Convert arrays and objects to JSON for Prisma using proper Prisma JSON handling
      goals: validatedData.goals || undefined,
      challenges: validatedData.challenges || undefined,
      techStack: validatedData.techStack || undefined,
      keywords: validatedData.keywords || undefined,
      milestones: validatedData.milestones || undefined,
      resources: validatedData.resources || undefined,
      startDate: validatedData.startDate,
      endDate: validatedData.endDate,
      // For now, we'll need to get the ownerId from somewhere (auth, session, etc.)
      // This is a placeholder - you'll need to implement proper auth
      ownerId: 1, // TODO: Get from authenticated user session
    };

    const project = await prisma.project.create({
      data: projectData,
      include: {
        owner: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
          }
        }
      }
    });
    
    return Created({ body: project });
  } catch (error) {
    console.error('Project creation error:', error);
    return InternalServerError({ error: 'Failed to create project' });
  }
};
