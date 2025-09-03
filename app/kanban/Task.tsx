"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePomodoroStore } from "@/stores";
import {
  AlertTriangle,
  Archive,
  ArrowDown,
  ArrowUp,
  Copy,
  Edit,
  MessageCircle,
  MoreVertical,
  Pause,
  Play,
  Square,
  Subtitles,
  Timer,
  Trash2,
} from "lucide-react";
import React from "react";
import { useDrag } from "react-dnd";
import { Task as TaskType } from "./types";

interface TaskProps {
  task: TaskType;
  onClick: () => void;
  onDelete?: (taskId: number) => void;
  onDuplicate?: (task: TaskType) => void;
  onArchive?: (taskId: number) => void;
  onTimerClick?: (task: TaskType) => void;
  isActiveTimer?: boolean;
}

export const TaskComponent: React.FC<TaskProps> = ({
  task,
  onClick,
  onDelete,
  onDuplicate,
  onArchive,
  onTimerClick,
  isActiveTimer = false,
}) => {
  const {
    linkedTask,
    timerState,
    timeLeft,
    sessionType,
    startTimer,
    pauseTimer,
    stopTimer,
    openTimer,
    setLinkedTask,
  } = usePomodoroStore();

  // Check if this task is currently linked to the pomodoro timer
  const isTaskLinked = linkedTask?.id === task.id;
  const isTimerActive = isTaskLinked && timerState === "running";
  const isTimerPaused = isTaskLinked && timerState === "paused";

  const [{ isDragging }, drag, preview] = useDrag({
    type: "TASK",
    item: {
      type: "TASK",
      id: task.id,
      columnId: task.columnId,
      title: task.title,
      description: task.description,
      priority: task.priority,
      assignedTo: task.assignedTo,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case "high":
        return {
          icon: AlertTriangle,
          color: "text-red-600 dark:text-red-400",
          bgColor: "bg-red-50 dark:bg-red-950/30",
          borderColor: "border-red-200 dark:border-red-800/50",
        };
      case "medium":
        return {
          icon: ArrowUp,
          color: "text-orange-600 dark:text-orange-400",
          bgColor: "bg-orange-50 dark:bg-orange-950/30",
          borderColor: "border-orange-200 dark:border-orange-800/50",
        };
      case "low":
        return {
          icon: ArrowDown,
          color: "text-green-600 dark:text-green-400",
          bgColor: "bg-green-50 dark:bg-green-950/30",
          borderColor: "border-green-200 dark:border-green-800/50",
        };
      default:
        return {
          icon: ArrowUp,
          color: "text-gray-600 dark:text-gray-400",
          bgColor: "bg-gray-50 dark:bg-gray-950/30",
          borderColor: "border-gray-200 dark:border-gray-800/50",
        };
    }
  };

  const priorityConfig = getPriorityConfig(task.priority);
  const PriorityIcon = priorityConfig.icon;

  const completedSubtasks = task.subtasks?.filter((s) => s.done).length || 0;
  const totalSubtasks = task.subtasks?.length || 0;
  const commentsCount = task.comments?.length || 0;

  // Pomodoro timer logic - now uses Zustand store
  const { pomodoroTimer } = task;
  const activeSession = pomodoroTimer?.sessions.find((s) => s.isActive);
  const isTimerRunning =
    isTimerActive || (pomodoroTimer?.isActive && activeSession);

  const formatTimerDisplay = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formatTotalTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const handleTimerClick = () => {
    if (isTaskLinked) {
      // If this task is linked, handle play/pause/stop
      if (timerState === "running") {
        pauseTimer();
      } else if (timerState === "paused") {
        startTimer();
      } else {
        // Start new timer session
        startTimer();
      }
    } else {
      // Link this task and open timer
      const linkedTaskData = {
        id: task.id,
        title: task.title,
        description: task.description,
        columnId: task.columnId,
        projectId: task.projectId,
      };
      setLinkedTask(linkedTaskData);
      openTimer();
    }
  };

  const handleStopTimer = (e: React.MouseEvent) => {
    e.stopPropagation();
    stopTimer();
  };

  return (
    <div className="relative">
      <Card
        ref={drag as any}
        onClick={onClick}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={`cursor-pointer transition-all duration-200 hover:shadow-md group border ${
          isTaskLinked && timerState === "running"
            ? "border-blue-400 bg-blue-50/50 shadow-sm timer-glow-blue"
            : isTimerRunning
            ? "border-orange-300 bg-orange-50/50 timer-glow"
            : isTaskLinked && timerState === "paused"
            ? "border-yellow-300 bg-yellow-50/50"
            : "border-gray-200 bg-white hover:border-gray-300"
        } ${isDragging ? "shadow-lg rotate-1 scale-105" : ""}`}
      >
        <CardContent className="p-3">
          <div className="space-y-2">
            {/* Task Title */}
            <div className="flex items-start gap-2 group">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2 flex-1 leading-tight">
                {task.title}
              </h4>
              <div className="flex items-center gap-1 flex-shrink-0">
                <PriorityIcon className={`w-4 h-4 ${priorityConfig.color}`} />

                {/* Three-dot menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="w-3 h-3 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                      }}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Task
                    </DropdownMenuItem>
                    {onDuplicate && (
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          onDuplicate(task);
                        }}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Duplicate Task
                      </DropdownMenuItem>
                    )}
                    {onArchive && (
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          onArchive(task.id);
                        }}
                      >
                        <Archive className="w-4 h-4 mr-2" />
                        Archive Task
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    {onDelete && (
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(task.id);
                        }}
                        className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:text-red-400 dark:focus:text-red-400 dark:focus:bg-red-950/30"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Task
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Task Description */}
            {task.description && (
              <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                {task.description}
              </p>
            )}

            {/* Pomodoro Timer Section - Enhanced with Zustand Store */}
            {(pomodoroTimer || isTaskLinked) && (
              <div className="flex items-center justify-between py-2 px-2 rounded-md bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Timer
                    className={`w-4 h-4 ${
                      isTaskLinked && timerState === "running"
                        ? "text-blue-600 dark:text-blue-400"
                        : isTimerRunning
                        ? "text-orange-600 dark:text-orange-400"
                        : isTaskLinked && timerState === "paused"
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  />
                  <div className="text-xs">
                    {isTaskLinked && timerState !== "idle" ? (
                      <div className="flex flex-col">
                        <span className="font-mono font-semibold text-blue-700 dark:text-blue-300">
                          {formatTimerDisplay(timeLeft)}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-[10px]">
                          {timerState === "running"
                            ? "🍅 Active"
                            : timerState === "paused"
                            ? "⏸️ Paused"
                            : "⏹️ Stopped"}{" "}
                          •{" "}
                          {sessionType === "work"
                            ? "Work"
                            : sessionType === "short-break"
                            ? "Break"
                            : "Long Break"}
                        </span>
                      </div>
                    ) : isTimerRunning && activeSession ? (
                      <div className="flex flex-col">
                        <span className="font-mono font-semibold text-orange-700 dark:text-orange-300">
                          {formatTimerDisplay(activeSession.timeRemaining)}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-[10px]">
                          {activeSession.type === "work"
                            ? "🍅 Working"
                            : activeSession.type === "shortBreak"
                            ? "☕ Break"
                            : "🛋️ Long Break"}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {pomodoroTimer
                            ? formatTotalTime(pomodoroTimer.totalTimeSpent)
                            : "0m"}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-[10px]">
                          Total time
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Timer Controls */}
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTimerClick();
                    }}
                  >
                    {isTaskLinked && timerState === "running" ? (
                      <Pause className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    ) : isTimerRunning ? (
                      <Pause className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <Play className="w-3 h-3 text-green-600 dark:text-green-400" />
                    )}
                  </Button>

                  {/* Stop button - only show when timer is active */}
                  {(isTaskLinked || isTimerRunning) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 hover:bg-red-100 dark:hover:bg-red-900/30"
                      onClick={handleStopTimer}
                    >
                      <Square className="w-3 h-3 text-red-600 dark:text-red-400" />
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Section */}
            <div className="flex items-center justify-between pt-1">
              {/* Task ID and Counters */}
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className="font-mono font-medium">TASK-{task.id}</span>

                {totalSubtasks > 0 && (
                  <div className="flex items-center gap-1">
                    <Subtitles className="w-3 h-3" />
                    <span>
                      {completedSubtasks}/{totalSubtasks}
                    </span>
                  </div>
                )}

                {commentsCount > 0 && (
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{commentsCount}</span>
                  </div>
                )}
              </div>

              {/* Assignee Avatar */}
              <Avatar className="w-6 h-6 border border-gray-200 dark:border-gray-700">
                <AvatarFallback className="text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {task.assignedTo.firstname[0]}
                  {task.assignedTo.lastname[0]}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>

        {/* Animated shine border for active timer */}
        {isTaskLinked && timerState === "running" && (
          <ShineBorder
            className="absolute inset-0 rounded-[inherit]"
            shineColor={["#3B82F6", "#60A5FA", "#93C5FD"]}
            duration={2}
            borderWidth={2}
          />
        )}

        {/* Legacy timer shine border */}
        {isTimerRunning && !isTaskLinked && (
          <ShineBorder
            className="absolute inset-0 rounded-[inherit]"
            shineColor={["#F97316", "#FB923C", "#FDBA74"]}
            duration={3}
            borderWidth={2}
          />
        )}
      </Card>
    </div>
  );
};

export default TaskComponent;
