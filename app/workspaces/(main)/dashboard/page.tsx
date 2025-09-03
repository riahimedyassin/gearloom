"use client";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useProject } from "@/contexts/project-context";
import { useTask } from "@/contexts/task-context";
import {
  Calendar,
  CheckCircle,
  Clock,
  Plus,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { currentProject, projects } = useProject();
  const { getTasksByProject } = useTask();
  const [projectTasks, setProjectTasks] = useState<any[]>([]);

  useEffect(() => {
    if (currentProject) {
      const tasks = getTasksByProject(currentProject.id);
      setProjectTasks(tasks);
    }
  }, [currentProject, getTasksByProject]);

  const getTaskStats = () => {
    const total = projectTasks.length;
    const completed = projectTasks.filter(
      (task) => task.status === "done"
    ).length;
    const inProgress = projectTasks.filter(
      (task) => task.status === "in-progress"
    ).length;
    const todo = projectTasks.filter((task) => task.status === "todo").length;

    return { total, completed, inProgress, todo };
  };

  const stats = getTaskStats();

  if (!currentProject) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome to GearLoom!
          </h2>
          <p className="text-slate-600 max-w-md">
            Get started by creating your first workspace or selecting an
            existing project.
          </p>
          <Button
            onClick={() => router.push("/create-workspace")}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Create New Workspace
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentProject.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Project Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentProject.name}</h1>
              <p className="text-blue-100 mb-4">{currentProject.description}</p>
              <div className="flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  {currentProject.type.charAt(0).toUpperCase() +
                    currentProject.type.slice(1)}
                </Badge>
                {currentProject.timeline && (
                  <div className="flex items-center gap-1 text-blue-100">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{currentProject.timeline}</span>
                  </div>
                )}
              </div>
            </div>
            <Button
              onClick={() => router.push("/workspaces/kanban")}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              View Kanban Board
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">
                Active project tasks
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.completed}
              </div>
              <p className="text-xs text-muted-foreground">
                {stats.total > 0
                  ? Math.round((stats.completed / stats.total) * 100)
                  : 0}
                % completion rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {stats.inProgress}
              </div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">To Do</CardTitle>
              <Zap className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {stats.todo}
              </div>
              <p className="text-xs text-muted-foreground">Pending tasks</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Details and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Context */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Project Context
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentProject.targetAudience && (
                <div>
                  <h4 className="font-medium text-slate-700 mb-1">
                    Target Audience
                  </h4>
                  <p className="text-sm text-slate-600">
                    {currentProject.targetAudience}
                  </p>
                </div>
              )}

              {currentProject.goals && currentProject.goals.length > 0 && (
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Goals</h4>
                  <ul className="space-y-1">
                    {currentProject.goals.slice(0, 3).map((goal, index) => (
                      <li
                        key={index}
                        className="text-sm text-slate-600 flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-1">•</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentProject.techStack &&
                currentProject.techStack.length > 0 && (
                  <div>
                    <h4 className="font-medium text-slate-700 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.techStack
                        .slice(0, 6)
                        .map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </div>
                )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                onClick={() => router.push("/workspaces/kanban")}
                className="w-full justify-start"
                variant="outline"
              >
                <Target className="h-4 w-4 mr-2" />
                Manage Tasks
              </Button>

              <Button
                onClick={() => router.push("/create-workspace")}
                className="w-full justify-start"
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create New Project
              </Button>

              {currentProject.milestones &&
                currentProject.milestones.length > 0 && (
                  <div className="pt-2">
                    <h4 className="font-medium text-slate-700 mb-2">
                      Upcoming Milestones
                    </h4>
                    <div className="space-y-2">
                      {currentProject.milestones
                        .slice(0, 3)
                        .map((milestone, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 bg-slate-50 rounded text-sm"
                          >
                            <Calendar className="h-4 w-4 text-slate-400" />
                            {milestone}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Tasks */}
        {projectTasks.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
              <CardDescription>
                Latest updates from your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {projectTasks.slice(0, 5).map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          task.status === "done"
                            ? "bg-green-500"
                            : task.status === "in-progress"
                            ? "bg-blue-500"
                            : task.status === "blocked"
                            ? "bg-red-500"
                            : "bg-gray-400"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-slate-600">
                          {task.description}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        task.priority === "critical"
                          ? "border-red-200 text-red-800"
                          : task.priority === "high"
                          ? "border-orange-200 text-orange-800"
                          : task.priority === "medium"
                          ? "border-yellow-200 text-yellow-800"
                          : "border-green-200 text-green-800"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
