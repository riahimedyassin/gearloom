"use client";

import { Badge } from "@/components/ui/badge";

interface ProjectType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface ReviewSectionProps {
  projectTypes: ProjectType[];
  selectedType: string;
  projectName: string;
  projectDescription: string;
  goals: string[];
  targetAudience: string;
  timeline: string;
  budget: string;
}

export function ReviewSection({
  projectTypes,
  selectedType,
  projectName,
  projectDescription,
  goals,
  targetAudience,
  timeline,
  budget,
}: ReviewSectionProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-slate-50 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-medium text-slate-700 mb-1">Project Type</h4>
          <Badge
            className={projectTypes.find((t) => t.id === selectedType)?.color}
          >
            {projectTypes.find((t) => t.id === selectedType)?.icon}{" "}
            {projectTypes.find((t) => t.id === selectedType)?.name}
          </Badge>
        </div>

        <div>
          <h4 className="font-medium text-slate-700 mb-1">Project Name</h4>
          <p className="text-lg font-semibold">{projectName}</p>
        </div>

        {projectDescription && (
          <div>
            <h4 className="font-medium text-slate-700 mb-1">Description</h4>
            <p className="text-slate-600">{projectDescription}</p>
          </div>
        )}

        {goals.filter((g) => g.trim()).length > 0 && (
          <div>
            <h4 className="font-medium text-slate-700 mb-1">Goals</h4>
            <ul className="text-slate-600 text-sm space-y-1">
              {goals
                .filter((g) => g.trim())
                .map((goal, i) => (
                  <li key={i}>• {goal}</li>
                ))}
            </ul>
          </div>
        )}

        {targetAudience && (
          <div>
            <h4 className="font-medium text-slate-700 mb-1">Target Audience</h4>
            <p className="text-slate-600 text-sm">{targetAudience}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timeline && (
            <div>
              <h4 className="font-medium text-slate-700 mb-1">Timeline</h4>
              <p className="text-slate-600 text-sm">{timeline}</p>
            </div>
          )}

          {budget && (
            <div>
              <h4 className="font-medium text-slate-700 mb-1">Budget</h4>
              <p className="text-slate-600 text-sm">{budget}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
