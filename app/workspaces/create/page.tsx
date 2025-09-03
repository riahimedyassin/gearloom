"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BasicDetailsForm,
  Navigation,
  PlanningResourcesForm,
  ProjectContextForm,
  ProjectTypeSelector,
  ReviewSection,
  StepHeader,
  SuccessAnimation,
  WorkspaceHeader,
} from "./components";

interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
  createdAt: Date;
  // Enhanced fields for better LLM context
  goals: string[];
  targetAudience: string;
  techStack: string[];
  timeline: string;
  budget: string;
  challenges: string;
  resources: string[];
  milestones: string[];
}

const projectTypes = [
  {
    id: "web-dev",
    name: "Web Development",
    description: "Frontend, backend, and full-stack web applications",
    icon: "🌐",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    id: "mobile",
    name: "Mobile App",
    description: "iOS, Android, and cross-platform mobile applications",
    icon: "📱",
    color: "bg-green-100 text-green-800 border-green-200",
  },
  {
    id: "learning",
    name: "Learning Project",
    description: "Educational content, courses, and skill development",
    icon: "📚",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    id: "startup",
    name: "Startup/Business",
    description: "Business planning, product development, and entrepreneurship",
    icon: "🚀",
    color: "bg-orange-100 text-orange-800 border-orange-200",
  },
];

export default function CreateWorkspacePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  // Enhanced fields
  const [goals, setGoals] = useState<string[]>([""]);
  const [targetAudience, setTargetAudience] = useState("");
  const [techStack, setTechStack] = useState<string[]>([""]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [challenges, setChallenges] = useState("");
  const [resources, setResources] = useState<string[]>([""]);
  const [milestones, setMilestones] = useState<string[]>([""]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!selectedType || !projectName.trim()) return;

    setIsSubmitting(true);

    try {
      const newProject: Project = {
        id: Date.now().toString(),
        name: projectName.trim(),
        description: projectDescription.trim(),
        type: selectedType,
        createdAt: new Date(),
        // Enhanced fields with filtering for empty entries
        goals: goals.filter((g) => g.trim() !== ""),
        targetAudience: targetAudience.trim(),
        techStack: techStack.filter((t) => t.trim() !== ""),
        timeline: timeline.trim(),
        budget: budget.trim(),
        challenges: challenges.trim(),
        resources: resources.filter((r) => r.trim() !== ""),
        milestones: milestones.filter((m) => m.trim() !== ""),
      };

      // Save to localStorage
      const existingProjects = JSON.parse(
        localStorage.getItem("projects") || "[]"
      );
      const updatedProjects = [...existingProjects, newProject];
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      localStorage.setItem("currentProject", JSON.stringify(newProject));

      // Show success step
      setStep(6);

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error creating project:", error);
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedType !== "";
      case 2:
        return projectName.trim() !== "";
      case 3:
        return targetAudience.trim() !== "";
      case 4:
        return timeline.trim() !== "";
      case 5:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <ProjectTypeSelector
            projectTypes={projectTypes}
            selectedType={selectedType}
            onSelectType={setSelectedType}
          />
        );
      case 2:
        return (
          <BasicDetailsForm
            projectName={projectName}
            projectDescription={projectDescription}
            onNameChange={setProjectName}
            onDescriptionChange={setProjectDescription}
          />
        );
      case 3:
        return (
          <ProjectContextForm
            goals={goals}
            targetAudience={targetAudience}
            techStack={techStack}
            challenges={challenges}
            onGoalsChange={setGoals}
            onTargetAudienceChange={setTargetAudience}
            onTechStackChange={setTechStack}
            onChallengesChange={setChallenges}
          />
        );
      case 4:
        return (
          <PlanningResourcesForm
            timeline={timeline}
            budget={budget}
            resources={resources}
            milestones={milestones}
            onTimelineChange={setTimeline}
            onBudgetChange={setBudget}
            onResourcesChange={setResources}
            onMilestonesChange={setMilestones}
          />
        );
      case 5:
        return (
          <ReviewSection
            projectTypes={projectTypes}
            selectedType={selectedType}
            projectName={projectName}
            projectDescription={projectDescription}
            goals={goals}
            targetAudience={targetAudience}
            timeline={timeline}
            budget={budget}
          />
        );
      case 6:
        return <SuccessAnimation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <WorkspaceHeader />

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-500">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-slate-500">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <StepHeader step={step} />
          </CardHeader>

          <CardContent className="px-8 pb-8">
            {renderStepContent()}
          </CardContent>

          {/* Footer Navigation */}
          <Navigation
            step={step}
            totalSteps={totalSteps}
            canProceed={canProceed()}
            isSubmitting={isSubmitting}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </Card>

        {/* Back to Dashboard Link */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/dashboard")}
            className="text-slate-500 hover:text-slate-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
