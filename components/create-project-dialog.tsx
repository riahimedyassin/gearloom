"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
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
import { zodResolver } from "@hookform/resolvers/zod";
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Brain,
    Building,
    Building2,
    Calendar,
    Check,
    Clock,
    Code,
    Database,
    FileText,
    Globe,
    GraduationCap,
    Layers,
    Lightbulb,
    Megaphone,
    Monitor,
    Palette,
    Plus,
    Rocket,
    Settings,
    Smartphone,
    Target,
    TrendingUp,
    User,
    Users,
    X,
    Zap,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const steps = [
  {
    id: 1,
    title: "Basic Info",
    description: "Project name and description",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Project Type",
    description: "Category and priority",
    icon: <Target className="w-5 h-5" />,
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Team & Timeline",
    description: "Size and schedule",
    icon: <Users className="w-5 h-5" />,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Technologies",
    description: "Tech stack and tools",
    icon: <Code className="w-5 h-5" />,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Context & Goals",
    description: "AI assistance details",
    icon: <Brain className="w-5 h-5" />,
    color: "bg-pink-500",
  },
];

const projectTypeIcons: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-5 h-5" />,
  "mobile-app": <Smartphone className="w-5 h-5" />,
  "desktop-app": <Monitor className="w-5 h-5" />,
  "api-backend": <Database className="w-5 h-5" />,
  "data-science": <BarChart3 className="w-5 h-5" />,
  "machine-learning": <Brain className="w-5 h-5" />,
  research: <FileText className="w-5 h-5" />,
  marketing: <Megaphone className="w-5 h-5" />,
  design: <Palette className="w-5 h-5" />,
  business: <Building2 className="w-5 h-5" />,
  education: <GraduationCap className="w-5 h-5" />,
  personal: <User className="w-5 h-5" />,
  other: <Layers className="w-5 h-5" />,
};

interface MultiSelectFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  placeholder: string;
  maxItems?: number;
}

