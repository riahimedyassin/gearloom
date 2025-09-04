"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  createProjectSchema,
  keywordSuggestions,
  technologyOptions,
  type CreateProjectFormData,
} from "@/schemas/projects/createProject";
import { useUIStore } from "@/stores";
import { useCreateProject } from "@/hooks/useProject";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  FileText,
  Lightbulb,
  Plus,
  Target,
  Users,
  X,
} from "lucide-react";

interface MultiSelectInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  placeholder: string;
  maxItems?: number;
}

function MultiSelectInput({
  value,
  onChange,
  options,
  placeholder,
  maxItems = 10,
}: MultiSelectInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const filteredOptions = options.filter(
    (option) =>
      !value.includes(option) &&
      option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addItem = (item: string) => {
    if (value.length < maxItems && !value.includes(item)) {
      onChange([...value, item]);
    }
    setInputValue("");
    setIsOpen(false);
  };

  const addCustomItem = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !value.includes(trimmed) && value.length < maxItems) {
      onChange([...value, trimmed]);
      setInputValue("");
      setIsOpen(false);
    }
  };

  const removeItem = (item: string) => {
    onChange(value.filter((v) => v !== item));
  };

  return (
    <div className="space-y-3">
      {/* Selected Items */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="gap-2 py-2 px-4 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {item}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground rounded-full"
                onClick={() => removeItem(item)}
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}

      {/* Input Field */}
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCustomItem();
            } else if (e.key === "Escape") {
              setIsOpen(false);
            }
          }}
          className="pr-10"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Plus className="w-4 h-4" />
        </div>

        {/* Dropdown */}
        {isOpen && (filteredOptions.length > 0 || inputValue.trim()) && (
          <Card className="absolute z-50 w-full mt-2 shadow-lg border">
            <CardContent className="p-2 max-h-48 overflow-y-auto">
              {filteredOptions.slice(0, 8).map((option) => (
                <button
                  key={option}
                  type="button"
                  className="w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground rounded-md text-sm transition-colors"
                  onClick={() => addItem(option)}
                >
                  {option}
                </button>
              ))}
              {inputValue.trim() && !options.includes(inputValue.trim()) && (
                <button
                  type="button"
                  className="w-full px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground rounded-md text-sm border-t mt-1 pt-3 flex items-center gap-2 transition-colors"
                  onClick={addCustomItem}
                >
                  <Plus className="w-3 h-3 text-primary" />
                  <span>
                    Add <strong>"{inputValue.trim()}"</strong>
                  </span>
                </button>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {value.length}/{maxItems} items selected
        </span>
        {value.length >= maxItems && (
          <span className="text-amber-600 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            Maximum reached
          </span>
        )}
      </div>
    </div>
  );
}

// Project Type Selection Component
const projectTypeOptions = [
  { value: "web_development", label: "Web Development", icon: "🌐" },
  { value: "mobile_app", label: "Mobile Application", icon: "📱" },
  { value: "desktop_app", label: "Desktop Application", icon: "💻" },
  { value: "api_backend", label: "API/Backend Service", icon: "⚡" },
  { value: "data_science", label: "Data Science/Analytics", icon: "📊" },
  { value: "machine_learning", label: "Machine Learning/AI", icon: "🤖" },
  { value: "research", label: "Research Project", icon: "🔬" },
  { value: "marketing", label: "Marketing Campaign", icon: "📢" },
  { value: "design", label: "Design Project", icon: "🎨" },
  { value: "business", label: "Business Strategy", icon: "💼" },
  { value: "education", label: "Educational Content", icon: "🎓" },
  { value: "personal", label: "Personal Project", icon: "👤" },
  { value: "startup", label: "Startup Venture", icon: "🚀" },
  { value: "learning", label: "Learning & Skill Development", icon: "📚" },
  { value: "other", label: "Other", icon: "🔧" },
];

const projectCategoryOptions = [
  { value: "startup", label: "Startup", icon: "🚀" },
  { value: "enterprise", label: "Enterprise", icon: "🏢" },
  { value: "personal", label: "Personal", icon: "👤" },
  { value: "freelance", label: "Freelance", icon: "💼" },
  { value: "open_source", label: "Open Source", icon: "🔓" },
  { value: "academic", label: "Academic", icon: "🎓" },
  { value: "non_profit", label: "Non-Profit", icon: "🤝" },
];

const priorityOptions = [
  { value: "low", label: "Low Priority", icon: "🟢" },
  { value: "medium", label: "Medium Priority", icon: "🟡" },
  { value: "high", label: "High Priority", icon: "🟠" },
  { value: "critical", label: "Critical", icon: "🔴" },
];

const timelineOptions = [
  { value: "1-week", label: "1 Week", icon: "⚡" },
  { value: "2-4-weeks", label: "2-4 Weeks", icon: "📅" },
  { value: "1-3-months", label: "1-3 Months", icon: "📆" },
  { value: "3-6-months", label: "3-6 Months", icon: "🗓️" },
  { value: "6-12-months", label: "6-12 Months", icon: "📋" },
  { value: "1-year+", label: "1 Year+", icon: "📊" },
];

// Navigation steps configuration
const steps = [
  {
    id: 1,
    title: "Basic Info",
    description: "Name and description",
    icon: FileText,
  },
  {
    id: 2,
    title: "Project Type",
    description: "Category and purpose",
    icon: Target,
  },
  {
    id: 3,
    title: "Project Details",
    description: "Timeline and priorities",
    icon: Calendar,
  },
  {
    id: 4,
    title: "Tech Stack",
    description: "Technologies and tools",
    icon: Lightbulb,
  },
  {
    id: 5,
    title: "Planning",
    description: "Goals and challenges",
    icon: Users,
  },
];

export function CreateProjectDialog() {
  const { createProjectModalOpen, closeCreateProjectModal } = useUIStore();
  const [currentStep, setCurrentStep] = useState(1);
  const createProjectMutation = useCreateProject();

  const form = useForm({
    resolver: zodResolver(createProjectSchema),
    mode: "onChange" as const,
    defaultValues: {
      name: "",
      description: "",
      type: undefined,
      category: undefined,
      priority: "medium" as const,
      targetAudience: "",
      techStack: [],
      keywords: [],
      timeline: undefined,
      goals: [],
      challenges: [],
      resources: {
        budget: undefined,
        tools: [],
        references: [],
      },
      context: "",
    },
  });

  const watchedType = form.watch("type");

  const nextStep = async () => {
    let fieldsToValidate: (keyof CreateProjectFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["name", "description"];
        break;
      case 2:
        fieldsToValidate = ["type", "category"];
        break;
      case 3:
        fieldsToValidate = ["priority"];
        break;
      case 4:
        fieldsToValidate = ["techStack", "keywords"];
        break;
      case 5:
        fieldsToValidate = ["goals"];
        break;
    }

    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: CreateProjectFormData) => {
    try {
      console.log("Creating project:", data);
      
      // Create the project using our mutation hook
      await createProjectMutation.mutateAsync(data);

      // Success - close modal and reset form
      closeCreateProjectModal();
      setCurrentStep(1);
      form.reset();

      // Show success toast notification
      toast.success("Project created successfully!");
    } catch (error) {
      console.error("Failed to create project:", error);
      // Error toast will be shown by the mutation hook
    }
  };

  const handleClose = () => {
    closeCreateProjectModal();
    setCurrentStep(1);
    form.reset();
  };

  const suggestedKeywords = watchedType
    ? keywordSuggestions[watchedType] || []
    : [];

  return (
    <Dialog open={createProjectModalOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl max-h-[95vh] overflow-hidden flex flex-col">
        <DialogHeader className="pb-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Create New Project
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground mt-2">
                Let's set up your project with intelligent context for better AI
                assistance
              </DialogDescription>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-primary">
                Step {currentStep} of {steps.length}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {steps[currentStep - 1]?.title}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <Progress
              value={(currentStep / steps.length) * 100}
              className="h-2 bg-muted"
            />
          </div>

          {/* Step Navigation */}
          <div className="flex justify-between mt-4 px-2">
            {steps.map((step) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center gap-2 transition-all duration-200 ${
                    isCurrent ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isCompleted
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : isCurrent
                        ? "bg-primary/20 text-primary border-2 border-primary shadow-md"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-xs font-medium ${
                        isCurrent
                          ? "text-primary"
                          : isCompleted
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div
                      className={`text-xs ${
                        isCurrent || isCompleted
                          ? "text-muted-foreground"
                          : "text-muted-foreground/60"
                      }`}
                    >
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </DialogHeader>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto px-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 pb-8"
            >
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <FileText className="w-6 h-6 text-primary" />
                      Basic Information
                    </CardTitle>
                    <CardDescription className="text-base">
                      Let's start with the fundamentals of your project
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Project Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your project name (e.g., E-commerce Platform, Mobile Weather App)"
                              className="text-base h-12"
                            />
                          </FormControl>
                          <FormDescription>
                            Choose a clear, descriptive name for your project
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Project Description *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Describe what your project does, its main purpose, and key features..."
                              className="text-base min-h-[120px] resize-none"
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a clear overview of your project's purpose,
                            main features, and goals
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Project Type & Category */}
              {currentStep === 2 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Target className="w-6 h-6 text-primary" />
                      Project Type & Context
                    </CardTitle>
                    <CardDescription className="text-base">
                      Help us understand your project's domain and purpose
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Project Type *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectTypeOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex items-center gap-2">
                                    <span>{option.icon}</span>
                                    <span>{option.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select the primary type that best describes your
                            project
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Project Category *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select project category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectCategoryOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex items-center gap-2">
                                    <span>{option.icon}</span>
                                    <span>{option.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose the category that best fits your project's
                            context
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Project Planning & Timeline */}
              {currentStep === 3 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Calendar className="w-6 h-6 text-primary" />
                      Planning & Timeline
                    </CardTitle>
                    <CardDescription className="text-base">
                      Set expectations and project parameters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium">
                              Project Priority *
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12">
                                  <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {priorityOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    <div className="flex items-center gap-2">
                                      <span>{option.icon}</span>
                                      <span>{option.label}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium">
                              Expected Timeline
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12">
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timelineOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    <div className="flex items-center gap-2">
                                      <span>{option.icon}</span>
                                      <span>{option.label}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Target Audience
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Describe your target users, customers, or audience..."
                              className="text-base min-h-[80px] resize-none"
                            />
                          </FormControl>
                          <FormDescription>
                            Who will use or benefit from this project?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Tech Stack & Keywords */}
              {currentStep === 4 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Lightbulb className="w-6 h-6 text-primary" />
                      Tech Stack & Keywords
                    </CardTitle>
                    <CardDescription className="text-base">
                      Define the technologies and key concepts for your project
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-8">
                    <FormField
                      control={form.control}
                      name="techStack"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Tech Stack *
                          </FormLabel>
                          <FormControl>
                            <MultiSelectInput
                              value={field.value || []}
                              onChange={field.onChange}
                              options={technologyOptions}
                              placeholder="Start typing to search tech stack (React, Node.js, Python, Docker...)..."
                            />
                          </FormControl>
                          <FormDescription>
                            Select or add technologies, frameworks, languages,
                            and tools you'll use
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="keywords"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Project Keywords *
                          </FormLabel>
                          <FormControl>
                            <MultiSelectInput
                              value={field.value || []}
                              onChange={field.onChange}
                              options={suggestedKeywords}
                              placeholder="Add keywords that describe your project (e.g., ecommerce, real-time, mobile)..."
                              maxItems={15}
                            />
                          </FormControl>
                          <FormDescription>
                            Add keywords that describe your project's domain,
                            features, or industry
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Goals & Context */}
              {currentStep === 5 && (
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Users className="w-6 h-6 text-primary" />
                      Goals & Strategic Context
                    </CardTitle>
                    <CardDescription className="text-base">
                      Define success criteria and provide context for AI
                      assistance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-8">
                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Project Goals *
                          </FormLabel>
                          <FormControl>
                            <MultiSelectInput
                              value={field.value || []}
                              onChange={field.onChange}
                              options={[]}
                              placeholder="Add your project goals (e.g., increase user engagement, reduce processing time)..."
                              maxItems={10}
                            />
                          </FormControl>
                          <FormDescription>
                            What do you want to achieve with this project?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="challenges"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Expected Challenges
                          </FormLabel>
                          <FormControl>
                            <MultiSelectInput
                              value={field.value || []}
                              onChange={field.onChange}
                              options={[]}
                              placeholder="What challenges do you anticipate? (e.g., performance optimization, user adoption)..."
                              maxItems={8}
                            />
                          </FormControl>
                          <FormDescription>
                            Identify potential roadblocks or technical challenges
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="context"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium">
                            Additional Context
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Any additional context, constraints, or important information about your project..."
                              className="text-base min-h-[120px] resize-none"
                            />
                          </FormControl>
                          <FormDescription>
                            Provide any additional information that would help AI
                            understand your project better
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t bg-background/80 backdrop-blur-sm sticky bottom-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 h-11 px-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cancel
                  </Button>

                  {currentStep < steps.length ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 h-11 px-6"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={createProjectMutation.isPending}
                      className="flex items-center gap-2 h-11 px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      <Plus className="w-4 h-4" />
                      {createProjectMutation.isPending ? "Creating..." : "Create Project"}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
