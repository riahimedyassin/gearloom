"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ListTodo, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { Subtask, Task } from "../types";

interface SubtasksManagerProps {
  task: Task;
  onTaskUpdate: (updatedTask: Task) => void;
}

export const SubtasksManager: React.FC<SubtasksManagerProps> = ({
  task,
  onTaskUpdate,
}) => {
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("");
  const [isAddingSubtask, setIsAddingSubtask] = useState(false);

  const handleAddSubtask = () => {
    if (newSubtaskTitle.trim()) {
      const newSubtask: Subtask = {
        id: Date.now(),
        title: newSubtaskTitle.trim(),
        done: false,
      };
      onTaskUpdate({
        ...task,
        subtasks: [...(task.subtasks || []), newSubtask],
      });
      setNewSubtaskTitle("");
      setIsAddingSubtask(false);
    }
  };

  const handleDeleteSubtask = (subtaskId: number) => {
    onTaskUpdate({
      ...task,
      subtasks: task.subtasks?.filter((s) => s.id !== subtaskId) || [],
    });
  };

  const handleToggleSubtask = (subtaskId: number, done: boolean) => {
    const updatedSubtasks = task.subtasks?.map((subtask) =>
      subtask.id === subtaskId ? { ...subtask, done } : subtask
    );
    onTaskUpdate({
      ...task,
      subtasks: updatedSubtasks,
    });
  };

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <ListTodo className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-slate-900">Subtasks</h3>
            <Badge variant="secondary" className="text-xs">
              {task.subtasks?.length || 0}
            </Badge>
          </div>
          <Button
            onClick={() => setIsAddingSubtask(true)}
            size="sm"
            variant="outline"
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Subtask
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="space-y-3">
          {task.subtasks && task.subtasks.length > 0 ? (
            task.subtasks.map((subtask) => (
              <div
                key={subtask.id}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border group hover:bg-slate-100 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={subtask.done}
                  onChange={(e) =>
                    handleToggleSubtask(subtask.id, e.target.checked)
                  }
                  className="accent-blue-600 w-5 h-5"
                />
                <span
                  className={`text-sm flex-1 ${
                    subtask.done
                      ? "line-through text-slate-400"
                      : "text-slate-800"
                  }`}
                >
                  {subtask.title}
                </span>
                <Button
                  onClick={() => handleDeleteSubtask(subtask.id)}
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-400">
              <ListTodo className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No subtasks yet</p>
              <p className="text-xs">Add subtasks to break down this task</p>
            </div>
          )}

          {isAddingSubtask && (
            <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <Input
                value={newSubtaskTitle}
                onChange={(e) => setNewSubtaskTitle(e.target.value)}
                placeholder="Enter subtask title..."
                className="text-sm border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddSubtask();
                  } else if (e.key === "Escape") {
                    setIsAddingSubtask(false);
                    setNewSubtaskTitle("");
                  }
                }}
              />
              <Button
                onClick={handleAddSubtask}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => {
                  setIsAddingSubtask(false);
                  setNewSubtaskTitle("");
                }}
                size="sm"
                variant="ghost"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubtasksManager;
