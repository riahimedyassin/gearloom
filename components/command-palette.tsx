"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { usePomodoroStore, useUIStore } from "@/stores";
import {
  CheckSquare,
  Clock,
  FileText,
  Folder,
  Palette,
  Plus,
  Settings,
  Target,
  Timer
} from "lucide-react";
import { useEffect } from "react";

interface CommandPaletteProps {
  onCreateTask?: () => void;
  onCreateProject?: () => void;
  onOpenSettings?: () => void;
}

export function CommandPalette({
  onCreateTask,
  onCreateProject,
  onOpenSettings,
}: CommandPaletteProps) {
  const {
    commandPaletteOpen,
    closeCommandPalette,
    toggleTheme,
    openCreateTaskModal,
    openCreateProjectModal,
  } = useUIStore();

  const { openTimer } = usePomodoroStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        useUIStore.getState().toggleCommandPalette();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = (command: () => void) => {
    closeCommandPalette();
    command();
  };

  return (
    <CommandDialog open={commandPaletteOpen} onOpenChange={closeCommandPalette}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                openCreateTaskModal();
                onCreateTask?.();
              })
            }
          >
            <Plus className="mr-2 h-4 w-4" />
            <span>Create Task</span>
            <div className="ml-auto text-xs tracking-widest opacity-60">
              Ctrl+T
            </div>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                openCreateProjectModal();
                onCreateProject?.();
              })
            }
          >
            <Folder className="mr-2 h-4 w-4" />
            <span>Create Project</span>
            <div className="ml-auto text-xs tracking-widest opacity-60">
              Ctrl+P
            </div>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => openTimer())}>
            <Timer className="mr-2 h-4 w-4" />
            <span>Start Pomodoro Timer</span>
            <div className="ml-auto text-xs tracking-widest opacity-60">
              Ctrl+Shift+T
            </div>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() =>
              runCommand(() => (window.location.href = "/workspaces"))
            }
          >
            <Folder className="mr-2 h-4 w-4" />
            <span>Go to Workspaces</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => (window.location.href = "/workspaces/kanban"))
            }
          >
            <CheckSquare className="mr-2 h-4 w-4" />
            <span>Go to Kanban Board</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => (window.location.href = "/dashboard"))
            }
          >
            <Target className="mr-2 h-4 w-4" />
            <span>Go to Dashboard</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Recent">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Website Redesign Project</span>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>API Development Task</span>
          </CommandItem>
          <CommandItem>
            <Clock className="mr-2 h-4 w-4" />
            <span>Daily Standup Meeting</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => runCommand(() => onOpenSettings?.())}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Open Settings</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => toggleTheme())}>
            <Palette className="mr-2 h-4 w-4" />
            <span>Toggle Theme</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
