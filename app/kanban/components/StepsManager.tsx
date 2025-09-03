"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Edit,
  ExternalLink,
  File,
  Link,
  ListOrdered,
  Plus,
  Save,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Step, Task } from "../types";

interface StepsManagerProps {
  task: Task;
  onTaskUpdate: (updatedTask: Task) => void;
}

export const StepsManager: React.FC<StepsManagerProps> = ({
  task,
  onTaskUpdate,
}) => {
  const [isAddingStep, setIsAddingStep] = useState(false);
  const [editingStepId, setEditingStepId] = useState<number | null>(null);
  const [newStep, setNewStep] = useState({
    title: "",
    description: "",
    linkedResourceIds: [] as number[],
  });
  const [editingStep, setEditingStep] = useState({
    title: "",
    description: "",
    linkedResourceIds: [] as number[],
  });

  const handleAddStep = () => {
    if (newStep.title.trim()) {
      const step: Step = {
        id: Date.now(),
        order: (task.steps?.length || 0) + 1,
        title: newStep.title.trim(),
        description: newStep.description.trim() || undefined,
        completed: false,
        linkedResourceIds:
          newStep.linkedResourceIds.length > 0
            ? newStep.linkedResourceIds
            : undefined,
      };

      onTaskUpdate({
        ...task,
        steps: [...(task.steps || []), step],
      });

      setNewStep({ title: "", description: "", linkedResourceIds: [] });
      setIsAddingStep(false);
    }
  };

  const handleDeleteStep = (stepId: number) => {
    const updatedSteps = task.steps?.filter((s) => s.id !== stepId) || [];
    // Reorder remaining steps
    const reorderedSteps = updatedSteps.map((step, index) => ({
      ...step,
      order: index + 1,
    }));

    onTaskUpdate({
      ...task,
      steps: reorderedSteps,
    });
  };

  const handleToggleStep = (stepId: number, completed: boolean) => {
    const updatedSteps = task.steps?.map((step) =>
      step.id === stepId ? { ...step, completed } : step
    );

    onTaskUpdate({
      ...task,
      steps: updatedSteps,
    });
  };

  const handleMoveStep = (stepId: number, direction: "up" | "down") => {
    if (!task.steps) return;

    const currentIndex = task.steps.findIndex((s) => s.id === stepId);
    if (currentIndex === -1) return;

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= task.steps.length) return;

    const updatedSteps = [...task.steps];
    [updatedSteps[currentIndex], updatedSteps[newIndex]] = [
      updatedSteps[newIndex],
      updatedSteps[currentIndex],
    ];

    // Update order numbers
    const reorderedSteps = updatedSteps.map((step, index) => ({
      ...step,
      order: index + 1,
    }));

    onTaskUpdate({
      ...task,
      steps: reorderedSteps,
    });
  };

  const handleLinkResource = (stepId: number, resourceId: number) => {
    const updatedSteps = task.steps?.map((step) => {
      if (step.id === stepId) {
        const currentLinkedIds = step.linkedResourceIds || [];
        if (currentLinkedIds.includes(resourceId)) {
          // Unlink resource
          return {
            ...step,
            linkedResourceIds: currentLinkedIds.filter(
              (id) => id !== resourceId
            ),
          };
        } else {
          // Link resource
          return {
            ...step,
            linkedResourceIds: [...currentLinkedIds, resourceId],
          };
        }
      }
      return step;
    });

    onTaskUpdate({
      ...task,
      steps: updatedSteps,
    });
  };

  const getLinkedResources = (stepId: number) => {
    const step = task.steps?.find((s) => s.id === stepId);
    if (!step?.linkedResourceIds || !task.attachments) return [];

    return task.attachments.filter((attachment) =>
      step.linkedResourceIds?.includes(attachment.id)
    );
  };

  const handleToggleNewStepResource = (resourceId: number) => {
    const currentIds = newStep.linkedResourceIds;
    if (currentIds.includes(resourceId)) {
      setNewStep({
        ...newStep,
        linkedResourceIds: currentIds.filter((id) => id !== resourceId),
      });
    } else {
      setNewStep({
        ...newStep,
        linkedResourceIds: [...currentIds, resourceId],
      });
    }
  };

  const handleStartEditing = (step: Step) => {
    setEditingStepId(step.id);
    setEditingStep({
      title: step.title,
      description: step.description || "",
      linkedResourceIds: step.linkedResourceIds || [],
    });
  };

  const handleSaveEdit = () => {
    if (editingStep.title.trim() && editingStepId) {
      const updatedSteps = task.steps?.map((step) =>
        step.id === editingStepId
          ? {
              ...step,
              title: editingStep.title.trim(),
              description: editingStep.description.trim() || undefined,
              linkedResourceIds:
                editingStep.linkedResourceIds.length > 0
                  ? editingStep.linkedResourceIds
                  : undefined,
            }
          : step
      );

      onTaskUpdate({
        ...task,
        steps: updatedSteps,
      });

      setEditingStepId(null);
      setEditingStep({ title: "", description: "", linkedResourceIds: [] });
    }
  };

  const handleCancelEdit = () => {
    setEditingStepId(null);
    setEditingStep({ title: "", description: "", linkedResourceIds: [] });
  };

  const handleToggleEditingStepResource = (resourceId: number) => {
    const currentIds = editingStep.linkedResourceIds;
    if (currentIds.includes(resourceId)) {
      setEditingStep({
        ...editingStep,
        linkedResourceIds: currentIds.filter((id) => id !== resourceId),
      });
    } else {
      setEditingStep({
        ...editingStep,
        linkedResourceIds: [...currentIds, resourceId],
      });
    }
  };

  const handleResourceBadgeClick = (resourceId: number) => {
    const resource = task.attachments?.find((a) => a.id === resourceId);
    if (resource?.url) {
      window.open(resource.url, "_blank");
    }
    // For files, we could implement a download or view functionality here
    // For now, we'll just log it or show a message
    else if (resource?.fileName) {
      // In a real app, you'd handle file viewing/downloading here
      console.log("File resource clicked:", resource.fileName);
    }
  };

  const sortedSteps = task.steps?.sort((a, b) => a.order - b.order) || [];
  const completedSteps = sortedSteps.filter((s) => s.completed).length;

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <ListOrdered className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-slate-900">Steps</h3>
            <Badge variant="secondary" className="text-xs">
              {completedSteps}/{task.steps?.length || 0}
            </Badge>
          </div>
          <Button
            onClick={() => setIsAddingStep(true)}
            size="sm"
            variant="outline"
            className="gap-2"
            disabled={isAddingStep || editingStepId !== null}
          >
            <Plus className="w-4 h-4" />
            {editingStepId ? "Editing..." : "Add Step"}
          </Button>
        </div>
        {task.steps && task.steps.length > 0 && (
          <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(completedSteps / task.steps.length) * 100}%`,
              }}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="space-y-3">
          {sortedSteps.length > 0 ? (
            sortedSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-start gap-4 p-4 rounded-lg border group hover:bg-slate-100 transition-colors ${
                  step.completed
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    checked={step.completed}
                    onChange={(e) =>
                      handleToggleStep(step.id, e.target.checked)
                    }
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span className="text-sm font-medium text-slate-500 min-w-[20px]">
                    {step.order}.
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  {editingStepId === step.id ? (
                    // Editing mode
                    <div className="space-y-3">
                      <div>
                        <Label
                          htmlFor={`edit-step-title-${step.id}`}
                          className="text-sm font-medium"
                        >
                          Step Title *
                        </Label>
                        <Input
                          id={`edit-step-title-${step.id}`}
                          value={editingStep.title}
                          onChange={(e) =>
                            setEditingStep({
                              ...editingStep,
                              title: e.target.value,
                            })
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && editingStep.title.trim()) {
                              handleSaveEdit();
                            } else if (e.key === "Escape") {
                              handleCancelEdit();
                            }
                          }}
                          placeholder="What needs to be done..."
                          className="text-sm mt-1"
                          autoFocus
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor={`edit-step-description-${step.id}`}
                          className="text-sm font-medium"
                        >
                          Description
                        </Label>
                        <Textarea
                          id={`edit-step-description-${step.id}`}
                          value={editingStep.description}
                          onChange={(e) =>
                            setEditingStep({
                              ...editingStep,
                              description: e.target.value,
                            })
                          }
                          placeholder="Add more details (optional)..."
                          className="text-sm mt-1 min-h-[80px] resize-none"
                        />
                      </div>

                      {/* Resource linking for editing step */}
                      {task.attachments && task.attachments.length > 0 && (
                        <div>
                          <Label className="text-sm font-medium mb-2 block">
                            Link Resources
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            {task.attachments.map((resource) => (
                              <Badge
                                key={resource.id}
                                variant={
                                  editingStep.linkedResourceIds.includes(
                                    resource.id
                                  )
                                    ? "default"
                                    : "outline"
                                }
                                className="text-xs px-2 py-1 cursor-pointer hover:bg-blue-100 transition-colors"
                                onClick={() =>
                                  handleToggleEditingStepResource(resource.id)
                                }
                              >
                                {resource.file ? (
                                  <File className="w-3 h-3 mr-1" />
                                ) : (
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                )}
                                {resource.title}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2 pt-2">
                        <Button
                          onClick={handleSaveEdit}
                          size="sm"
                          className="gap-1"
                        >
                          <Save className="w-3 h-3" />
                          Save
                        </Button>
                        <Button
                          onClick={handleCancelEdit}
                          size="sm"
                          variant="outline"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // Display mode
                    <>
                      <h4
                        className={`text-sm font-medium ${
                          step.completed
                            ? "line-through text-slate-400"
                            : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </h4>
                      {step.description && (
                        <p
                          className={`text-sm mt-1 leading-relaxed ${
                            step.completed
                              ? "line-through text-slate-400"
                              : "text-slate-600"
                          }`}
                        >
                          {step.description}
                        </p>
                      )}

                      {/* Linked resources */}
                      {getLinkedResources(step.id).length > 0 && (
                        <div className="flex items-center gap-1 mt-2 flex-wrap">
                          {getLinkedResources(step.id).map((resource) => (
                            <Badge
                              key={resource.id}
                              variant="outline"
                              className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors"
                              onClick={() =>
                                handleResourceBadgeClick(resource.id)
                              }
                            >
                              {resource.file ? (
                                <File className="w-3 h-3 mr-1" />
                              ) : (
                                <ExternalLink className="w-3 h-3 mr-1" />
                              )}
                              {resource.title}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  {editingStepId !== step.id && (
                    <>
                      {/* Link resource popover */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-slate-500 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Link className="w-4 h-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-0" align="end">
                          <Command>
                            <CommandInput placeholder="Search resources..." />
                            <CommandEmpty>No resources found.</CommandEmpty>
                            <CommandGroup heading="Available Resources">
                              {task.attachments &&
                              task.attachments.length > 0 ? (
                                task.attachments.map((resource) => {
                                  const isLinked =
                                    step.linkedResourceIds?.includes(
                                      resource.id
                                    ) || false;
                                  return (
                                    <CommandItem
                                      key={resource.id}
                                      onSelect={() =>
                                        handleLinkResource(step.id, resource.id)
                                      }
                                      className="flex items-center gap-2 cursor-pointer"
                                    >
                                      <div className="flex items-center gap-2 flex-1">
                                        {resource.file ? (
                                          <File className="w-4 h-4 text-gray-500" />
                                        ) : (
                                          <ExternalLink className="w-4 h-4 text-gray-500" />
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {resource.title}
                                          </div>
                                          {resource.description && (
                                            <div className="text-xs text-gray-500 truncate">
                                              {resource.description}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      {isLinked && (
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                      )}
                                    </CommandItem>
                                  );
                                })
                              ) : (
                                <div className="p-4 text-sm text-center text-gray-500">
                                  No resources available. Add some resources
                                  first.
                                </div>
                              )}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <Button
                          onClick={() => handleStartEditing(step)}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleMoveStep(step.id, "up")}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-slate-500 hover:text-slate-700"
                          disabled={index === 0}
                        >
                          <ChevronUp className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleMoveStep(step.id, "down")}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-slate-500 hover:text-slate-700"
                          disabled={index === sortedSteps.length - 1}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteStep(step.id)}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-400">
              <ListOrdered className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No steps defined</p>
              <p className="text-xs">
                Break down this task into actionable steps
              </p>
            </div>
          )}

          {isAddingStep && (
            <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="step-title" className="text-sm font-medium">
                  Step {(task.steps?.length || 0) + 1}: Title *
                </Label>
                <Input
                  id="step-title"
                  value={newStep.title}
                  onChange={(e) =>
                    setNewStep({ ...newStep, title: e.target.value })
                  }
                  placeholder="What needs to be done..."
                  className="text-sm border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400"
                  autoFocus
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="step-description"
                  className="text-sm font-medium"
                >
                  Description (optional)
                </Label>
                <Textarea
                  id="step-description"
                  value={newStep.description}
                  onChange={(e) =>
                    setNewStep({ ...newStep, description: e.target.value })
                  }
                  placeholder="Additional details about this step..."
                  className="text-sm border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400 min-h-[60px] resize-none"
                />
              </div>

              {/* Resource selection */}
              {task.attachments && task.attachments.length > 0 && (
                <div className="grid gap-2">
                  <Label className="text-sm font-medium">
                    Link Resources (optional)
                  </Label>
                  <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                    {task.attachments.map((resource) => {
                      const isSelected = newStep.linkedResourceIds.includes(
                        resource.id
                      );
                      return (
                        <div
                          key={resource.id}
                          className={`flex items-center gap-2 p-2 rounded border cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-blue-50 border-blue-200"
                              : "bg-white border-gray-200 hover:bg-gray-50"
                          }`}
                          onClick={() =>
                            handleToggleNewStepResource(resource.id)
                          }
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() =>
                              handleToggleNewStepResource(resource.id)
                            }
                            className="accent-indigo-600"
                          />
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            {resource.file ? (
                              <File className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">
                                {resource.title}
                              </div>
                              {resource.description && (
                                <div className="text-xs text-gray-500 truncate">
                                  {resource.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleAddStep}
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Step
                </Button>
                <Button
                  onClick={() => {
                    setIsAddingStep(false);
                    setNewStep({
                      title: "",
                      description: "",
                      linkedResourceIds: [],
                    });
                  }}
                  size="sm"
                  variant="ghost"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StepsManager;
