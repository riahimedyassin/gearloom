"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

export type ProjectType =
  | "startup"
  | "learning"
  | "web-development"
  | "mobile-app"
  | "data-science"
  | "default";

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  category:
    | "startup"
    | "enterprise"
    | "personal"
    | "freelance"
    | "open-source"
    | "academic"
    | "non-profit";
  priority: "low" | "medium" | "high" | "critical";
}

interface ProjectContextType {
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Mock projects - in real app, this would come from your API/database
const defaultProjects: Project[] = [
  {
    id: "1",
    name: "GearLoom Task Manager",
    description:
      "A comprehensive task management system with Pomodoro integration",
    type: "web-development",
    category: "personal",
    priority: "high",
  },
  {
    id: "2",
    name: "Startup MVP",
    description: "Building our minimum viable product",
    type: "startup",
    category: "startup",
    priority: "critical",
  },
  {
    id: "3",
    name: "Learn React Advanced",
    description: "Deep dive into advanced React patterns",
    type: "learning",
    category: "personal",
    priority: "medium",
  },
  {
    id: "4",
    name: "Mobile App Project",
    description: "Cross-platform mobile application",
    type: "mobile-app",
    category: "freelance",
    priority: "high",
  },
  {
    id: "5",
    name: "Data Analytics Pipeline",
    description: "Machine learning pipeline for customer analytics",
    type: "data-science",
    category: "enterprise",
    priority: "medium",
  },
];

export function ProjectProvider({
  children,
  initialProject = null,
}: {
  children: ReactNode;
  initialProject?: Project | null;
}) {
  const [currentProject, setCurrentProjectState] = useState<Project | null>(
    initialProject || (defaultProjects.length > 0 ? defaultProjects[0] : null)
  );
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  const setCurrentProject = (project: Project | null) => {
    setCurrentProjectState(project);
    // Persist to localStorage
    if (project) {
      localStorage.setItem("currentProject", JSON.stringify(project));
    } else {
      localStorage.removeItem("currentProject");
    }
  };

  // Load from localStorage on client side
  React.useEffect(() => {
    const savedProject = localStorage.getItem("currentProject");
    if (savedProject) {
      try {
        const project = JSON.parse(savedProject);
        setCurrentProjectState(project);
      } catch (error) {
        console.error("Error parsing saved project:", error);
      }
    }
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        setCurrentProject,
        projects,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}

// Helper function to get project type from current project
export function getCurrentProjectType(project: Project | null): ProjectType {
  return project?.type || "default";
}
