"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, Sparkles, Plus, X } from "lucide-react";

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

  // Helper functions for managing arrays
  const addArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => [...prev, ""]);
  };

  const removeArrayItem = (index: number, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.filter((_, i) => i !== index));
  };

  const updateArrayItem = (index: number, value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => prev.map((item, i) => i === index ? value : item));
  };

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
        goals: goals.filter(g => g.trim() !== ""),
        targetAudience: targetAudience.trim(),
        techStack: techStack.filter(t => t.trim() !== ""),
        timeline: timeline.trim(),
        budget: budget.trim(),
        challenges: challenges.trim(),
        resources: resources.filter(r => r.trim() !== ""),
        milestones: milestones.filter(m => m.trim() !== ""),
      };

      // Save to localStorage
      const existingProjects = JSON.parse(localStorage.getItem("projects") || "[]");
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

  const ArrayField = ({ 
    title, 
    items, 
    setter, 
    placeholder 
  }: { 
    title: string; 
    items: string[]; 
    setter: React.Dispatch<React.SetStateAction<string[]>>; 
    placeholder: string;
  }) => (
    <div>
      <Label className="text-base font-medium">{title}</Label>
      <div className="space-y-2 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder={placeholder}
              value={item}
              onChange={(e) => updateArrayItem(index, e.target.value, setter)}
              className="flex-1"
            />
            {items.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeArrayItem(index, setter)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => addArrayItem(setter)}
          className="flex items-center gap-2 w-full"
        >
          <Plus className="h-4 w-4" />
          Add {title.slice(0, -1)}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GearLoom
            </h1>
          </div>
          <p className="text-lg text-slate-600">Create your new workspace</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-500">Step {step} of {totalSteps}</span>
            <span className="text-sm text-slate-500">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            {step === 1 && (
              <>
                <CardTitle className="text-2xl">Choose Your Project Type</CardTitle>
                <CardDescription>Select the type that best describes your project</CardDescription>
              </>
            )}
            {step === 2 && (
              <>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription>Give your project a name and description</CardDescription>
              </>
            )}
            {step === 3 && (
              <>
                <CardTitle className="text-2xl">Project Context</CardTitle>
                <CardDescription>Help us understand your project better for AI assistance</CardDescription>
              </>
            )}
            {step === 4 && (
              <>
                <CardTitle className="text-2xl">Planning & Resources</CardTitle>
                <CardDescription>Define your timeline, budget, and resources</CardDescription>
              </>
            )}
            {step === 5 && (
              <>
                <CardTitle className="text-2xl">Review & Create</CardTitle>
                <CardDescription>Review your project details before creating</CardDescription>
              </>
            )}
            {step === 6 && (
              <>
                <CardTitle className="text-2xl text-green-600">Success!</CardTitle>
                <CardDescription>Your workspace has been created successfully</CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="px-8 pb-8">
            {/* Step 1: Project Type Selection */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      selectedType === type.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{type.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                        <p className="text-slate-600 text-sm">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Basic Project Details */}
            {step === 2 && (
              <div className="space-y-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="project-name" className="text-base font-medium">
                    Project Name *
                  </Label>
                  <Input
                    id="project-name"
                    placeholder="Enter your project name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
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
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="mt-2 min-h-24"
                    maxLength={200}
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    {projectDescription.length}/200 characters
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Project Context */}
            {step === 3 && (
              <div className="space-y-6 max-w-2xl mx-auto">
                <ArrayField
                  title="Goals"
                  items={goals}
                  setter={setGoals}
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
                    onChange={(e) => setTargetAudience(e.target.value)}
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
                  setter={setTechStack}
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
                    onChange={(e) => setChallenges(e.target.value)}
                    className="mt-2 min-h-20"
                    maxLength={400}
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    {challenges.length}/400 characters
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Planning & Resources */}
            {step === 4 && (
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
                      onChange={(e) => setTimeline(e.target.value)}
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
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <ArrayField
                  title="Resources"
                  items={resources}
                  setter={setResources}
                  placeholder="e.g., Design team, API documentation, Cloud hosting"
                />

                <ArrayField
                  title="Milestones"
                  items={milestones}
                  setter={setMilestones}
                  placeholder="e.g., MVP launch, Beta testing, Public release"
                />
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-700 mb-1">Project Type</h4>
                    <Badge className={projectTypes.find(t => t.id === selectedType)?.color}>
                      {projectTypes.find(t => t.id === selectedType)?.icon}{" "}
                      {projectTypes.find(t => t.id === selectedType)?.name}
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

                  {goals.filter(g => g.trim()).length > 0 && (
                    <div>
                      <h4 className="font-medium text-slate-700 mb-1">Goals</h4>
                      <ul className="text-slate-600 text-sm space-y-1">
                        {goals.filter(g => g.trim()).map((goal, i) => (
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
            )}

            {/* Step 6: Success */}
            {step === 6 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Workspace Created!</h3>
                <p className="text-slate-600 mb-4">Redirecting you to your dashboard...</p>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            )}
          </CardContent>

          {/* Footer Navigation */}
          {step < 6 && (
            <div className="flex items-center justify-between px-8 pb-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
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
          )}
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
