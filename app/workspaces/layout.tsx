"use client";

import { ProjectTypeSidebar } from "@/components/project-type-sidebar";
import { WorkspaceNavbar } from "@/components/workspace-navbar";
import { FloatingPomodoroButton } from "@/components/floating-pomodoro-button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useNotificationStore } from "@/stores";
import { ProjectProvider } from "@/contexts/project-context";

function WorkspaceLayoutContent({ children }: { children: React.ReactNode }) {
  const { addNotification } = useNotificationStore();

  const handlePomodoroClick = () => {
    console.log("Starting Pomodoro session...");
  };

  const handleCreateNew = () => {
    console.log("Creating new task...");
    addNotification({
      title: "New task created",
      description: "Your task has been successfully created",
      type: "success",
      time: "Just now",
      read: false,
    });
  };

  const handleSearch = (query: string) => {
    console.log("Searching:", query);
  };

  return (
    <SidebarProvider>
      <ProjectTypeSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-x-hidden">
        <WorkspaceNavbar
          workspaceName="My Workspace"
          onPomodoroClick={handlePomodoroClick}
          onCreateNew={handleCreateNew}
          onSearch={handleSearch}
          className="w-full"
        />
        <div className="flex-1 overflow-hidden">
          <div className="h-full p-6">{children}</div>
        </div>
      </SidebarInset>
      
      <FloatingPomodoroButton />
    </SidebarProvider>
  );
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <ProjectProvider>
      <WorkspaceLayoutContent>{children}</WorkspaceLayoutContent>
    </ProjectProvider>
  );
}
