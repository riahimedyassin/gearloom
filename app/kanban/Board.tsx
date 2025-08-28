"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
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
}

export const Board: React.FC<BoardProps> = ({
  columns,
  onTaskMove,
  onTaskUpdate,
  onCreateTask,
  onCreateColumn,
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

  return (
    <DndProvider backend={HTML5Backend}>
      <CustomDragLayer />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {columns.map((column) => (
              <ColumnComponent
                key={column.id}
                column={column}
                onTaskMove={onTaskMove}
                onTaskClick={setSelectedTask}
                onCreateTask={onCreateTask}
              />
            ))}

            {/* Add Column Button or Input */}
            <div className="w-80 flex-shrink-0">
              {isCreatingColumn ? (
                <Card className="border-2 border-dashed border-slate-300 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <Input
                      type="text"
                      value={newColumnName}
                      onChange={(e) => setNewColumnName(e.target.value)}
                      placeholder="Enter column name..."
                      className="mb-3 focus:ring-2 focus:ring-blue-500 transition-all"
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
                        className="bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Column
                      </Button>
                      <Button
                        onClick={handleCancelCreateColumn}
                        variant="ghost"
                        size="sm"
                        className="text-slate-600 hover:text-slate-800"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-32 border-2 border-dashed border-slate-300 bg-white/30 backdrop-blur-sm hover:bg-white/50 hover:border-slate-400 transition-all duration-200 cursor-pointer group">
                  <CardContent className="h-full flex items-center justify-center p-4">
                    <Button
                      onClick={() => setIsCreatingColumn(true)}
                      variant="ghost"
                      className="w-full h-full flex flex-col items-center justify-center text-slate-500 hover:text-slate-700 group-hover:scale-105 transition-all"
                    >
                      <Plus className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium">Add Column</span>
                    </Button>
                  </CardContent>
                </Card>
              )}
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
        />
      )}
    </DndProvider>
  );
};

export default Board;
