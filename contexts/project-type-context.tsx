"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ProjectType =
  | "startup"
  | "learning"
  | "web-development"
  | "mobile-app"
  | "data-science"
  | "default";

interface ProjectTypeContextType {
  currentProjectType: ProjectType;
  setProjectType: (type: ProjectType) => void;
}

const ProjectTypeContext = createContext<ProjectTypeContextType | undefined>(
  undefined
);

export function ProjectTypeProvider({
  children,
  initialType = "default",
}: {
  children: ReactNode;
  initialType?: ProjectType;
}) {
  const [currentProjectType, setCurrentProjectType] =
    useState<ProjectType>(initialType);

  const setProjectType = (type: ProjectType) => {
    setCurrentProjectType(type);
    // You could also persist this to localStorage or send to API
    localStorage.setItem("currentProjectType", type);
  };

  return (
    <ProjectTypeContext.Provider value={{ currentProjectType, setProjectType }}>
      {children}
    </ProjectTypeContext.Provider>
  );
}

export function useProjectType() {
  const context = useContext(ProjectTypeContext);
  if (context === undefined) {
    throw new Error("useProjectType must be used within a ProjectTypeProvider");
  }
  return context;
}

// Helper function to get project type from URL or other sources
export function getProjectTypeFromPath(pathname: string): ProjectType {
  if (pathname.includes("/startup/")) return "startup";
  if (pathname.includes("/learning/")) return "learning";
  if (pathname.includes("/web-development/")) return "web-development";
  if (pathname.includes("/mobile-app/")) return "mobile-app";
  if (pathname.includes("/data-science/")) return "data-science";
  return "default";
}
