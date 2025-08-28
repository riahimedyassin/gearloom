"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send } from "lucide-react";
import React, { useState } from "react";
import { Comment, Task } from "../types";

interface CommentsManagerProps {
  task: Task;
  onTaskUpdate: (updatedTask: Task) => void;
}

export const CommentsManager: React.FC<CommentsManagerProps> = ({
  task,
  onTaskUpdate,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: task.assignedTo,
        content: newComment.trim(),
        createdAt: new Date().toISOString(),
      };
      onTaskUpdate({
        ...task,
        comments: [...(task.comments || []), comment],
      });
      setNewComment("");
    }
  };

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-slate-900">Comments</h3>
          <Badge variant="secondary" className="text-xs">
            {task.comments?.length || 0}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div className="space-y-4 mb-6">
          {task.comments && task.comments.length > 0 ? (
            task.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border hover:bg-slate-100 transition-colors"
              >
                <Avatar className="w-9 h-9">
                  <AvatarFallback className="bg-gradient-to-br from-green-100 to-green-200 text-green-700 text-sm font-semibold">
                    {comment.author.firstname[0]}
                    {comment.author.lastname[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-slate-900">
                      {comment.author.firstname} {comment.author.lastname}
                    </span>
                    <span className="text-xs text-slate-400">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-400">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No comments yet</p>
              <p className="text-xs">Start a conversation about this task</p>
            </div>
          )}
        </div>

        <div className="flex gap-3 p-4 bg-green-50 rounded-lg border">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 text-sm font-semibold">
              {task.assignedTo.firstname[0]}
              {task.assignedTo.lastname[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="Add a comment..."
              className="min-h-[80px] text-sm border-green-200 focus:border-green-400 focus:ring-green-400 resize-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleAddComment();
                }
              }}
            />
            <div className="flex justify-end">
              <Button
                onClick={handleAddComment}
                size="sm"
                disabled={!newComment.trim()}
                className="bg-green-600 hover:bg-green-700 gap-2"
              >
                <Send className="w-4 h-4" />
                Comment
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentsManager;
