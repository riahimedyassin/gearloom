"use client";

import { ChevronsUpDown, Plus } from "lucide-react";
import * as React from "react";
import { useRouter } from "next/navigation";

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
import { useProject, Project } from "@/contexts/project-context";

const getProjectIcon = (type: Project["type"]) => {
  switch (type) {
    case "web-development":
      return "💻";
    case "mobile-app":
      return "📱";
    case "data-science":
      return "📊";
    case "startup":
      return "🚀";
    case "learning":
      return "📚";
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

export function ProjectSwitcher() {
  const { isMobile } = useSidebar();
  const { currentProject, setCurrentProject, projects } = useProject();
  const router = useRouter();

  const handleCreateProject = () => {
    router.push("/create-workspace");
  };

  if (!currentProject) {
    return null;
  }

  const handleProjectSwitch = (project: Project) => {
    console.log("Switching from", currentProject?.name, "to", project.name);
    setCurrentProject(project);
  };

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
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-lg group-data-[collapsible=icon]:size-6">
                {getProjectIcon(currentProject.type)}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold text-foreground">
                  {currentProject.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {currentProject.description}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Switch Projects
            </DropdownMenuLabel>
            {projects.map((project, index) => (
              <DropdownMenuItem
                key={project.id}
                onClick={() => handleProjectSwitch(project)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border text-sm">
                  {getProjectIcon(project.type)}
                </div>
                <div className="grid flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{project.name}</span>
                    <span className={`text-xs ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground truncate">
                    {project.description}
                  </span>
                </div>
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2" onClick={handleCreateProject}>
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add project</div>
              <DropdownMenuShortcut>⌘+</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
