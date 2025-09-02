"use client";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProjectType } from "@/contexts/project-type-context";
import {
  BarChart3,
  Briefcase,
  Code,
  Folder,
  GraduationCap,
  Smartphone,
} from "lucide-react";

const projectTypeConfig = {
  default: {
    label: "General",
    icon: Folder,
    color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    description: "Standard project management",
  },
  startup: {
    label: "Startup",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    description: "Business development focused",
  },
  learning: {
    label: "Learning",
    icon: GraduationCap,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    description: "Education and skill development",
  },
  "web-development": {
    label: "Web Dev",
    icon: Code,
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    description: "Web application development",
  },
  "mobile-app": {
    label: "Mobile",
    icon: Smartphone,
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    description: "Mobile application development",
  },
  "data-science": {
    label: "Data Science",
    icon: BarChart3,
    color:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    description: "Data analysis and machine learning",
  },
};

export function ProjectTypeSelector() {
  const { currentProjectType, setProjectType } = useProjectType();
  const currentConfig = projectTypeConfig[currentProjectType];
  const CurrentIcon = currentConfig.icon;

  return (
    <div className="flex items-center gap-2">
      <Badge className={`${currentConfig.color} border-0 font-medium`}>
        <CurrentIcon className="w-3 h-3 mr-1" />
        {currentConfig.label}
      </Badge>

      <Select
        value={currentProjectType}
        onValueChange={(value) => setProjectType(value as any)}
      >
        <SelectTrigger className="w-[160px] h-8 text-xs">
          <SelectValue placeholder="Project Type" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(projectTypeConfig).map(([type, config]) => {
            const Icon = config.icon;
            return (
              <SelectItem key={type} value={type} className="text-xs">
                <div className="flex items-center gap-2">
                  <Icon className="w-3 h-3" />
                  <div className="flex flex-col">
                    <span className="font-medium">{config.label}</span>
                    <span className="text-[10px] text-muted-foreground">
                      {config.description}
                    </span>
                  </div>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
