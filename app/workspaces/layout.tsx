"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { WorkspaceNavbar } from "@/components/workspace-navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useNotificationStore } from "@/stores";

export default function layout({ children }: { children: React.ReactNode }) {
  const { addNotification } = useNotificationStore();

  const handlePomodoroClick = () => {
    console.log("Starting Pomodoro session...");
  };

  const handleCreateNew = () => {
    console.log("Creating new task...");
    // Example of adding a notification when task is created
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
    // Add your search logic here
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-x-hidden">
        <WorkspaceNavbar
          workspaceName="My Workspace"
          onPomodoroClick={handlePomodoroClick}
          onCreateNew={handleCreateNew}
          onSearch={handleSearch}
          className="w-full"
        />
        <div className="flex-1 overflow-hidden">
          <div className="h-full  p-6">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
