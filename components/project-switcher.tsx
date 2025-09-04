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
import { useProjects } from "@/hooks/useProject";
import { useProject } from "@/contexts/project-context";
import { Project } from "@/lib/types/project";

const getProjectIcon = (type: Project["type"]) => {
  switch (type) {
    case "web_development":
      return "💻";
    case "mobile_app":
      return "📱";
    case "data_science":
      return "📊";
    case "startup":
      return "🚀";
    case "learning":
      return "📚";
    case "api_backend":
      return "⚡";
    case "desktop_app":
      return "🖥️";
    case "machine_learning":
      return "🤖";
    case "research":
      return "🔬";
    case "marketing":
      return "📢";
    case "design":
      return "🎨";
    case "business":
      return "💼";
    case "education":
      return "🎓";
    case "personal":
      return "👤";
    case "other":
    case "custom":
      return "🔧";
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
  const router = useRouter();
  const { data: projects = [], isLoading, error } = useProjects();
  const [currentProjectId, setCurrentProjectId] = React.useState<number | null>(
    projects.length > 0 ? projects[0].id : null
  );

  // Update current project when projects load
  React.useEffect(() => {
    if (projects.length > 0 && !currentProjectId) {
      setCurrentProjectId(projects[0].id);
    }
  }, [projects, currentProjectId]);

  const currentProject = projects.find(p => p.id === currentProjectId) || projects[0];

  const handleCreateProject = () => {
    router.push("/workspaces/create");
  };

  const handleProjectSwitch = (project: Project) => {
    console.log("Switching to project:", project.name);
    setCurrentProjectId(project.id);
  };

  if (isLoading) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="h-12 rounded-lg">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-lg animate-pulse bg-muted">
              📁
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-muted-foreground animate-pulse">
                Loading projects...
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (error) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="h-12 rounded-lg" onClick={handleCreateProject}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-lg">
              <Plus className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-destructive">
                Failed to load projects
              </span>
              <span className="truncate text-xs text-muted-foreground">
                Click to create your first project
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (!currentProject) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="h-12 rounded-lg" onClick={handleCreateProject}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-lg">
              <Plus className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-muted-foreground">
                No projects
              </span>
              <span className="truncate text-xs text-muted-foreground">
                Create your first project
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
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
              Switch Projects ({projects.length})
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
                    {project.id === currentProjectId && (
                      <span className="text-xs bg-primary text-primary-foreground px-1 rounded">
                        current
                      </span>
                    )}
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
