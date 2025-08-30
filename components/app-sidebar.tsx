"use client";

import * as React from "react";
import {
  Home,
  Kanban,
  Users,
  Settings,
  Calendar,
  BarChart3,
  Folder,
  Search,
  Bell,
  Sparkles,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Modern data structure - streamlined for professional use
const data = {
  user: {
    name: "Alex Morgan",
    email: "alex@gearloom.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "GearLoom",
      logo: Sparkles,
      plan: "Pro",
    },
    {
      name: "Design Team",
      logo: Folder,
      plan: "Team",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
      items: [],
    },
    {
      title: "Kanban Board",
      url: "/kanban",
      icon: Kanban,
      items: [],
    },
    {
      title: "Projects",
      url: "/workspaces",
      icon: Folder,
      items: [
        {
          title: "All Projects",
          url: "/workspaces",
        },
        {
          title: "Favorites",
          url: "/workspaces/favorites",
        },
      ],
    },
    {
      title: "Team",
      url: "/team",
      icon: Users,
      items: [
        {
          title: "Members",
          url: "/team/members",
        },
        {
          title: "Settings",
          url: "/team/settings",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Product Launch",
      url: "/workspaces/1",
      icon: Sparkles,
    },
    {
      name: "Website Redesign",
      url: "/workspaces/2", 
      icon: Calendar,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar 
      collapsible="icon" 
      {...props} 
      variant="floating"
      className="border-r-0 group"
    >
      <SidebarHeader className="bg-background/95 border-b border-border/50 px-3 py-3 group-data-[collapsible=icon]:px-2">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-background/95 px-3 py-2 group-data-[collapsible=icon]:px-2">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="bg-background/95 border-t border-border/50 px-3 py-3 group-data-[collapsible=icon]:px-2">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
