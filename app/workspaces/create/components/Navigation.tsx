"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface NavigationProps {
  step: number;
  totalSteps: number;
  canProceed: boolean;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export function Navigation({
  step,
  totalSteps,
  canProceed,
  isSubmitting,
  onPrevious,
  onNext,
  onSubmit,
}: NavigationProps) {
  if (step >= 6) return null; // Don't show navigation on success step

  return (
    <div className="flex items-center justify-between px-8 pb-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={step === 1}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>

      {step < totalSteps ? (
        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="flex items-center gap-2"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          onClick={onSubmit}
          disabled={!canProceed || isSubmitting}
          className="flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Creating...
            </>
          ) : (
            <>
              <Check className="h-4 w-4" />
              Create Workspace
            </>
          )}
        </Button>
      )}
    </div>
  );
}
