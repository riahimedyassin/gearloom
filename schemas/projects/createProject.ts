import { z } from "zod";

// Project creation form schema
export const createProjectSchema = z.object({
  // Step 1: Basic Information
  name: z
    .string()
    .min(1, "Project name is required")
    .max(100, "Project name must be less than 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),

  // Step 2: Project Context for LLM
  type: z.enum([
    "web-development",
    "mobile-app",
    "desktop-app",
    "api-backend",
    "data-science",
    "machine-learning",
    "research",
    "marketing",
    "design",
    "business",
    "education",
    "personal",
    "other",
  ]),

  category: z.enum([
    "startup",
    "enterprise",
    "personal",
    "freelance",
    "open-source",
    "academic",
    "non-profit",
  ]),

  targetAudience: z
    .string()
    .min(5, "Target audience description is required")
    .max(200, "Target audience must be less than 200 characters"),

  technologies: z
    .array(z.string())
    .min(1, "Please select at least one technology"),

  keywords: z
    .array(z.string())
    .min(2, "Please add at least 2 keywords")
    .max(10, "Maximum 10 keywords allowed"),

  timeline: z.enum([
    "1-week",
    "2-4-weeks",
    "1-3-months",
    "3-6-months",
    "6-12-months",
    "1-year+",
  ]),

  teamSize: z.enum(["solo", "2-3", "4-6", "7-10", "11-20", "20+"]),

  priority: z.enum(["low", "medium", "high", "critical"]),

  goals: z.array(z.string()).min(1, "Please add at least one project goal"),

  challenges: z.array(z.string()).optional(),

  resources: z
    .object({
      budget: z
        .enum(["none", "low", "medium", "high", "enterprise"])
        .optional(),
      tools: z.array(z.string()).optional(),
      references: z.array(z.string()).optional(),
    })
    .optional(),

  context: z
    .string()
    .max(1000, "Additional context must be less than 1000 characters")
    .optional(),
});

export type CreateProjectFormData = z.infer<typeof createProjectSchema>;

// Technology options for the form
export const technologyOptions = [
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
  "Python",
  "Java",
  "C#",
  ".NET",
  "PHP",
  "Ruby",
  "Go",
  "Rust",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "C++",
  "C",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "REST API",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "Firebase",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "WordPress",
  "Shopify",
  "Figma",
  "Adobe Creative Suite",
  "Unity",
  "Unreal Engine",
  "Blender",
  "Three.js",
];

// Keyword suggestions based on project type
export const keywordSuggestions: Record<string, string[]> = {
  "web-development": [
    "responsive",
    "SEO",
    "performance",
    "accessibility",
    "progressive-web-app",
    "SPA",
    "SSR",
  ],
  "mobile-app": [
    "cross-platform",
    "native",
    "push-notifications",
    "offline-first",
    "app-store",
  ],
  "desktop-app": [
    "cross-platform",
    "native",
    "installer",
    "auto-update",
    "system-integration",
  ],
  "api-backend": [
    "REST",
    "GraphQL",
    "microservices",
    "authentication",
    "rate-limiting",
    "documentation",
  ],
  "data-science": [
    "analytics",
    "visualization",
    "machine-learning",
    "big-data",
    "ETL",
    "dashboard",
  ],
  "machine-learning": [
    "deep-learning",
    "neural-networks",
    "NLP",
    "computer-vision",
    "model-deployment",
  ],
  research: [
    "academic",
    "peer-review",
    "methodology",
    "analysis",
    "publication",
    "reproducible",
  ],
  marketing: [
    "campaign",
    "analytics",
    "conversion",
    "social-media",
    "content-marketing",
    "SEO",
  ],
  design: [
    "user-experience",
    "user-interface",
    "prototype",
    "wireframe",
    "brand-identity",
    "responsive",
  ],
  business: [
    "strategy",
    "analysis",
    "operations",
    "automation",
    "reporting",
    "efficiency",
  ],
  education: [
    "e-learning",
    "curriculum",
    "assessment",
    "interactive",
    "accessibility",
    "gamification",
  ],
  personal: [
    "productivity",
    "hobby",
    "learning",
    "skill-building",
    "portfolio",
    "side-project",
  ],
  other: [
    "custom",
    "unique",
    "innovative",
    "experimental",
    "proof-of-concept",
    "prototype",
  ],
};
