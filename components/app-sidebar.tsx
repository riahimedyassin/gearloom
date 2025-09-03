"use client";

import { Calendar, Folder, Home, Kanban, Users, Bell, BarChart3, Timer, Settings } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { ProjectSwitcher } from "@/components/project-switcher";
import { PomodoroTimer } from "@/components/pomodoro-timer";
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
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: false,
      items: [],
    },
    {
      title: "Kanban Board",
      url: "/workspaces/kanban",
      icon: Kanban,
      isActive: true,
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
  contextualSections: [
    {
      title: "Analytics & Reports",
      url: "/analytics",
      icon: BarChart3,
      items: [
        { title: "Progress Overview", url: "/analytics/progress" },
        { title: "Time Tracking", url: "/analytics/time" },
        { title: "Productivity Metrics", url: "/analytics/productivity" },
        { title: "Goal Achievement", url: "/analytics/goals" },
      ],
    },
    {
      title: "Productivity Tools",
      url: "/tools",
      icon: Timer,
      items: [
        { title: "Pomodoro Sessions", url: "/tools/pomodoro" },
        { title: "Focus Mode", url: "/tools/focus" },
        { title: "Time Blocks", url: "/tools/time-blocks" },
        { title: "Break Reminders", url: "/tools/breaks" },
      ],
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: Bell,
      items: [
        { title: "Task Reminders", url: "/notifications/tasks" },
        { title: "Deadline Alerts", url: "/notifications/deadlines" },
        { title: "Team Updates", url: "/notifications/team" },
        { title: "Settings", url: "/notifications/settings" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar
        collapsible="icon"
        {...props}
        variant="floating"
        className="border-r-0 group"
      >
        <SidebarHeader className="bg-background/95 border-b border-border/50 px-3 py-3 group-data-[collapsible=icon]:px-2">
          <ProjectSwitcher />
        </SidebarHeader>
        <SidebarContent className="bg-background/95 px-3 py-2 group-data-[collapsible=icon]:px-2">
          <NavMain items={data.navMain} />
          <NavMain items={data.contextualSections} />
        </SidebarContent>
        <SidebarFooter className="bg-background/95 border-t border-border/50 px-3 py-3 group-data-[collapsible=icon]:px-2">
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      {/* Pomodoro Timer */}
      <PomodoroTimer />
    </>
  );
}
