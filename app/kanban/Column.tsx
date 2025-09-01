"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GripVertical, Plus } from "lucide-react";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { TaskDropZone } from "./TaskDropZone";
import { Column as ColumnType, DragItem, NewTaskForm, Task } from "./types";

interface ColumnProps {
  column: ColumnType;
  onTaskMove: (taskId: number, newColumnId: number, newOrder?: number) => void;
  onTaskClick: (task: Task) => void;
  onCreateTask: (columnId: number, taskData: NewTaskForm) => void;
  onTaskDelete?: (taskId: number) => void;
  onTaskDuplicate?: (task: Task) => void;
  onTaskArchive?: (taskId: number) => void;
  onTimerClick?: (task: Task) => void;
  activeTimerTaskId?: number | null;
  dragHandleRef?: React.RefObject<HTMLDivElement | null>;
}

export const ColumnComponent: React.FC<ColumnProps> = ({
  column,
  onTaskMove,
  onTaskClick,
  onCreateTask,
  onTaskDelete,
  onTaskDuplicate,
  onTaskArchive,
  onTimerClick,
  activeTimerTaskId,
  dragHandleRef,
}) => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isEditingColumnName, setIsEditingColumnName] = useState(false);
  const [editedColumnName, setEditedColumnName] = useState(column.name);

  // Drop zone for the entire column (for empty areas and top position)
  const [{ isOver, canDrop }, drop] = useDrop<
    DragItem,
    void,
    { isOver: boolean; canDrop: boolean }
  >({
    accept: "TASK",
    drop: (item) => {
      // Handle drop at the beginning of the list when there are tasks
      if (item.columnId !== column.id) {
        onTaskMove(item.id, column.id, 0);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  });

  // Separate drop zone for the top position
  const [{ isOverTop }, dropTop] = useDrop<
    DragItem,
    void,
    { isOverTop: boolean }
  >({
    accept: "TASK",
    drop: (item) => {
      if (item.id !== column.tasks[0]?.id) {
        onTaskMove(item.id, column.id, 0);
      }
    },
    collect: (monitor) => ({
      isOverTop: monitor.isOver(),
    }),
  });

  const handleCreateTask = () => {
    if (newTaskTitle.trim()) {
      onCreateTask(column.id, {
        title: newTaskTitle.trim(),
        description: "",
        priority: "medium",
      });
      setNewTaskTitle("");
      setIsCreatingTask(false);
    }
  };

  const handleCancelCreateTask = () => {
    setNewTaskTitle("");
    setIsCreatingTask(false);
  };

  return (
    <Card
      ref={drop as any}
      className={`w-72 h-full flex-shrink-0 transition-all duration-200 bg-gray-50 border border-gray-200 flex flex-col ${
        isOver && canDrop
          ? "bg-blue-50 border-blue-300 shadow-md"
          : "hover:shadow-sm"
      }`}
    >
      <CardHeader className="pb-2 px-3 pt-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1">
            <div
              ref={dragHandleRef}
              className="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-grab active:cursor-grabbing group drag-handle"
            >
              <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
            </div>
            {isEditingColumnName ? (
              <Input
                type="text"
                value={editedColumnName}
                onChange={(e) => setEditedColumnName(e.target.value)}
                onBlur={() => setIsEditingColumnName(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingColumnName(false);
                    // Here you would call an onUpdateColumn prop if you had one
                  } else if (e.key === "Escape") {
                    setEditedColumnName(column.name);
                    setIsEditingColumnName(false);
                  }
                }}
                className="text-sm font-semibold border-none p-0 h-auto focus:ring-1 focus:ring-blue-400 dark:focus:ring-blue-500 flex-1"
                autoFocus
              />
            ) : (
              <h3
                className="text-sm font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex-1 uppercase tracking-wide"
                onClick={() => setIsEditingColumnName(true)}
              >
                {column.name}
              </h3>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full min-w-[24px] text-center">
              {column.tasks.length}
            </span>
            <Button
              onClick={() => setIsCreatingTask(true)}
              size="sm"
              variant="ghost"
              className="w-6 h-6 p-0 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              title="Add new task"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-3 space-y-2 min-h-[200px] flex-1 overflow-y-auto">
        {column.tasks.length === 0 ? (
          <div className="text-center text-gray-400 py-6">
            <div className="text-xs">Drop tasks here or click + to add</div>
          </div>
        ) : (
          <>
            {/* Drop zone at the very top */}
            <div
              ref={dropTop as any}
              className={`h-1 transition-all duration-200 rounded ${
                isOverTop ? "bg-blue-400 h-2" : ""
              }`}
            />

            {column.tasks
              .sort((a, b) => a.order - b.order)
              .map((task, index) => (
                <TaskDropZone
                  key={task.id}
                  task={task}
                  index={index}
                  columnId={column.id}
                  onTaskMove={onTaskMove}
                  onTaskClick={onTaskClick}
                  onTaskDelete={onTaskDelete}
                  onTaskDuplicate={onTaskDuplicate}
                  onTaskArchive={onTaskArchive}
                  onTimerClick={onTimerClick}
                  activeTimerTaskId={activeTimerTaskId}
                />
              ))}
          </>
        )}

        {/* Inline Task Creation */}
        {isCreatingTask && (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 shadow-sm">
            <Input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="mb-2 text-sm border-none focus:ring-0 p-0 h-auto placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-transparent"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCreateTask();
                } else if (e.key === "Escape") {
                  handleCancelCreateTask();
                }
              }}
            />
            <div className="flex gap-1">
              <Button
                onClick={handleCreateTask}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 h-7 px-3 text-xs"
              >
                Add
              </Button>
              <Button
                onClick={handleCancelCreateTask}
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 h-7 px-3 text-xs"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ColumnComponent;
