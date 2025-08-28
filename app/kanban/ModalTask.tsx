"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import React, { useState } from "react";
import { Task } from "./types";
import TaskInformation from "./components/TaskInformation";
import SubtasksManager from "./components/SubtasksManager";
import CommentsManager from "./components/CommentsManager";
import TaskSidebar from "./components/TaskSidebar";

interface TaskModalProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onUpdate,
}) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onUpdate(editedTask);
    onClose();
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setEditedTask(updatedTask);
  };

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="!max-w-[1200px] w-[90vw] max-h-[95vh] overflow-y-auto p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="flex items-center gap-3 text-xl">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            Edit Task
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Make changes to your task, manage subtasks, and add comments.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Task Details */}
          <div className="lg:col-span-2 space-y-6">
            <TaskInformation task={editedTask} onTaskUpdate={handleTaskUpdate} />
            <SubtasksManager task={editedTask} onTaskUpdate={handleTaskUpdate} />
            <CommentsManager task={editedTask} onTaskUpdate={handleTaskUpdate} />
          </div>

          {/* Sidebar - Assignment and Meta Information */}
          <TaskSidebar task={editedTask} />
        </div>

        <DialogFooter className="mt-8">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
