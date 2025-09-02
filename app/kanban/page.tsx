"use client";

import React from "react";
import { useProject } from "@/contexts/project-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, User, Flag } from "lucide-react";

// Mock task data - in real app, this would come from your API filtered by project
const getTasksByProject = (projectId: string) => {
  const allTasks = {
    "1": [ // Web Development project tasks
      { id: 1, title: "Set up React components", status: "todo", priority: "high", assignee: "John", dueDate: "2025-09-05" },
      { id: 2, title: "Implement user authentication", status: "in-progress", priority: "critical", assignee: "Sarah", dueDate: "2025-09-03" },
      { id: 3, title: "Design database schema", status: "done", priority: "medium", assignee: "Mike", dueDate: "2025-09-01" },
    ],
    "2": [ // Startup project tasks
      { id: 4, title: "Market research analysis", status: "todo", priority: "high", assignee: "Lisa", dueDate: "2025-09-06" },
      { id: 5, title: "Prepare investor pitch", status: "in-progress", priority: "critical", assignee: "David", dueDate: "2025-09-04" },
      { id: 6, title: "Define business model", status: "done", priority: "high", assignee: "Emma", dueDate: "2025-08-30" },
    ],
    "3": [ // Learning project tasks
      { id: 7, title: "Complete React hooks tutorial", status: "todo", priority: "medium", assignee: "You", dueDate: "2025-09-07" },
      { id: 8, title: "Build practice project", status: "in-progress", priority: "medium", assignee: "You", dueDate: "2025-09-10" },
      { id: 9, title: "Read documentation", status: "done", priority: "low", assignee: "You", dueDate: "2025-08-29" },
    ],
    "4": [ // Mobile App project tasks
      { id: 10, title: "Design app wireframes", status: "todo", priority: "high", assignee: "Alex", dueDate: "2025-09-08" },
      { id: 11, title: "Set up React Native", status: "in-progress", priority: "medium", assignee: "Jordan", dueDate: "2025-09-05" },
    ],
    "5": [ // Data Science project tasks
      { id: 12, title: "Data collection and cleaning", status: "todo", priority: "high", assignee: "Taylor", dueDate: "2025-09-09" },
      { id: 13, title: "Exploratory data analysis", status: "in-progress", priority: "medium", assignee: "Casey", dueDate: "2025-09-12" },
    ],
  };
  
  return allTasks[projectId as keyof typeof allTasks] || [];
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical": return "bg-red-100 text-red-800 border-red-200";
    case "high": return "bg-orange-100 text-orange-800 border-orange-200";
    case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low": return "bg-green-100 text-green-800 border-green-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "todo": return "bg-blue-100 text-blue-800";
    case "in-progress": return "bg-purple-100 text-purple-800";
    case "done": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function KanbanPage() {
  const { currentProject } = useProject();
  
  if (!currentProject) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No Project Selected</h2>
          <p className="text-muted-foreground">Please select a project to view tasks.</p>
        </div>
      </div>
    );
  }

  const tasks = getTasksByProject(currentProject.id);
  const todoTasks = tasks.filter(task => task.status === "todo");
  const inProgressTasks = tasks.filter(task => task.status === "in-progress");
  const doneTasks = tasks.filter(task => task.status === "done");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {currentProject.name} - Kanban Board
          </h1>
          <p className="text-muted-foreground mt-1">
            {currentProject.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline">{currentProject.type.replace("-", " ")}</Badge>
            <Badge className={getPriorityColor(currentProject.priority)}>
              <Flag className="w-3 h-3 mr-1" />
              {currentProject.priority}
            </Badge>
          </div>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-blue-800 flex items-center gap-2">
              📝 To Do
              <Badge variant="outline" className="text-xs">
                {todoTasks.length}
              </Badge>
            </h3>
          </div>
          <div className="space-y-3">
            {todoTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">
                    {task.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(task.priority)} variant="outline">
                        {task.priority}
                      </Badge>
                      <Badge className={getStatusColor(task.status)} variant="outline">
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-purple-800 flex items-center gap-2">
              🔄 In Progress
              <Badge variant="outline" className="text-xs">
                {inProgressTasks.length}
              </Badge>
            </h3>
          </div>
          <div className="space-y-3">
            {inProgressTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">
                    {task.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(task.priority)} variant="outline">
                        {task.priority}
                      </Badge>
                      <Badge className={getStatusColor(task.status)} variant="outline">
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>
        </div>

        {/* Done Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-green-800 flex items-center gap-2">
              ✅ Done
              <Badge variant="outline" className="text-xs">
                {doneTasks.length}
              </Badge>
            </h3>
          </div>
          <div className="space-y-3">
            {doneTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow cursor-pointer opacity-80">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium line-through">
                    {task.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(task.priority)} variant="outline">
                        {task.priority}
                      </Badge>
                      <Badge className={getStatusColor(task.status)} variant="outline">
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>
        </div>
      </div>

      {/* Task Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Project Statistics</CardTitle>
          <CardDescription>Task progress for {currentProject.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{todoTasks.length}</div>
              <div className="text-sm text-muted-foreground">To Do</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{inProgressTasks.length}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{doneTasks.length}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{tasks.length}</div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
