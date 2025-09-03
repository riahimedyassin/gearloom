"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Archive,
  Code,
  ExternalLink,
  File,
  FileAudio,
  FileImage,
  FileText,
  FileVideo,
  Globe,
  Link,
  Plus,
  Upload,
  X,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { Attachment, Task } from "../types";

// Resource type detection functions
const detectResourceTypeFromFile = (file: File): Attachment["resourceType"] => {
  const mimeType = file.type.toLowerCase();
  const extension = file.name.split(".").pop()?.toLowerCase() || "";

  // Images
  if (
    mimeType.startsWith("image/") ||
    ["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(extension)
  ) {
    return "image";
  }

  // Videos
  if (
    mimeType.startsWith("video/") ||
    ["mp4", "webm", "ogg", "avi", "mov", "mkv"].includes(extension)
  ) {
    return "video";
  }

  // Audio
  if (
    mimeType.startsWith("audio/") ||
    ["mp3", "wav", "ogg", "flac", "m4a"].includes(extension)
  ) {
    return "audio";
  }

  // Documents
  if (
    ["pdf", "doc", "docx", "txt", "rtf", "odt"].includes(extension) ||
    mimeType.includes("pdf") ||
    mimeType.includes("document")
  ) {
    return "document";
  }

  // Archives
  if (
    ["zip", "rar", "7z", "tar", "gz"].includes(extension) ||
    mimeType.includes("zip") ||
    mimeType.includes("compress")
  ) {
    return "archive";
  }

  // Code files
  if (
    [
      "js",
      "ts",
      "jsx",
      "tsx",
      "html",
      "css",
      "scss",
      "json",
      "xml",
      "sql",
      "py",
      "java",
      "cpp",
      "c",
      "php",
      "rb",
    ].includes(extension)
  ) {
    return "code";
  }

  return "other";
};

const getResourceTypeIcon = (resourceType: Attachment["resourceType"]) => {
  switch (resourceType) {
    case "image":
      return FileImage;
    case "video":
      return FileVideo;
    case "audio":
      return FileAudio;
    case "document":
      return FileText;
    case "archive":
      return Archive;
    case "code":
      return Code;
    case "link":
      return Globe;
    default:
      return File;
  }
};

interface AttachmentsManagerProps {
  task: Task;
  onTaskUpdate: (updatedTask: Task) => void;
}

export const AttachmentsManager: React.FC<AttachmentsManagerProps> = ({
  task,
  onTaskUpdate,
}) => {
  const [isAddingAttachment, setIsAddingAttachment] = useState(false);
  const [activeTab, setActiveTab] = useState("url");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newAttachment, setNewAttachment] = useState({
    title: "",
    description: "",
    url: "",
    resourceType: "link" as Attachment["resourceType"],
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setNewAttachment({
        ...newAttachment,
        title: newAttachment.title || file.name.replace(/\.[^/.]+$/, ""), // Remove extension for title
      });
    }
  };

  const handleAddAttachment = () => {
    if (
      newAttachment.title.trim() &&
      (newAttachment.url.trim() || selectedFile)
    ) {
      let resourceType: Attachment["resourceType"];

      if (activeTab === "file" && selectedFile) {
        resourceType = detectResourceTypeFromFile(selectedFile);
      } else {
        resourceType = newAttachment.resourceType;
      }

      const attachment: Attachment = {
        id: Date.now(),
        title: newAttachment.title.trim(),
        description: newAttachment.description.trim(),
        url: activeTab === "url" ? newAttachment.url.trim() : undefined,
        file: activeTab === "file" ? selectedFile || undefined : undefined,
        fileName: selectedFile?.name,
        fileSize: selectedFile?.size,
        fileType: selectedFile?.type,
        resourceType,
        uploadedAt: new Date().toISOString(),
        uploadedBy: task.assignedTo,
      };

      onTaskUpdate({
        ...task,
        attachments: [...(task.attachments || []), attachment],
      });

      setNewAttachment({
        title: "",
        description: "",
        url: "",
        resourceType: "link",
      });
      setSelectedFile(null);
      setIsAddingAttachment(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDeleteAttachment = (attachmentId: number) => {
    onTaskUpdate({
      ...task,
      attachments: task.attachments?.filter((a) => a.id !== attachmentId) || [],
    });
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return "";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-gray-700">Resources</h3>
          <Badge variant="outline" className="text-xs">
            {task.attachments?.length || 0}
          </Badge>
        </div>
        <Button
          onClick={() => setIsAddingAttachment(true)}
          size="sm"
          variant="outline"
          className="h-7 px-3 text-xs"
        >
          <Plus className="w-3 h-3 mr-1" />
          Add
        </Button>
      </div>

      {/* Add attachment form */}
      {isAddingAttachment && (
        <Card className="border-2 border-dashed border-gray-300">
          <CardContent className="p-4">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="url" className="flex items-center gap-2">
                  <Link className="w-3 h-3" />
                  URL
                </TabsTrigger>
                <TabsTrigger value="file" className="flex items-center gap-2">
                  <Upload className="w-3 h-3" />
                  File
                </TabsTrigger>
              </TabsList>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={newAttachment.title}
                    onChange={(e) =>
                      setNewAttachment({
                        ...newAttachment,
                        title: e.target.value,
                      })
                    }
                    placeholder="Enter resource title"
                    className="mt-1"
                  />
                </div>

                <TabsContent value="url" className="mt-0">
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="url" className="text-sm font-medium">
                        URL
                      </Label>
                      <Input
                        id="url"
                        type="url"
                        value={newAttachment.url}
                        onChange={(e) =>
                          setNewAttachment({
                            ...newAttachment,
                            url: e.target.value,
                          })
                        }
                        placeholder="https://example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="resourceType"
                        className="text-sm font-medium"
                      >
                        Resource Type
                      </Label>
                      <Select
                        value={newAttachment.resourceType}
                        onValueChange={(value) =>
                          setNewAttachment({
                            ...newAttachment,
                            resourceType: value as Attachment["resourceType"],
                          })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select resource type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="link">🔗 Link</SelectItem>
                          <SelectItem value="document">📄 Document</SelectItem>
                          <SelectItem value="image">🖼️ Image</SelectItem>
                          <SelectItem value="video">🎥 Video</SelectItem>
                          <SelectItem value="audio">🎵 Audio</SelectItem>
                          <SelectItem value="code">💻 Code</SelectItem>
                          <SelectItem value="other">📋 Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="file" className="mt-0">
                  <div>
                    <Label htmlFor="file" className="text-sm font-medium">
                      File
                    </Label>
                    <div className="mt-1">
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {selectedFile ? selectedFile.name : "Choose file"}
                      </Button>
                      {selectedFile && (
                        <p className="text-xs text-gray-500 mt-1">
                          {formatFileSize(selectedFile.size)} •{" "}
                          {selectedFile.type || "Unknown type"}
                        </p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <div>
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={newAttachment.description}
                    onChange={(e) =>
                      setNewAttachment({
                        ...newAttachment,
                        description: e.target.value,
                      })
                    }
                    placeholder="Optional description"
                    className="mt-1"
                    rows={2}
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button onClick={handleAddAttachment} size="sm">
                    Add Resource
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsAddingAttachment(false);
                      setNewAttachment({
                        title: "",
                        description: "",
                        url: "",
                        resourceType: "link",
                      });
                      setSelectedFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Attachments list */}
      <div className="space-y-2">
        {task.attachments && task.attachments.length > 0 ? (
          task.attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded border hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                {React.createElement(
                  getResourceTypeIcon(attachment.resourceType),
                  { className: "w-4 h-4 text-blue-600" }
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">
                  {attachment.title}
                </h4>
                {attachment.description && (
                  <p className="text-xs text-gray-600 mt-1">
                    {attachment.description}
                  </p>
                )}
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                  <span>
                    {attachment.uploadedBy.firstname}{" "}
                    {attachment.uploadedBy.lastname}
                  </span>
                  <span>
                    {new Date(attachment.uploadedAt).toLocaleDateString()}
                  </span>
                  {attachment.fileSize && (
                    <span>{formatFileSize(attachment.fileSize)}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                {attachment.url && (
                  <Button
                    onClick={() => window.open(attachment.url, "_blank")}
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                )}
                <Button
                  onClick={() => handleDeleteAttachment(attachment.id)}
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">
            No resources added yet
          </p>
        )}
      </div>
    </div>
  );
};

export default AttachmentsManager;
