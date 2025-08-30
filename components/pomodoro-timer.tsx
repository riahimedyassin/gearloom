"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Timer, 
  Play, 
  Pause, 
  Square, 
  RotateCcw,
  Coffee,
  Brain,
  CheckCircle,
  ChevronDown,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePomodoroStore } from "@/stores";
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

type SessionType = 'work' | 'short-break' | 'long-break';

// Mock task data - in a real app, this would come from your task management system
interface TaskOption {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  columnId: number;
  projectId: number;
  columnName?: string;
}

interface PomodoroTimerProps {
  onSessionComplete?: (type: 'work' | 'break') => void;
}

export function PomodoroTimer({ onSessionComplete }: PomodoroTimerProps) {
  const [taskSelectorOpen, setTaskSelectorOpen] = React.useState(false);
  const [availableTasks, setAvailableTasks] = React.useState<TaskOption[]>([]);
  
  const {
    sessionType,
    timeLeft,
    timerState,
    sessionsCompleted,
    isOpen,
    linkedTask,
    totalTimeSpentOnTask,
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    closeTimer,
    completeSession,
    setSessionType,
    getPresetDuration,
    setLinkedTask,
  } = usePomodoroStore();

  // Mock data - replace with actual task fetching logic
  React.useEffect(() => {
    // Simulate fetching tasks from kanban board
    setAvailableTasks([
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const changeSessionType = (value: string) => {
    const type = value as SessionType;
    setSessionType(type);
  };

  const handleTaskSelect = (task: TaskOption) => {
    const linkedTaskData = {
      id: task.id,
      title: task.title,
      description: task.description,
      columnId: task.columnId,
      projectId: task.projectId
    };
    
    setLinkedTask(linkedTaskData);
    setTaskSelectorOpen(false);
  };

  const handleClearTask = () => {
    setLinkedTask(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  // Handle session completion callback
  useEffect(() => {
    if (timerState === 'completed') {
      onSessionComplete?.(sessionType === 'work' ? 'work' : 'break');
    }
  }, [timerState, sessionType, onSessionComplete]);

  const getSessionIcon = () => {
    switch (sessionType) {
      case 'work': return <Brain className="h-5 w-5" />;
      case 'short-break': return <Coffee className="h-5 w-5" />;
      case 'long-break': return <Coffee className="h-5 w-5" />;
    }
  };

  const getSessionColor = () => {
    switch (sessionType) {
      case 'work': return 'bg-primary text-primary-foreground';
      case 'short-break': return 'bg-green-500 text-white';
      case 'long-break': return 'bg-blue-500 text-white';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeTimer}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Timer className="h-5 w-5" />
            Pomodoro Timer
          </DialogTitle>
          <DialogDescription>
            Stay focused with the Pomodoro Technique
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Task Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Linked Task</h4>
              {linkedTask && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleClearTask}
                  className="h-6 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </Button>
              )}
            </div>
            
            <Popover open={taskSelectorOpen} onOpenChange={setTaskSelectorOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={linkedTask ? "default" : "outline"}
                  role="combobox"
                  aria-expanded={taskSelectorOpen}
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-2 truncate">
                    {linkedTask ? (
                      <>
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{linkedTask.title}</span>
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 flex-shrink-0" />
                        <span className="text-muted-foreground">Select a task</span>
                      </>
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
                      {availableTasks.map((task) => (
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
                                  className="text-xs capitalize"
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

            {/* Task Info */}
            {linkedTask && (
              <div className="rounded-lg border bg-muted/50 p-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">{linkedTask.title}</h4>
                  {linkedTask.description && (
                    <p className="text-xs text-muted-foreground">{linkedTask.description}</p>
                  )}
                  {totalTimeSpentOnTask > 0 && (
                    <div className="text-xs text-muted-foreground">
                      Time spent: {Math.floor(totalTimeSpentOnTask / 60)}m {totalTimeSpentOnTask % 60}s
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Session Type Selector */}
          <div className="flex items-center gap-4">
            <Tabs value={sessionType} onValueChange={changeSessionType} className="flex-1">
              <TabsList className="grid w-full grid-cols-3 h-12">
                <TabsTrigger 
                  value="work" 
                  className="flex flex-col items-center gap-1 py-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3" />
                    <span>Work</span>
                  </div>
                  <span className="text-[10px] opacity-70">25 min</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="short-break" 
                  className="flex flex-col items-center gap-1 py-2 text-xs data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-1">
                    <Coffee className="h-3 w-3" />
                    <span>Break</span>
                  </div>
                  <span className="text-[10px] opacity-70">5 min</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="long-break" 
                  className="flex flex-col items-center gap-1 py-2 text-xs data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-1">
                    <Coffee className="h-3 w-3" />
                    <span>Long</span>
                  </div>
                  <span className="text-[10px] opacity-70">15 min</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Badge variant="secondary" className="flex items-center gap-1 flex-shrink-0">
              <CheckCircle className="h-3 w-3" />
              {sessionsCompleted}
            </Badge>
          </div>

          {/* Timer Display */}
          <div className="flex flex-col items-center space-y-4">
            <div className={cn(
              "relative w-48 h-48 rounded-full flex items-center justify-center border-8 transition-all duration-300",
              getSessionColor(),
              timerState === 'running' && "animate-pulse"
            )}>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm opacity-80 flex items-center justify-center gap-1 mt-1">
                  {getSessionIcon()}
                  {sessionType.replace('-', ' ')}
                </div>
              </div>
            </div>

            {timerState === 'completed' && (
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Session completed! Great work! 🎉
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-2">
            {timerState === 'idle' && (
              <Button onClick={startTimer} className="gap-2">
                <Play className="h-4 w-4" />
                Start
              </Button>
            )}
            
            {timerState === 'running' && (
              <Button onClick={pauseTimer} variant="secondary" className="gap-2">
                <Pause className="h-4 w-4" />
                Pause
              </Button>
            )}
            
            {timerState === 'paused' && (
              <>
                <Button onClick={startTimer} className="gap-2">
                  <Play className="h-4 w-4" />
                  Resume
                </Button>
                <Button onClick={stopTimer} variant="outline" className="gap-2">
                  <Square className="h-4 w-4" />
                  Stop
                </Button>
              </>
            )}
            
            {(timerState === 'running' || timerState === 'paused') && (
              <Button onClick={resetTimer} variant="ghost" size="sm" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            )}
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(((getPresetDuration(sessionType) - timeLeft) / getPresetDuration(sessionType)) * 100)}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className={cn("h-2 rounded-full transition-all duration-1000", getSessionColor())}
                style={{ 
                  width: `${((getPresetDuration(sessionType) - timeLeft) / getPresetDuration(sessionType)) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
