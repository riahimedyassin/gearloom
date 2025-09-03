"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrayField } from "./ArrayField";

interface PlanningResourcesFormProps {
  timeline: string;
  budget: string;
  resources: string[];
  milestones: string[];
  onTimelineChange: (value: string) => void;
  onBudgetChange: (value: string) => void;
  onResourcesChange: React.Dispatch<React.SetStateAction<string[]>>;
  onMilestonesChange: React.Dispatch<React.SetStateAction<string[]>>;
}

export function PlanningResourcesForm({
  timeline,
  budget,
  resources,
  milestones,
  onTimelineChange,
  onBudgetChange,
  onResourcesChange,
  onMilestonesChange,
}: PlanningResourcesFormProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="timeline" className="text-base font-medium">
            Timeline *
          </Label>
          <Input
            id="timeline"
            placeholder="e.g., 3 months, Q2 2024, 6 weeks"
            value={timeline}
            onChange={(e) => onTimelineChange(e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="budget" className="text-base font-medium">
            Budget Range
          </Label>
          <Input
            id="budget"
            placeholder="e.g., $10K-50K, Bootstrap, $500/month"
            value={budget}
            onChange={(e) => onBudgetChange(e.target.value)}
            className="mt-2"
          />
        </div>
      </div>

      <ArrayField
        title="Resources"
        items={resources}
        setter={onResourcesChange}
        placeholder="e.g., Design team, API documentation, Cloud hosting"
      />

      <ArrayField
        title="Milestones"
        items={milestones}
        setter={onMilestonesChange}
        placeholder="e.g., MVP launch, Beta testing, Public release"
      />
    </div>
  );
}
