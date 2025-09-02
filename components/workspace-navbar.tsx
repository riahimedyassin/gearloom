"use client";

import { CommandPalette } from "@/components/command-palette";
import { NotificationCenter } from "@/components/notification-center";
import { PomodoroTimer } from "@/components/pomodoro-timer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useNotificationStore, usePomodoroStore, useUIStore } from "@/stores";
import {
  Bell,
  Command,
  HelpCircle,
  Moon,
  Plus,
  Search,
  Settings,
  Sidebar,
  Sun,
  Timer,
  User,
} from "lucide-react";
import { useEffect } from "react";

interface WorkspaceNavbarProps {
  workspaceName?: string;
  onPomodoroClick?: () => void;
  onCreateNew?: () => void;
  onSearch?: (query: string) => void;
  className?: string;
}

export function WorkspaceNavbar({
  workspaceName,
  onPomodoroClick,
  onCreateNew,
  onSearch,
  className,
}: WorkspaceNavbarProps) {
  const { toggleSidebar } = useSidebar();

  const {
    isDarkMode,
    toggleTheme,
    openCommandPalette,
    openCreateTaskModal,
    currentWorkspaceName,
    setCurrentWorkspaceName,
  } = useUIStore();

  const { unreadCount } = useNotificationStore();
  const { openTimer } = usePomodoroStore();

  // Initialize workspace name
  useEffect(() => {
    if (workspaceName && workspaceName !== currentWorkspaceName) {
      setCurrentWorkspaceName(workspaceName);
    }
  }, [workspaceName, currentWorkspaceName, setCurrentWorkspaceName]);

  const handlePomodoroClick = () => {
    openTimer();
    onPomodoroClick?.();
  };

  const handleCreateNew = () => {
    openCreateTaskModal();
    onCreateNew?.();
  };

  const handleSearchFocus = () => {
    openCommandPalette();
  };

  return (
    <TooltipProvider>
      <nav
        className={cn(
          "flex items-center justify-between px-4 py-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50",
          className
        )}
      >
        {/* Left section */}
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                <Sidebar className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle sidebar</p>
            </TooltipContent>
          </Tooltip>

          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-foreground truncate">
              {currentWorkspaceName}
            </h1>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative cursor-pointer" onClick={handleSearchFocus}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <div className="pl-10 pr-4 h-9 bg-muted/50 border border-border rounded-md flex items-center text-muted-foreground text-sm hover:bg-muted/70 transition-colors">
              Search tasks, projects, or press Ctrl+K
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <Command className="h-3 w-3" />K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Quick Actions */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePomodoroClick}
                className="h-8 w-8 p-0 hover:bg-primary/10 text-primary hover:text-primary"
              >
                <Timer className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Start Pomodoro Timer</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onCreateNew}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create new task</p>
            </TooltipContent>
          </Tooltip>

          {/* Notifications */}
          <NotificationCenter>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-primary/10 relative"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground">
                  {unreadCount > 99 ? "99+" : unreadCount}
                </Badge>
              )}
            </Button>
          </NotificationCenter>

          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle theme</p>
            </TooltipContent>
          </Tooltip>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Command Palette */}
        <CommandPalette
          onCreateTask={handleCreateNew}
          onCreateProject={() => console.log("Create project")}
          onOpenSettings={() => console.log("Open settings")}
        />

        {/* Pomodoro Timer */}
        <PomodoroTimer
          onSessionComplete={(type: "work" | "break") =>
            console.log(`${type} session completed!`)
          }
        />
      </nav>
    </TooltipProvider>
  );
}
