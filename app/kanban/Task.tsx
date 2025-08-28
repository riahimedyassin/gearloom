"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertTriangle, ArrowUp, ArrowDown, MessageCircle, Subtitles, MoreVertical, Trash2, Edit, Copy, Archive, Timer, Play, Pause } from "lucide-react";
import React from "react";
import { useDrag } from "react-dnd";
import { Task as TaskType } from "./types";
import { ShineBorder } from "@/components/magicui/shine-border";

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
  isActiveTimer = false
}) => {
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
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
        };
      case "medium":
        return {
          icon: ArrowUp,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
        };
      case "low":
        return {
          icon: ArrowDown,
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
        };
      default:
        return {
          icon: ArrowUp,
          color: "text-gray-600",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
        };
    }
  };

  const priorityConfig = getPriorityConfig(task.priority);
  const PriorityIcon = priorityConfig.icon;

  const completedSubtasks = task.subtasks?.filter(s => s.done).length || 0;
  const totalSubtasks = task.subtasks?.length || 0;
  const commentsCount = task.comments?.length || 0;

  // Pomodoro timer logic
  const { pomodoroTimer } = task;
  const activeSession = pomodoroTimer?.sessions.find(s => s.isActive);
  const isTimerRunning = pomodoroTimer?.isActive && activeSession;
  
  const formatTimerDisplay = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatTotalTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="relative">
      <Card
        ref={drag as any}
        onClick={onClick}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={`cursor-pointer transition-all duration-200 hover:shadow-md group border ${
          isActiveTimer 
            ? 'border-blue-400 bg-blue-50/50 shadow-sm timer-glow-blue' 
            : isTimerRunning 
              ? 'border-orange-300 bg-orange-50/50 timer-glow' 
              : 'border-gray-200 bg-white hover:border-gray-300'
        } ${
          isDragging ? "shadow-lg rotate-1 scale-105" : ""
        }`}
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
                      className="text-red-600 focus:text-red-600 focus:bg-red-50"
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
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {task.description}
            </p>
          )}

          {/* Pomodoro Timer Section */}
          {pomodoroTimer && (
            <div className="flex items-center justify-between py-2 px-2 rounded-md bg-gray-50/50 border">
              <div className="flex items-center gap-2">
                <Timer className={`w-4 h-4 ${isTimerRunning ? 'text-orange-600' : isActiveTimer ? 'text-blue-600' : 'text-gray-500'}`} />
                <div className="text-xs">
                  {isTimerRunning && activeSession ? (
                    <div className="flex flex-col">
                      <span className="font-mono font-semibold text-orange-700">
                        {formatTimerDisplay(activeSession.timeRemaining)}
                      </span>
                      <span className="text-gray-500 text-[10px]">
                        {activeSession.type === 'work' ? '🍅 Working' : 
                         activeSession.type === 'shortBreak' ? '☕ Break' : '🛋️ Long Break'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-700">
                        {formatTotalTime(pomodoroTimer.totalTimeSpent)}
                      </span>
                      <span className="text-gray-500 text-[10px]">Total time</span>
                    </div>
                  )}
                </div>
              </div>
              
              {onTimerClick && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-blue-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    onTimerClick(task);
                  }}
                >
                  {isTimerRunning ? (
                    <Pause className="w-3 h-3 text-orange-600" />
                  ) : (
                    <Play className="w-3 h-3 text-blue-600" />
                  )}
                </Button>
              )}
            </div>
          )}

          {/* Bottom Section */}
          <div className="flex items-center justify-between pt-1">
            {/* Task ID and Counters */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="font-mono font-medium">
                TASK-{task.id}
              </span>
              
              {totalSubtasks > 0 && (
                <div className="flex items-center gap-1">
                  <Subtitles className="w-3 h-3" />
                  <span>{completedSubtasks}/{totalSubtasks}</span>
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
            <Avatar className="w-6 h-6 border border-gray-200">
              <AvatarFallback className="text-xs font-medium bg-blue-100 text-blue-700">
                {task.assignedTo.firstname[0]}{task.assignedTo.lastname[0]}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
      
      {/* Animated shine border for active timer */}
      {isTimerRunning && (
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
