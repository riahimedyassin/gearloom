"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ListTodo, Plus, X, User, Calendar, Edit2, Check } from "lucide-react";
import React, { useState } from "react";
import { Subtask, Task, User as UserType } from "../types";
import UserCombobox from "./UserCombobox";

interface SubtasksManagerProps {
  task: Task;
  onTaskUpdate: (updatedTask: Task) => void;
}

export const SubtasksManager: React.FC<SubtasksManagerProps> = ({
  task,
  onTaskUpdate,
}) => {
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("");
  const [newSubtaskAssignedTo, setNewSubtaskAssignedTo] = useState<UserType | undefined>(undefined);
  const [isAddingSubtask, setIsAddingSubtask] = useState(false);
  const [editingSubtask, setEditingSubtask] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingAssignedTo, setEditingAssignedTo] = useState<UserType | undefined>(undefined);

  const handleAddSubtask = () => {
    if (newSubtaskTitle.trim()) {
      const newSubtask: Subtask = {
        id: Date.now(),
        title: newSubtaskTitle.trim(),
        done: false,
        createdBy: task.createdBy, // Use the task creator as the subtask creator for simplicity
        assignedTo: newSubtaskAssignedTo,
        createdAt: new Date().toISOString(),
      };
      onTaskUpdate({
        ...task,
        subtasks: [...(task.subtasks || []), newSubtask],
      });
      setNewSubtaskTitle("");
      setNewSubtaskAssignedTo(undefined);
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

  const handleUpdateSubtaskAssignee = (subtaskId: number, assignedTo: UserType | undefined) => {
    const updatedSubtasks = task.subtasks?.map((subtask) =>
      subtask.id === subtaskId ? { ...subtask, assignedTo } : subtask
    );
    onTaskUpdate({
      ...task,
      subtasks: updatedSubtasks,
    });
  };

  const handleStartEditSubtask = (subtask: Subtask) => {
    setEditingSubtask(subtask.id);
    setEditingTitle(subtask.title);
    setEditingAssignedTo(subtask.assignedTo);
  };

  const handleSaveSubtaskEdit = () => {
    if (editingSubtask && editingTitle.trim()) {
      const updatedSubtasks = task.subtasks?.map((subtask) =>
        subtask.id === editingSubtask 
          ? { ...subtask, title: editingTitle.trim(), assignedTo: editingAssignedTo }
          : subtask
      );
      onTaskUpdate({
        ...task,
        subtasks: updatedSubtasks,
      });
      setEditingSubtask(null);
      setEditingTitle("");
      setEditingAssignedTo(undefined);
    }
  };

  const handleCancelSubtaskEdit = () => {
    setEditingSubtask(null);
    setEditingTitle("");
    setEditingAssignedTo(undefined);
  };

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0 pb-2">
        <div className="flex items-center justify-between mb-2">
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
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border group hover:bg-slate-100 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={subtask.done}
                  onChange={(e) =>
                    handleToggleSubtask(subtask.id, e.target.checked)
                  }
                  className="accent-blue-600 w-5 h-5 mt-0.5"
                  disabled={editingSubtask === subtask.id}
                />
                
                {editingSubtask === subtask.id ? (
                  // Edit mode
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2">
                      <Input
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        className="flex-1 text-sm"
                        placeholder="Subtask title..."
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSaveSubtaskEdit();
                          } else if (e.key === "Escape") {
                            handleCancelSubtaskEdit();
                          }
                        }}
                      />
                      <div className="w-48">
                        <UserCombobox
                          value={editingAssignedTo}
                          onSelect={setEditingAssignedTo}
                          placeholder="Assign to..."
                          allowUnassigned={true}
                          className="text-xs h-9"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <User className="w-3 h-3" />
                      <span>Created by {subtask.createdBy.firstname} {subtask.createdBy.lastname}</span>
                      <span>•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(subtask.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={handleSaveSubtaskEdit}
                        size="sm"
                        className="h-7 bg-blue-600 hover:bg-blue-700"
                      >
                        <Check className="w-3 h-3 mr-1" />
                        Save
                      </Button>
                      <Button
                        onClick={handleCancelSubtaskEdit}
                        size="sm"
                        variant="ghost"
                        className="h-7"
                      >
                        <X className="w-3 h-3 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  // View mode
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between group">
                      <div className="flex-1 min-w-0">
                        <span
                          className={`text-sm block ${
                            subtask.done
                              ? "line-through text-slate-400"
                              : "text-slate-800"
                          }`}
                        >
                          {subtask.title}
                        </span>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <User className="w-3 h-3" />
                            <span>Created by {subtask.createdBy.firstname} {subtask.createdBy.lastname}</span>
                            <span>•</span>
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(subtask.createdAt).toLocaleDateString()}</span>
                          </div>
                          
                          {subtask.assignedTo && (
                            <div className="flex items-center gap-2 text-xs">
                              <span>•</span>
                              <Avatar className="w-4 h-4">
                                <AvatarFallback className="text-xs">
                                  {subtask.assignedTo.firstname[0]}{subtask.assignedTo.lastname[0]}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-slate-600">
                                {subtask.assignedTo.firstname} {subtask.assignedTo.lastname}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          onClick={() => handleStartEditSubtask(subtask)}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-slate-500 hover:text-blue-600"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteSubtask(subtask.id)}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-slate-500 hover:text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
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
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 space-y-3">
              <div className="flex gap-3">
                <Input
                  value={newSubtaskTitle}
                  onChange={(e) => setNewSubtaskTitle(e.target.value)}
                  placeholder="Enter subtask title..."
                  className="text-sm border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleAddSubtask();
                    } else if (e.key === "Escape") {
                      setIsAddingSubtask(false);
                      setNewSubtaskTitle("");
                      setNewSubtaskAssignedTo(undefined);
                    }
                  }}
                />
                <div className="w-48">
                  <UserCombobox
                    value={newSubtaskAssignedTo}
                    onSelect={setNewSubtaskAssignedTo}
                    placeholder="Assign to..."
                    allowUnassigned={true}
                    className="text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleAddSubtask}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Subtask
                </Button>
                <Button
                  onClick={() => {
                    setIsAddingSubtask(false);
                    setNewSubtaskTitle("");
                    setNewSubtaskAssignedTo(undefined);
                  }}
                  size="sm"
                  variant="ghost"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubtasksManager;
