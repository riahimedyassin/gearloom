"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Trophy, 
  Play, 
  CheckCircle,
  Circle,
  Code,
  Brain,
  Database
} from "lucide-react";

export default function LearningPathsPage() {
  const currentPath = {
    title: "Full Stack Web Development",
    description: "Master modern web development from frontend to backend",
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    estimatedTime: "120 hours",
    difficulty: "Intermediate"
  };

  const modules = [
    { title: "HTML & CSS Fundamentals", completed: true, time: "8h" },
    { title: "JavaScript Essentials", completed: true, time: "12h" },
    { title: "React.js Basics", completed: true, time: "15h" },
    { title: "State Management", completed: true, time: "10h" },
    { title: "Node.js & Express", completed: true, time: "14h" },
    { title: "Database Design", completed: true, time: "12h" },
    { title: "API Development", completed: true, time: "16h" },
    { title: "Authentication & Security", completed: true, time: "10h" },
    { title: "Deployment & DevOps", completed: false, time: "12h", current: true },
    { title: "Testing & Quality Assurance", completed: false, time: "14h" },
    { title: "Performance Optimization", completed: false, time: "8h" },
    { title: "Final Project", completed: false, time: "9h" }
  ];

  const suggestedPaths = [
    {
      title: "Mobile App Development",
      description: "Learn React Native and Flutter",
      icon: Code,
      difficulty: "Advanced",
      time: "80 hours",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
      title: "Data Science Fundamentals",
      description: "Python, pandas, and machine learning",
      icon: Brain,
      difficulty: "Intermediate",
      time: "95 hours",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      title: "Database Administration",
      description: "Master SQL and NoSQL databases",
      icon: Database,
      difficulty: "Intermediate",
      time: "60 hours",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-green-600" />
            Learning Paths
          </h1>
          <p className="text-muted-foreground">
            Track your learning progress and discover new skills
          </p>
        </div>
        <Button>
          <BookOpen className="h-4 w-4 mr-2" />
          Browse All Paths
        </Button>
      </div>

      {/* Current Learning Path */}
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-green-600" />
                Current Path: {currentPath.title}
              </CardTitle>
              <CardDescription>{currentPath.description}</CardDescription>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {currentPath.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Progress: {currentPath.completedModules} of {currentPath.totalModules} modules</span>
              <span>{currentPath.progress}% complete</span>
            </div>
            <Progress value={currentPath.progress} className="h-2" />
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {currentPath.estimatedTime} total
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {currentPath.totalModules} modules
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Modules */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Modules</CardTitle>
          <CardDescription>Your progress through the current path</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  module.current 
                    ? 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20' 
                    : 'border-border'
                }`}
              >
                <div className="flex items-center gap-3">
                  {module.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : module.current ? (
                    <Play className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div>
                    <div className="font-medium">{module.title}</div>
                    {module.current && (
                      <Badge variant="outline" className="text-xs mt-1">
                        Currently Learning
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{module.time}</span>
                  {module.current && (
                    <Button size="sm" variant="outline">
                      Continue
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suggested Learning Paths */}
      <Card>
        <CardHeader>
          <CardTitle>Suggested Learning Paths</CardTitle>
          <CardDescription>Discover new skills based on your progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {suggestedPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="h-6 w-6 text-muted-foreground" />
                    <Badge className={`${path.color} border-0 text-xs`}>
                      {path.difficulty}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{path.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {path.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {path.time}
                    </span>
                    <Button size="sm" variant="outline">
                      Start Path
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
