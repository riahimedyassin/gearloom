"use client";

import {
  Folder,
  Forward,
  MoreHorizontal,
  Plus,
  Trash2,
  type LucideIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 px-1">
        Projects
      </SidebarGroupLabel>
      <SidebarMenu className="space-y-1">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name} className="group">
            <SidebarMenuButton
              asChild
              className="
                h-9 rounded-lg transition-colors duration-150
                hover:bg-accent hover:text-foreground
              "
            >
              <a href={item.url} className="flex items-center">
                <div
                  className="
                  flex h-5 w-5 items-center justify-center rounded-md 
                  bg-primary/15 mr-3
                "
                >
                  <item.icon className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm truncate">{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150
                    hover:bg-accent rounded-md h-6 w-6
                  "
                >
                  <MoreHorizontal className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg border shadow-md"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem className="text-sm">
                  <Folder className="text-muted-foreground h-4 w-4" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm">
                  <Forward className="text-muted-foreground h-4 w-4" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm text-destructive focus:text-destructive">
                  <Trash2 className="h-4 w-4" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton
            className="
              h-9 rounded-lg text-muted-foreground transition-colors duration-150
              hover:bg-accent hover:text-foreground
              border border-dashed border-border/60
            "
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-muted/60 mr-3">
              <Plus className="h-3 w-3" />
            </div>
            <span className="text-sm">Add Project</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