function MultiSelectField({
  value,
  onChange,
  options,
  placeholder,
  maxItems = 10,
}: MultiSelectFieldProps) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(inputValue.toLowerCase()) &&
      !value.includes(option)
  );

  const addItem = (item: string) => {
    if (value.length < maxItems && !value.includes(item)) {
      onChange([...value, item]);
      setInputValue("");
      setIsOpen(false);
    }
  };

  const removeItem = (item: string) => {
    onChange(value.filter((v) => v !== item));
  };

  const addCustomItem = () => {
    if (
      inputValue.trim() &&
      !value.includes(inputValue.trim()) &&
      value.length < maxItems
    ) {
      addItem(inputValue.trim());
    }
  };

  return (
    <div className="space-y-4">
      {/* Selected Items */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-3">
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

export function CreateProjectDialog() {
  const [currentStep, setCurrentStep] = useState(1);
  const { createProjectModalOpen, closeCreateProjectModal } = useUIStore();

  const form = useForm<CreateProjectFormData>({
    resolver: zodResolver(createProjectSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      type: undefined,
      category: undefined,
      targetAudience: "",
      technologies: [],
      keywords: [],
      timeline: undefined,
      teamSize: undefined,
      priority: undefined,
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

  const progress = (currentStep / steps.length) * 100;

  const nextStep = async () => {
    let fieldsToValidate: (keyof CreateProjectFormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["name", "description"];
        break;
      case 2:
        fieldsToValidate = ["type", "category", "priority"];
        break;
      case 3:
        fieldsToValidate = ["targetAudience", "teamSize", "timeline"];
        break;
      case 4:
        fieldsToValidate = ["technologies", "keywords"];
        break;
      case 5:
        fieldsToValidate = ["goals"];
        break;
    }

    if (fieldsToValidate.length > 0) {
      const isValid = await form.trigger(fieldsToValidate);
      if (!isValid) {
        return;
      }
    }

    if (currentStep < steps.length) {
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
      // Here you would typically call your API
      // await createProject(data)

      closeCreateProjectModal();
      setCurrentStep(1);
      form.reset();

      // Show success notification
      // addNotification({ ... })
    } catch (error) {
      console.error("Failed to create project:", error);
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
          <DialogTitle className="flex items-center gap-4 text-xl">
            <div
              className={`${
                steps[currentStep - 1].color
              } text-white p-3 rounded-xl shadow-lg`}
            >
              {steps[currentStep - 1].icon}
            </div>
            <div>
              <div className="font-semibold">Create New Project</div>
              <div className="text-sm text-muted-foreground font-normal">
                Step {currentStep} of {steps.length}:{" "}
                {steps[currentStep - 1].title}
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Enhanced Progress Bar */}
        <div className="space-y-6 py-6 px-2">
          <div className="relative">
            <Progress value={progress} className="h-3 bg-muted" />
            <div
              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step indicators */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep > step.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : currentStep === step.id
                      ? `${step.color} text-white shadow-lg`
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    step.icon
                  )}
                </div>
                <div className="mt-2">
                  <div
                    className={`text-xs font-medium ${
                      currentStep >= step.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto px-2 md:px-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 pb-6"
            >
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-8 max-w-4xl mx-auto">
                  <div className="text-center py-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      Basic Information
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Let's start with the fundamentals of your project
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:gap-10">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., E-commerce Platform"
                              {...field}
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
                          <FormLabel>Description *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe what your project is about, its main purpose, and what you're trying to achieve..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a detailed description to help AI understand
                            your project better
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Project Type & Category */}
              {currentStep === 2 && (
                <div className="space-y-8 max-w-5xl mx-auto">
                  <div className="text-center py-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      Project Type & Category
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Classify your project to get better AI assistance
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web-development">
                                Web Development
                              </SelectItem>
                              <SelectItem value="mobile-app">
                                Mobile App
                              </SelectItem>
                              <SelectItem value="desktop-app">
                                Desktop App
                              </SelectItem>
                              <SelectItem value="api-backend">
                                API/Backend
                              </SelectItem>
                              <SelectItem value="data-science">
                                Data Science
                              </SelectItem>
                              <SelectItem value="machine-learning">
                                Machine Learning
                              </SelectItem>
                              <SelectItem value="research">Research</SelectItem>
                              <SelectItem value="marketing">
                                Marketing
                              </SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="education">
                                Education
                              </SelectItem>
                              <SelectItem value="personal">Personal</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="startup">Startup</SelectItem>
                              <SelectItem value="enterprise">
                                Enterprise
                              </SelectItem>
                              <SelectItem value="personal">Personal</SelectItem>
                              <SelectItem value="freelance">
                                Freelance
                              </SelectItem>
                              <SelectItem value="open-source">
                                Open Source
                              </SelectItem>
                              <SelectItem value="academic">Academic</SelectItem>
                              <SelectItem value="non-profit">
                                Non-Profit
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Priority *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select priority level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">
                              Low - Nice to have
                            </SelectItem>
                            <SelectItem value="medium">
                              Medium - Important
                            </SelectItem>
                            <SelectItem value="high">
                              High - Very important
                            </SelectItem>
                            <SelectItem value="critical">
                              Critical - Must have
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          How important is this project to you or your
                          organization?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 3: Team & Timeline */}
              {currentStep === 3 && (
                <Card className="border-0 shadow-none">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Team & Timeline
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Project scope and timeline details
                      </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-10">
                      <FormField
                        control={form.control}
                        name="targetAudience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Target Audience *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="e.g., Small business owners who need to manage their inventory and sales, students learning programming, remote teams collaborating on projects..."
                                className="min-h-[120px] text-base leading-relaxed"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription className="text-sm">
                              Who will use or benefit from this project? Be
                              specific about their needs and context.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
                        <FormField
                          control={form.control}
                          name="teamSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Team Size *
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 w-full">
                                    <SelectValue placeholder="Select team size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="solo" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <User className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">Solo</div>
                                        <div className="text-xs text-muted-foreground">
                                          Just me working alone
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="2-3" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Users className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">
                                          2-3 people
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Small team
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="4-6" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Users className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">
                                          4-6 people
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Medium team
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="7-10" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Users className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">
                                          7-10 people
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Large team
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="11-20" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Building2 className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">
                                          11-20 people
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Department size
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="20+" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Building className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">
                                          20+ people
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Enterprise scale
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
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
                              <FormLabel className="text-base font-medium flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Expected Timeline *
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12 w-full">
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-week" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Zap className="w-4 h-4 text-red-500" />
                                      <div>
                                        <div className="font-medium">
                                          1 week
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Sprint project
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem
                                    value="2-4-weeks"
                                    className="py-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Clock className="w-4 h-4 text-orange-500" />
                                      <div>
                                        <div className="font-medium">
                                          2-4 weeks
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Quick delivery
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem
                                    value="1-3-months"
                                    className="py-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Calendar className="w-4 h-4 text-yellow-500" />
                                      <div>
                                        <div className="font-medium">
                                          1-3 months
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Standard project
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem
                                    value="3-6-months"
                                    className="py-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Calendar className="w-4 h-4 text-blue-500" />
                                      <div>
                                        <div className="font-medium">
                                          3-6 months
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Extended project
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem
                                    value="6-12-months"
                                    className="py-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <TrendingUp className="w-4 h-4 text-green-500" />
                                      <div>
                                        <div className="font-medium">
                                          6-12 months
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Major initiative
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="1-year+" className="py-3">
                                    <div className="flex items-center gap-3">
                                      <Building2 className="w-4 h-4 text-purple-500" />
                                      <div>
                                        <div className="font-medium">
                                          1 year+
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                          Long-term project
                                        </div>
                                      </div>
                                    </div>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Technologies & Keywords */}
              {currentStep === 4 && (
                <Card className="border-0 shadow-none">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
                        <Code className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Technologies & Keywords
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Tech stack and relevant keywords for AI assistance
                      </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-10">
                      <FormField
                        control={form.control}
                        name="technologies"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium flex items-center gap-2">
                              <Code className="w-4 h-4" />
                              Technologies *
                            </FormLabel>
                            <FormControl>
                              <MultiSelectField
                                value={field.value}
                                onChange={field.onChange}
                                options={technologyOptions}
                                placeholder="Start typing to search technologies (React, Node.js, Python, Docker...)..."
                                maxItems={15}
                              />
                            </FormControl>
                            <FormDescription className="text-sm">
                              Select or add technologies, frameworks, languages,
                              and tools you're using or planning to use
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="border-t pt-8">
                        <FormField
                          control={form.control}
                          name="keywords"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Keywords *
                              </FormLabel>
                              <FormControl>
                                <MultiSelectField
                                  value={field.value}
                                  onChange={field.onChange}
                                  options={suggestedKeywords}
                                  placeholder="Add relevant keywords (authentication, dashboard, api, mobile...)..."
                                  maxItems={10}
                                />
                              </FormControl>
                              <FormDescription className="text-sm">
                                Add keywords that describe your project's
                                features, functionality, goals, or domain
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Tech Stack Preview */}
                      {form.watch("technologies").length > 0 && (
                        <div className="bg-muted/30 rounded-xl p-6 border">
                          <h4 className="font-medium text-sm text-muted-foreground mb-3 flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            Your Tech Stack Preview
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {form.watch("technologies").map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="bg-background"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Context & Goals */}
              {currentStep === 5 && (
                <Card className="border-0 shadow-none">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-4">
                        <Brain className="w-8 h-8 text-pink-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Goals & AI Context
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Final details to optimize AI assistance for your project
                      </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-10">
                      <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Project Goals *
                            </FormLabel>
                            <FormControl>
                              <MultiSelectField
                                value={field.value}
                                onChange={field.onChange}
                                options={[
                                  "Increase revenue",
                                  "Improve efficiency",
                                  "Learn new skills",
                                  "Build MVP",
                                  "Scale existing solution",
                                  "Automate processes",
                                  "Improve user experience",
                                  "Reduce costs",
                                  "Market expansion",
                                  "Technical proof of concept",
                                  "Research and development",
                                ]}
                                placeholder="Select your primary project goals..."
                                maxItems={5}
                              />
                            </FormControl>
                            <FormDescription className="text-sm">
                              What are you trying to achieve with this project?
                              Select up to 5 main goals.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="border-t pt-8">
                        <FormField
                          control={form.control}
                          name="challenges"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Expected Challenges (Optional)
                              </FormLabel>
                              <FormControl>
                                <MultiSelectField
                                  value={field.value || []}
                                  onChange={field.onChange}
                                  options={[
                                    "Limited budget",
                                    "Tight timeline",
                                    "Technical complexity",
                                    "Team coordination",
                                    "User adoption",
                                    "Scalability",
                                    "Security concerns",
                                    "Performance optimization",
                                    "Data migration",
                                    "Integration challenges",
                                    "Compliance requirements",
                                  ]}
                                  placeholder="What challenges do you anticipate?"
                                  maxItems={5}
                                />
                              </FormControl>
                              <FormDescription className="text-sm">
                                Help AI provide better solutions by mentioning
                                potential challenges you might face.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="border-t pt-8">
                        <FormField
                          control={form.control}
                          name="context"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-medium flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Additional Context (Optional)
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any additional information that might help AI understand your project better... 

For example:
- Specific requirements or constraints
- Existing systems to integrate with  
- Compliance or regulatory needs
- User personas or use cases
- Business logic or rules
- Performance requirements"
                                  className="min-h-[140px] text-base leading-relaxed"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription className="text-sm">
                                Provide any other relevant context, constraints,
                                or specific requirements that will help AI
                                assist you better.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Project Summary Preview */}
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                        <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                          <Rocket className="w-5 h-5" />
                          Project Summary
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <div className="text-muted-foreground font-medium min-w-20">
                              Name:
                            </div>
                            <div className="font-medium">
                              {form.watch("name") || "Not specified"}
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="text-muted-foreground font-medium min-w-20">
                              Type:
                            </div>
                            <div className="flex items-center gap-2">
                              {form.watch("type") &&
                                projectTypeIcons[form.watch("type")]}
                              <span className="capitalize">
                                {form.watch("type")?.replace("-", " ") ||
                                  "Not selected"}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="text-muted-foreground font-medium min-w-20">
                              Team:
                            </div>
                            <div className="capitalize">
                              {form.watch("teamSize") || "Not specified"}
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="text-muted-foreground font-medium min-w-20">
                              Timeline:
                            </div>
                            <div className="capitalize">
                              {form.watch("timeline") || "Not specified"}
                            </div>
                          </div>
                          {form.watch("goals").length > 0 && (
                            <div className="flex items-start gap-3">
                              <div className="text-muted-foreground font-medium min-w-20">
                                Goals:
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {form
                                  .watch("goals")
                                  .slice(0, 3)
                                  .map((goal, idx) => (
                                    <Badge
                                      key={idx}
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      {goal}
                                    </Badge>
                                  ))}
                                {form.watch("goals").length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{form.watch("goals").length - 3} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Enhanced Navigation Buttons */}
              <div className="sticky bottom-0 bg-background border-t p-6 md:p-8 mt-8">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="gap-2 h-12 px-8 text-base font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium">
                      Step {currentStep} of {steps.length}
                    </span>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>

                  {currentStep === steps.length ? (
                    <Button
                      type="submit"
                      className="gap-2 h-12 px-8 text-base font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                    >
                      <Check className="w-4 h-4" />
                      Create Project
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="gap-2 h-12 px-8 text-base font-medium"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
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
