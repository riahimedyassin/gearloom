"use client";

import { ChevronsUpDown, Plus } from "lucide-react";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUIStore } from "@/stores";

interface Project {
  id: string;
  name: string;
  description: string;
  type:
    | "web-development"
    | "mobile-app"
    | "desktop-app"
    | "api-backend"
    | "data-science"
    | "machine-learning"
    | "research"
    | "marketing"
    | "design"
    | "business"
    | "education"
    | "personal"
    | "other";
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

// Mock projects - in real app, this would come from your API/store
const mockProjects: Project[] = [
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
    name: "E-commerce Platform",
    description: "Building a modern e-commerce solution",
    type: "web-development",
    category: "startup",
    priority: "critical",
  },
  {
    id: "3",
    name: "ML Data Pipeline",
    description: "Machine learning pipeline for customer analytics",
    type: "data-science",
    category: "enterprise",
    priority: "medium",
  },
];

const getProjectIcon = (type: Project["type"]) => {
  switch (type) {
    case "web-development":
    case "mobile-app":
    case "desktop-app":
      return "💻";
    case "api-backend":
      return "🔧";
    case "data-science":
    case "machine-learning":
      return "📊";
    case "research":
      return "🔬";
    case "marketing":
      return "📈";
    case "design":
      return "🎨";
    case "business":
      return "💼";
    case "education":
      return "📚";
    case "personal":
      return "👤";
    default:
      return "📁";
  }
};

const getPriorityColor = (priority: Project["priority"]) => {
  switch (priority) {
    case "critical":
      return "text-red-600 dark:text-red-400";
    case "high":
      return "text-orange-600 dark:text-orange-400";
    case "medium":
      return "text-yellow-600 dark:text-yellow-400";
    case "low":
      return "text-green-600 dark:text-green-400";
    default:
      return "text-gray-600 dark:text-gray-400";
  }
};

export function ProjectSwitcher({
  projects = mockProjects,
}: {
  projects?: Project[];
}) {
  const { isMobile } = useSidebar();
  const { openCreateProjectModal } = useUIStore();
  const [activeProject, setActiveProject] = React.useState(projects[0]);

  if (!activeProject) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="
                data-[state=open]:bg-accent data-[state=open]:text-accent-foreground
                hover:bg-accent transition-colors duration-150
                h-12 rounded-lg
                group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:px-0
                group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:mx-auto
              "
            >
              <div
                className="
                bg-primary text-primary-foreground flex aspect-square size-8 
                items-center justify-center rounded-lg text-sm
                group-data-[collapsible=icon]:size-6
              "
              >
                {getProjectIcon(activeProject.type)}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium text-foreground">
                  {activeProject.name}
                </span>
                <span className="truncate text-xs text-muted-foreground capitalize">
                  {activeProject.type.replace("-", " ")} •{" "}
                  {activeProject.category}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border shadow-md"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
              Switch Project
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {projects.map((project, index) => (
              <DropdownMenuItem
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="gap-3 p-2 hover:bg-accent"
              >
                <div className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-sm">
                  {getProjectIcon(project.type)}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-medium text-foreground text-sm truncate">
                    {project.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground capitalize truncate">
                      {project.type.replace("-", " ")}
                    </span>
                    <span
                      className={`text-xs font-medium ${getPriorityColor(
                        project.priority
                      )}`}
                    >
                      {project.priority}
                    </span>
                  </div>
                </div>
                <DropdownMenuShortcut className="text-muted-foreground">
                  ⌘{index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-3 p-2 hover:bg-accent"
              onClick={() => openCreateProjectModal()}
            >
              <div className="flex size-6 items-center justify-center rounded-md border border-dashed border-border bg-muted/50">
                <Plus className="size-3 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-foreground text-sm">
                  Create Project
                </span>
                <span className="text-xs text-muted-foreground">
                  Start a new project
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
