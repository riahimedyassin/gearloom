"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Task } from "../types";

interface TaskInformationProps {
  task: Task;
  onTaskUpdate: (updatedTask: Task) => void;
}

export const TaskInformation: React.FC<TaskInformationProps> = ({
  task,
  onTaskUpdate,
}) => {
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
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Task Information</h3>
      </CardHeader>
      <CardContent className="px-0 pb-0 space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="title" className="text-sm font-medium">
            Title
          </Label>
          <Input
            id="title"
            value={task.title}
            onChange={(e) =>
              onTaskUpdate({ ...task, title: e.target.value })
            }
            className="focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title..."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description" className="text-sm font-medium">
            Description
          </Label>
          <Textarea
            id="description"
            value={task.description}
            onChange={(e) =>
              onTaskUpdate({ ...task, description: e.target.value })
            }
            className="focus:ring-2 focus:ring-blue-500 min-h-[120px]"
            placeholder="Enter task description..."
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="priority" className="text-sm font-medium">
            Priority
          </Label>
          <Select
            value={task.priority}
            onValueChange={(value: "low" | "medium" | "high") =>
              onTaskUpdate({ ...task, priority: value })
            }
          >
            <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <PriorityIcon
                    className={`w-4 h-4 ${getPriorityColor(task.priority)}`}
                  />
                  <span className="capitalize">{task.priority}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Low</span>
                </div>
              </SelectItem>
              <SelectItem value="medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Medium</span>
                </div>
              </SelectItem>
              <SelectItem value="high">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span>High</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskInformation;
