"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  CheckCircle, 
  Clock, 
  Search,
  ChevronDown,
  Timer as TimerIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePomodoroStore } from "@/stores";

// Mock task data - in a real app, this would come from your task management system
interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  columnId: number;
  projectId: number;
  columnName?: string;
}

interface TaskSelectorProps {
  onTaskSelect?: (task: Task | null) => void;
  className?: string;
}

export function TaskSelector({ onTaskSelect, className }: TaskSelectorProps) {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const { linkedTask, setLinkedTask } = usePomodoroStore();

  // Mock data - replace with actual task fetching logic
  useEffect(() => {
    // Simulate fetching tasks from kanban board
    setTasks([
      {
        id: 1,
        title: "Implement user authentication",
        description: "Add login and registration functionality",
        priority: 'high',
        columnId: 1,
        projectId: 1,
        columnName: "In Progress"
      },
      {
        id: 2,
        title: "Design dashboard mockups",
        description: "Create wireframes for the main dashboard",
        priority: 'medium',
        columnId: 1,
        projectId: 1,
        columnName: "Todo"
      },
      {
        id: 3,
        title: "Setup CI/CD pipeline",
        description: "Configure automated testing and deployment",
        priority: 'medium',
        columnId: 2,
        projectId: 1,
        columnName: "In Progress"
      },
      {
        id: 4,
        title: "Write API documentation",
        description: "Document all REST endpoints",
        priority: 'low',
        columnId: 3,
        projectId: 1,
        columnName: "Review"
      },
    ]);
  }, []);

  const handleTaskSelect = (task: Task) => {
    const linkedTaskData = {
      id: task.id,
      title: task.title,
      description: task.description,
      columnId: task.columnId,
      projectId: task.projectId
    };
    
    setLinkedTask(linkedTaskData);
    onTaskSelect?.(task);
    setOpen(false);
  };

  const handleClearTask = () => {
    setLinkedTask(null);
    onTaskSelect?.(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={linkedTask ? "default" : "outline"}
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between min-w-[200px] max-w-[300px]",
              linkedTask && "bg-primary text-primary-foreground"
            )}
          >
            <div className="flex items-center gap-2 truncate">
              <TimerIcon className="h-4 w-4 flex-shrink-0" />
              {linkedTask ? (
                <span className="truncate">{linkedTask.title}</span>
              ) : (
                <span className="text-muted-foreground">Select task for Pomodoro</span>
              )}
            </div>
            <ChevronDown className="h-4 w-4 flex-shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Search tasks..." 
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>No tasks found.</CommandEmpty>
              <CommandGroup>
                {linkedTask && (
                  <CommandItem
                    onSelect={handleClearTask}
                    className="text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Clear selection
                  </CommandItem>
                )}
                {tasks.map((task) => (
                  <CommandItem
                    key={task.id}
                    onSelect={() => handleTaskSelect(task)}
                    className="flex items-start gap-3 p-3"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div 
                        className={cn(
                          "w-2 h-2 rounded-full flex-shrink-0",
                          getPriorityColor(task.priority)
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{task.title}</div>
                        {task.description && (
                          <div className="text-sm text-muted-foreground truncate">
                            {task.description}
                          </div>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {task.columnName}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={cn("text-xs", getPriorityColor(task.priority))}
                          >
                            {task.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {linkedTask?.id === task.id && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      {linkedTask && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearTask}
          className="h-8 w-8 p-0"
        >
          ×
        </Button>
      )}
    </div>
  );
}
