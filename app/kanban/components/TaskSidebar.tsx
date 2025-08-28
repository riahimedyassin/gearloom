"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Task } from "../types";

interface TaskSidebarProps {
  task: Task;
}

export const TaskSidebar: React.FC<TaskSidebarProps> = ({ task }) => {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return AlertCircle;
      case "medium":
        return Clock;
      case "low":
        return CheckCircle2;
      default:
        return Clock;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-amber-600";
      case "low":
        return "text-emerald-600";
      default:
        return "text-slate-600";
    }
  };

  const PriorityIcon = getPriorityIcon(task.priority);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Assignment</h3>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-slate-700 mb-3 block">
                Assigned To
              </Label>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 font-semibold">
                    {task.assignedTo.firstname[0]}
                    {task.assignedTo.lastname[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    {task.assignedTo.firstname} {task.assignedTo.lastname}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {task.assignedTo.email}
                  </p>
                  <Badge variant="outline" className="text-xs mt-2">
                    Primary Assignee
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6">
        <CardHeader className="px-0 pt-0">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Task Details</h3>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Priority</span>
              <div className="flex items-center gap-2">
                <PriorityIcon
                  className={`w-4 h-4 ${getPriorityColor(task.priority)}`}
                />
                <Badge
                  variant="secondary"
                  className={`text-xs ${
                    task.priority === "high"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {task.priority}
                </Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Subtasks</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">
                  {task.subtasks?.filter((s) => s.done).length || 0} /{" "}
                  {task.subtasks?.length || 0}
                </span>
                <Badge variant="outline" className="text-xs">
                  {task.subtasks?.length
                    ? `${Math.round(
                        ((task.subtasks?.filter((s) => s.done).length || 0) /
                          task.subtasks.length) *
                          100
                      )}%`
                    : "0%"}{" "}
                  Complete
                </Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Activity</span>
              <Badge variant="outline" className="text-xs">
                {task.comments?.length || 0} Comments
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskSidebar;
