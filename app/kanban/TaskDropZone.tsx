"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { TaskComponent } from "./Task";
import { DragItem, Task } from "./types";

interface TaskDropZoneProps {
  task: Task;
  index: number;
  columnId: number;
  onTaskMove: (taskId: number, newColumnId: number, newOrder?: number) => void;
  onTaskClick: (task: Task) => void;
  onTaskDelete?: (taskId: number) => void;
  onTaskDuplicate?: (task: Task) => void;
  onTaskArchive?: (taskId: number) => void;
  onTimerClick?: (task: Task) => void;
  activeTimerTaskId?: number | null;
}

export const TaskDropZone: React.FC<TaskDropZoneProps> = ({
  task,
  index,
  columnId,
  onTaskMove,
  onTaskClick,
  onTaskDelete,
  onTaskDuplicate,
  onTaskArchive,
  onTimerClick,
  activeTimerTaskId,
}) => {
  const taskRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState<"top" | "bottom" | null>(
    null
  );
  const [proximityIntensity, setProximityIntensity] = useState(0);

  // Combined drop zone that handles both top and bottom positioning
  const [{ isOver, dragItem }, drop] = useDrop<
    DragItem,
    void,
    { isOver: boolean; dragItem: DragItem | null }
  >({
    accept: "TASK",
    hover: (item, monitor) => {
      if (item.id === task.id) return;

      const taskElement = taskRef.current;
      if (!taskElement) return;

      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const taskRect = taskElement.getBoundingClientRect();
      const taskMiddle = taskRect.top + taskRect.height / 2;
      const mouseY = clientOffset.y;

      // Calculate distance from middle (normalized to 0-1)
      const distanceFromMiddle =
        Math.abs(mouseY - taskMiddle) / (taskRect.height / 2);
      const intensity = Math.min(distanceFromMiddle, 1);

      // Determine if we're in the top or bottom half
      const position = mouseY < taskMiddle ? "top" : "bottom";

      setDragPosition(position);
      setProximityIntensity(intensity);
    },
    drop: (item, monitor) => {
      if (item.id !== task.id) {
        const dropPosition = dragPosition === "top" ? index : index + 1;
        onTaskMove(item.id, columnId, dropPosition);
      }
      setDragPosition(null);
      setProximityIntensity(0);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      dragItem: monitor.getItem(),
    }),
  });

  // Reset state when not hovering
  useEffect(() => {
    if (!isOver) {
      setDragPosition(null);
      setProximityIntensity(0);
    }
  }, [isOver]);

  // Calculate drop zone heights and styles based on proximity
  const getDropZoneStyle = (position: "top" | "bottom") => {
    if (
      !isOver ||
      dragPosition !== position ||
      !dragItem ||
      dragItem.id === task.id
    ) {
      return {
        height: "2px",
        backgroundColor: "transparent",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "4px",
      };
    }

    // Base height + proportional increase based on proximity
    const baseHeight = 8;
    const maxHeight = 40;
    const additionalHeight = (maxHeight - baseHeight) * proximityIntensity;
    const totalHeight = baseHeight + additionalHeight;

    const intensity = proximityIntensity;
    const opacity = 0.5 + intensity * 0.5; // 0.5 to 1.0 opacity

    return {
      height: `${Math.round(totalHeight)}px`,
      background: `linear-gradient(90deg, 
        rgba(59, 130, 246, ${opacity * 0.8}) 0%, 
        rgba(59, 130, 246, ${opacity}) 50%, 
        rgba(59, 130, 246, ${opacity * 0.8}) 100%)`,
      boxShadow: `
        0 4px 6px -1px rgba(59, 130, 246, 0.3), 
        0 2px 4px -1px rgba(59, 130, 246, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3)
      `,
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      margin: "6px 0",
      borderRadius: "6px",
      border: `2px solid rgba(59, 130, 246, ${opacity})`,
    };
  };

  return (
    <div ref={drop as any} className="relative group">
      {/* Drop zone above task */}
      <div style={getDropZoneStyle("top")} className="relative overflow-hidden">
        {isOver &&
          dragPosition === "top" &&
          dragItem &&
          dragItem.id !== task.id && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs text-white dark:text-gray-200 font-semibold tracking-wider uppercase opacity-90 animate-pulse">
                Drop Above
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-400/20 to-transparent animate-shimmer"></div>
            </div>
          )}
      </div>

      {/* The actual task */}
      <div
        ref={taskRef}
        className="relative z-10 transition-transform duration-200 hover:scale-[1.01]"
      >
        <TaskComponent
          task={task}
          onClick={() => onTaskClick(task)}
          onDelete={onTaskDelete}
          onDuplicate={onTaskDuplicate}
          onArchive={onTaskArchive}
          onTimerClick={onTimerClick}
          isActiveTimer={activeTimerTaskId === task.id}
        />
      </div>

      {/* Drop zone below task */}
      <div
        style={getDropZoneStyle("bottom")}
        className="relative overflow-hidden"
      >
        {isOver &&
          dragPosition === "bottom" &&
          dragItem &&
          dragItem.id !== task.id && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs text-white dark:text-gray-200 font-semibold tracking-wider uppercase opacity-90 animate-pulse">
                Drop Below
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-400/20 to-transparent animate-shimmer"></div>
            </div>
          )}
      </div>
    </div>
  );
};

export default TaskDropZone;
