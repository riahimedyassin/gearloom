"use client";

import React from "react";
import { useDragLayer } from "react-dnd";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowUp, ArrowDown, MessageCircle, Subtitles, Timer, GripVertical } from "lucide-react";

interface DragLayerProps {}

export const CustomDragLayer: React.FC<DragLayerProps> = () => {
  const { itemType, isDragging, item, currentOffset } = useDragLayer(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    })
  );

  if (!isDragging || !currentOffset) {
    return null;
  }

  const renderItem = () => {
    switch (itemType) {
      case "TASK":
        return <DragPreview task={item} />;
      case "COLUMN":
        return <ColumnDragPreview column={item} />;
      default:
        return null;
    }
  };

  const layerStyles: React.CSSProperties = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  const getItemStyles = (currentOffset: {
    x: number;
    y: number;
  }): React.CSSProperties => {
    const { x, y } = currentOffset;
    let transform = `translate(${x}px, ${y}px)`;
    
    // Add different transforms based on item type
    if (itemType === "TASK") {
      transform += ` rotate(3deg)`;
    } else if (itemType === "COLUMN") {
      transform += ` rotate(1deg) scale(1.02)`;
    }
    
    return {
      transform,
      WebkitTransform: transform,
      transition: 'transform 0.1s ease-out',
    };
  };

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>{renderItem()}</div>
    </div>
  );
};

interface DragPreviewProps {
  task: any;
}

const DragPreview: React.FC<DragPreviewProps> = ({ task }) => {
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

  const completedSubtasks = task.subtasks?.filter((s: any) => s.done).length || 0;
  const totalSubtasks = task.subtasks?.length || 0;
  const commentsCount = task.comments?.length || 0;

  // Pomodoro timer logic
  const { pomodoroTimer } = task;
  const activeSession = pomodoroTimer?.sessions.find((s: any) => s.isActive);
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
    <Card className="w-72 cursor-pointer transition-all duration-200 border border-gray-200 bg-white shadow-2xl transform scale-105 rotate-3">
      <CardContent className="p-3">
        <div className="space-y-2">
          {/* Task Title */}
          <div className="flex items-start gap-2">
            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 flex-1 leading-tight">
              {task.title}
            </h4>
            <PriorityIcon className={`w-4 h-4 ${priorityConfig.color} flex-shrink-0`} />
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
                <Timer className={`w-4 h-4 ${isTimerRunning ? 'text-orange-600' : 'text-gray-500'}`} />
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
            {task.assignedTo && (
              <Avatar className="w-6 h-6 border border-gray-200">
                <AvatarFallback className="text-xs font-medium bg-blue-100 text-blue-700">
                  {task.assignedTo.firstname[0]}{task.assignedTo.lastname[0]}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Column drag preview component
interface ColumnDragPreviewProps {
  column: any;
}

const ColumnDragPreview: React.FC<ColumnDragPreviewProps> = ({ column }) => {
  return (
    <Card className="w-72 bg-white border border-gray-200 shadow-2xl transform scale-105 drag-preview-column">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-gray-100">
              <GripVertical className="w-4 h-4 text-gray-500" />
            </div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {column.name || "Column"}
            </h3>
          </div>
          <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
            {column.tasks?.length || 0}
          </span>
        </div>
        <div className="h-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded border-2 border-dashed border-blue-300 flex items-center justify-center">
          <span className="text-xs text-blue-600 font-medium animate-pulse">Moving column...</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomDragLayer;
