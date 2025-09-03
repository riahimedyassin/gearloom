"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";

interface StepHeaderProps {
  step: number;
}

export function StepHeader({ step }: StepHeaderProps) {
  const getStepContent = () => {
    switch (step) {
      case 1:
        return {
          title: "Choose Your Project Type",
          description: "Select the type that best describes your project",
        };
      case 2:
        return {
          title: "Project Details",
          description: "Give your project a name and description",
        };
      case 3:
        return {
          title: "Project Context",
          description: "Help us understand your project better for AI assistance",
        };
      case 4:
        return {
          title: "Planning & Resources",
          description: "Define your timeline, budget, and resources",
        };
      case 5:
        return {
          title: "Review & Create",
          description: "Review your project details before creating",
        };
      case 6:
        return {
          title: "Success!",
          description: "Your workspace has been created successfully",
          isSuccess: true,
        };
      default:
        return { title: "", description: "" };
    }
  };

  const content = getStepContent();

  return (
    <>
      <CardTitle className={`text-2xl ${content.isSuccess ? "text-green-600" : ""}`}>
        {content.title}
      </CardTitle>
      <CardDescription>{content.description}</CardDescription>
    </>
  );
}
