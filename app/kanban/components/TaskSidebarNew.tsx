"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, ArrowDown, ArrowUp } from "lucide-react";
import { Task } from "../types";
import UserCombobox from "./UserCombobox";

interface TaskSidebarProps {
  task: Task;
  onTaskUpdate?: (updatedTask: Task) => void;
}

export const TaskSidebar: React.FC<TaskSidebarProps> = ({
  task,
  onTaskUpdate,
}) => {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return AlertTriangle;
      case "medium":
        return ArrowUp;
      case "low":
        return ArrowDown;
      default:
        return ArrowUp;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-orange-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const PriorityIcon = getPriorityIcon(task.priority);

  const handleAssigneeChange = (newAssignee: any) => {
    if (onTaskUpdate) {
      onTaskUpdate({
        ...task,
        assignedTo: newAssignee,
      });
    }
  };

  const handlePriorityChange = (newPriority: "low" | "medium" | "high") => {
    if (onTaskUpdate) {
      onTaskUpdate({
        ...task,
        priority: newPriority,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Priority */}
      <div>
        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
          Priority
        </Label>
        {onTaskUpdate ? (
          <Select value={task.priority} onValueChange={handlePriorityChange}>
            <SelectTrigger className="w-full h-8">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <PriorityIcon
                    className={`w-3 h-3 ${getPriorityColor(task.priority)}`}
                  />
                  <span className="text-sm capitalize">{task.priority}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-3 h-3 text-green-600" />
                  <span className="text-sm">Low</span>
                </div>
              </SelectItem>
              <SelectItem value="medium">
                <div className="flex items-center gap-2">
                  <ArrowUp className="w-3 h-3 text-orange-600" />
                  <span className="text-sm">Medium</span>
                </div>
              </SelectItem>
              <SelectItem value="high">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3 text-red-600" />
                  <span className="text-sm">High</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <PriorityIcon
              className={`w-4 h-4 ${getPriorityColor(task.priority)}`}
            />
            <span className="text-sm capitalize text-gray-700">
              {task.priority}
            </span>
          </div>
        )}
      </div>

      {/* Assignee */}
      <div>
        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
          Assignee
        </Label>
        {onTaskUpdate ? (
          <UserCombobox
            value={task.assignedTo}
            onSelect={handleAssigneeChange}
            placeholder="Select assignee..."
          />
        ) : (
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                {task.assignedTo.firstname[0]}
                {task.assignedTo.lastname[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {task.assignedTo.firstname} {task.assignedTo.lastname}
              </p>
              <p className="text-xs text-gray-500">{task.assignedTo.email}</p>
            </div>
          </div>
        )}
      </div>

      {/* Creator */}
      {task.createdBy && (
        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
            Reporter
          </Label>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="bg-green-100 text-green-700 text-xs">
                {task.createdBy.firstname[0]}
                {task.createdBy.lastname[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {task.createdBy.firstname} {task.createdBy.lastname}
              </p>
              <p className="text-xs text-gray-500">
                Created {new Date(task.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Task Progress */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
            Progress
          </Label>
          <div className="p-3 bg-gray-50 rounded">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Subtasks</span>
              <Badge variant="outline" className="text-xs">
                {task.subtasks.filter((s) => s.done).length}/
                {task.subtasks.length}
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (task.subtasks.filter((s) => s.done).length /
                      task.subtasks.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Activity */}
      {task.comments && task.comments.length > 0 && (
        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
            Activity
          </Label>
          <div className="p-3 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Comments</span>
              <Badge variant="outline" className="text-xs">
                {task.comments.length}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskSidebar;
