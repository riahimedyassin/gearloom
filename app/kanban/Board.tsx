"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import React, { useState, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ColumnComponent from "./Column";
import { CustomDragLayer } from "./DragLayer";
import TaskModal from "./ModalTask";
import { Column, NewColumnForm, NewTaskForm, Task } from "./types";

interface BoardProps {
  columns: Column[];
  onTaskMove: (taskId: number, newColumnId: number, newOrder?: number) => void;
  onTaskUpdate: (task: Task) => void;
  onCreateTask: (columnId: number, taskData: NewTaskForm) => void;
  onCreateColumn: (columnData: NewColumnForm) => void;
  onTaskDelete?: (taskId: number) => void;
  onTaskDuplicate?: (task: Task) => void;
  onTaskArchive?: (taskId: number) => void;
  onTimerClick?: (task: Task) => void;
  onTimerUpdate?: (taskId: number, timer: Task["pomodoroTimer"]) => void;
  activeTimerTaskId?: number | null;
  onColumnOrderChange?: (columns: Column[]) => void;
}

// DraggableColumn wrapper for column drag-and-drop
interface DraggableColumnProps {
  column: Column;
  index: number;
  moveColumn: (from: number, to: number) => void;
  onTaskMove: (taskId: number, newColumnId: number, newOrder?: number) => void;
  onTaskClick: (task: Task) => void;
  onCreateTask: (columnId: number, taskData: NewTaskForm) => void;
  onTaskDelete?: (taskId: number) => void;
  onTaskDuplicate?: (task: Task) => void;
  onTaskArchive?: (taskId: number) => void;
  onTimerClick?: (task: Task) => void;
  activeTimerTaskId?: number | null;
}

const DraggableColumn: React.FC<DraggableColumnProps> = ({
  column,
  index,
  moveColumn,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: "COLUMN",
    hover: (item: { index: number }, monitor) => {
      if (!ref.current || item.index === index) return;

      // Get the bounding rectangle of the target
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get horizontal middle
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      // Get cursor position
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      // Get pixels to the left
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the items width
      // When dragging left, only move when the cursor is below 50%
      // When dragging right, only move when the cursor is above 50%
      if (item.index < index && hoverClientX < hoverMiddleX) {
        return;
      }

      if (item.index > index && hoverClientX > hoverMiddleX) {
        return;
      }

      // Time to actually perform the action
      moveColumn(item.index, index);
      item.index = index;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: "COLUMN",
    item: () => ({
      id: column.id,
      index,
      name: column.name,
      tasks: column.tasks,
    }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: "move",
    },
  });

  // Use drag handle for better UX - only the grip can initiate drag
  const dragHandleRef = useRef<HTMLDivElement>(null);
  drag(dragHandleRef);
  drop(ref);

  // Use empty image as drag preview to use custom drag layer
  React.useEffect(() => {
    preview(new Image(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.4 : 1,
      }}
      className={`column-drag-container ${
        isDragging ? "dragging" : isOver ? "hover" : ""
      }`}
    >
      <ColumnComponent
        column={column}
        dragHandleRef={dragHandleRef}
        {...props}
      />
    </div>
  );
};

export const Board: React.FC<BoardProps> = ({
  columns,
  onTaskMove,
  onTaskUpdate,
  onCreateTask,
  onCreateColumn,
  onTaskDelete,
  onTaskDuplicate,
  onTaskArchive,
  onTimerClick,
  onTimerUpdate,
  activeTimerTaskId,
  onColumnOrderChange,
}) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isCreatingColumn, setIsCreatingColumn] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");

  const handleCreateColumn = () => {
    if (newColumnName.trim()) {
      onCreateColumn({ name: newColumnName.trim() });
      setNewColumnName("");
      setIsCreatingColumn(false);
    }
  };

  const handleCancelCreateColumn = () => {
    setNewColumnName("");
    setIsCreatingColumn(false);
  };

  // Throttled column movement for smoother experience
  const moveColumn = React.useCallback(
    (from: number, to: number) => {
      if (from === to) return;

      const updated = [...columns];
      const [removed] = updated.splice(from, 1);
      updated.splice(to, 0, removed);

      if (onColumnOrderChange) {
        onColumnOrderChange(updated);
      }
    },
    [columns, onColumnOrderChange]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <CustomDragLayer />
      <div className="h-full w-full overflow-scroll">
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-x-auto overflow-y-hidden">
              <div className="flex gap-4 h-full pb-4 min-w-fit">
                {columns.map((column, idx) => (
                  <DraggableColumn
                    key={column.id}
                    column={column}
                    index={idx}
                    moveColumn={moveColumn}
                    onTaskMove={onTaskMove}
                    onTaskClick={setSelectedTask}
                    onCreateTask={onCreateTask}
                    onTaskDelete={onTaskDelete}
                    onTaskDuplicate={onTaskDuplicate}
                    onTaskArchive={onTaskArchive}
                    onTimerClick={onTimerClick}
                    activeTimerTaskId={activeTimerTaskId}
                  />
                ))}

                {/* Add Column Button or Input */}
                <div className="w-72 flex-shrink-0">
                  {isCreatingColumn ? (
                    <div className="bg-gray-100 border border-gray-300 rounded p-3">
                      <Input
                        type="text"
                        value={newColumnName}
                        onChange={(e) => setNewColumnName(e.target.value)}
                        placeholder="Enter list name..."
                        className="mb-2 text-sm bg-white border-gray-300 focus:ring-1 focus:ring-blue-400"
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleCreateColumn();
                          } else if (e.key === "Escape") {
                            handleCancelCreateColumn();
                          }
                        }}
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={handleCreateColumn}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 h-7 px-3 text-xs"
                        >
                          Add
                        </Button>
                        <Button
                          onClick={handleCancelCreateColumn}
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-800 h-7 px-3 text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={() => setIsCreatingColumn(true)}
                      variant="ghost"
                      className="w-full h-16 border-2 border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700 transition-colors rounded text-sm"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add another list
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Edit Modal */}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdate={onTaskUpdate}
          onTimerUpdate={onTimerUpdate}
        />
      )}
    </DndProvider>
  );
};

export default Board;
