"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BasicDetailsFormProps {
  projectName: string;
  projectDescription: string;
  onNameChange: (name: string) => void;
  onDescriptionChange: (description: string) => void;
}

export function BasicDetailsForm({
  projectName,
  projectDescription,
  onNameChange,
  onDescriptionChange,
}: BasicDetailsFormProps) {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="project-name" className="text-base font-medium">
          Project Name *
        </Label>
        <Input
          id="project-name"
          placeholder="Enter your project name"
          value={projectName}
          onChange={(e) => onNameChange(e.target.value)}
          className="mt-2 h-12"
          maxLength={50}
        />
        <p className="text-xs text-slate-500 mt-1">
          {projectName.length}/50 characters
        </p>
      </div>

      <div>
        <Label htmlFor="project-description" className="text-base font-medium">
          Description (Optional)
        </Label>
        <Textarea
          id="project-description"
          placeholder="Describe your project..."
          value={projectDescription}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className="mt-2 min-h-24"
          maxLength={200}
        />
        <p className="text-xs text-slate-500 mt-1">
          {projectDescription.length}/200 characters
        </p>
      </div>
    </div>
  );
}
