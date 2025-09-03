"use client";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Info,
  ListOrdered,
  MessageSquare,
  Paperclip,
  Save,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import AttachmentsManager from "./components/AttachmentsManager";
import CommentsManager from "./components/CommentsManager";
import StepsManager from "./components/StepsManager";
import SubtasksManager from "./components/SubtasksManager";
import TaskSidebar from "./components/TaskSidebar";
import { Task } from "./types";

interface TaskModalProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
  onTimerUpdate?: (taskId: number, timer: Task["pomodoroTimer"]) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onUpdate,
  onTimerUpdate,
}) => {
  const [editedTask, setEditedTask] = useState(task);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Check for changes whenever editedTask updates
  useEffect(() => {
    const isChanged = JSON.stringify(editedTask) !== JSON.stringify(task);
    setHasChanges(isChanged);
  }, [editedTask, task]);

  const handleSave = () => {
    onUpdate(editedTask);
    onClose();
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setEditedTask(updatedTask);
  };

  // Check if timer is running
  const isTimerRunning =
    editedTask.pomodoroTimer?.isActive &&
    editedTask.pomodoroTimer.sessions.some((s) => s.isActive);

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <div className="relative">
        <DialogContent className="!max-w-[1200px] w-[90vw] h-[90vh] overflow-hidden p-0 flex flex-col">
          {/* Screen reader accessible title */}
          <DialogTitle className="sr-only">
            Task: {editedTask.title}
          </DialogTitle>

          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
            {/* Task ID and Title */}
            <div className="flex-1 min-w-0">
              {isEditingTitle ? (
                <Input
                  value={editedTask.title}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, title: e.target.value })
                  }
                  onBlur={() => setIsEditingTitle(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setIsEditingTitle(false);
                    if (e.key === "Escape") setIsEditingTitle(false);
                  }}
                  className="text-2xl font-semibold border-none p-0 h-auto focus:ring-0 focus:outline-none"
                  autoFocus
                />
              ) : (
                <h1
                  className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
                  onClick={() => setIsEditingTitle(true)}
                >
                  {editedTask.title}
                </h1>
              )}
              <div className="text-sm text-gray-500 mt-1">
                TASK-{editedTask.id}
              </div>
            </div>

            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-600 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Main content area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left side - Task details */}
            <div className="flex-1 p-6 pr-4 overflow-y-auto">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Description
                </h3>
                {isEditingDescription ? (
                  <Textarea
                    value={editedTask.description}
                    onChange={(e) =>
                      setEditedTask({
                        ...editedTask,
                        description: e.target.value,
                      })
                    }
                    onBlur={() => setIsEditingDescription(false)}
                    className="min-h-[100px] text-sm resize-none"
                    placeholder="Add a description..."
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => setIsEditingDescription(true)}
                    className="min-h-[60px] p-3 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded border cursor-pointer transition-colors"
                  >
                    {editedTask.description || "Add a description..."}
                  </div>
                )}
              </div>

              {/* Tabs for additional content */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-4">
                  <TabsTrigger
                    value="details"
                    className="text-xs flex items-center gap-1"
                  >
                    <Info className="w-3 h-3" />
                    Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="attachments"
                    className="text-xs flex items-center gap-1"
                  >
                    <Paperclip className="w-3 h-3" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger
                    value="steps"
                    className="text-xs flex items-center gap-1"
                  >
                    <ListOrdered className="w-3 h-3" />
                    Steps
                  </TabsTrigger>
                  <TabsTrigger
                    value="comments"
                    className="text-xs flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" />
                    Activity
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-4 mt-0">
                  <SubtasksManager
                    task={editedTask}
                    onTaskUpdate={handleTaskUpdate}
                  />
                </TabsContent>

                <TabsContent value="attachments" className="mt-0">
                  <AttachmentsManager
                    task={editedTask}
                    onTaskUpdate={handleTaskUpdate}
                  />
                </TabsContent>

                <TabsContent value="steps" className="mt-0">
                  <StepsManager
                    task={editedTask}
                    onTaskUpdate={handleTaskUpdate}
                  />
                </TabsContent>

                <TabsContent value="comments" className="mt-0">
                  <CommentsManager
                    task={editedTask}
                    onTaskUpdate={handleTaskUpdate}
                  />
                </TabsContent>
              </Tabs>
            </div>

            {/* Right sidebar */}
            <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto">
              <TaskSidebar
                task={editedTask}
                onTaskUpdate={handleTaskUpdate}
                onTimerUpdate={onTimerUpdate}
              />
            </div>
          </div>

          {/* Floating Save Button */}
          {hasChanges && (
            <div className="fixed bottom-6 right-6 z-50">
              <Button
                onClick={handleSave}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 gap-2 rounded-full px-6 py-3"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          )}

          {/* Animated shine border for active timer */}
          {isTimerRunning && (
            <ShineBorder
              className="absolute inset-0 rounded-[inherit]"
              shineColor={["#F97316", "#FB923C", "#FDBA74"]}
              duration={4}
              borderWidth={3}
            />
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default TaskModal;
