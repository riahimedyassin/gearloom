"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrayField } from "./ArrayField";

interface ProjectContextFormProps {
  goals: string[];
  targetAudience: string;
  techStack: string[];
  challenges: string;
  onGoalsChange: React.Dispatch<React.SetStateAction<string[]>>;
  onTargetAudienceChange: (value: string) => void;
  onTechStackChange: React.Dispatch<React.SetStateAction<string[]>>;
  onChallengesChange: (value: string) => void;
}

export function ProjectContextForm({
  goals,
  targetAudience,
  techStack,
  challenges,
  onGoalsChange,
  onTargetAudienceChange,
  onTechStackChange,
  onChallengesChange,
}: ProjectContextFormProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <ArrayField
        title="Goals"
        items={goals}
        setter={onGoalsChange}
        placeholder="e.g., Increase user engagement by 25%"
      />

      <div>
        <Label htmlFor="target-audience" className="text-base font-medium">
          Target Audience *
        </Label>
        <Textarea
          id="target-audience"
          placeholder="Describe your target users, customers, or beneficiaries..."
          value={targetAudience}
          onChange={(e) => onTargetAudienceChange(e.target.value)}
          className="mt-2 min-h-20"
          maxLength={300}
        />
        <p className="text-xs text-slate-500 mt-1">
          {targetAudience.length}/300 characters
        </p>
      </div>

      <ArrayField
        title="Tech Stack"
        items={techStack}
        setter={onTechStackChange}
        placeholder="e.g., React, Node.js, PostgreSQL"
      />

      <div>
        <Label htmlFor="challenges" className="text-base font-medium">
          Expected Challenges
        </Label>
        <Textarea
          id="challenges"
          placeholder="What challenges do you anticipate? This helps AI provide better solutions..."
          value={challenges}
          onChange={(e) => onChallengesChange(e.target.value)}
          className="mt-2 min-h-20"
          maxLength={400}
        />
        <p className="text-xs text-slate-500 mt-1">
          {challenges.length}/400 characters
        </p>
      </div>
    </div>
  );
}
