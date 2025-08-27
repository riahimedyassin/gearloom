'use client';

import React, { useState } from 'react';
import { Task } from './types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Clock, CheckCircle2, User } from 'lucide-react';

interface TaskModalProps {
  task: Task;
  onClose: () => void;
  onUpdate: (task: Task) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onUpdate }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onUpdate(editedTask);
    onClose();
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return AlertCircle;
      case 'medium': return Clock;
      case 'low': return CheckCircle2;
      default: return Clock;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-amber-600';
      case 'low': return 'text-emerald-600';
      default: return 'text-slate-600';
    }
  };

  const PriorityIcon = getPriorityIcon(editedTask.priority);

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600" />
            </div>
            Edit Task
          </DialogTitle>
          <DialogDescription>
            Make changes to your task. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
              className="focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title..."
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
              className="focus:ring-2 focus:ring-blue-500 min-h-[80px]"
              placeholder="Enter task description..."
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="priority" className="text-sm font-medium">
              Priority
            </Label>
            <Select 
              value={editedTask.priority} 
              onValueChange={(value: 'low' | 'medium' | 'high') => 
                setEditedTask({ ...editedTask, priority: value })
              }
            >
              <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <PriorityIcon className={`w-4 h-4 ${getPriorityColor(editedTask.priority)}`} />
                    <span className="capitalize">{editedTask.priority}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Low</span>
                  </div>
                </SelectItem>
                <SelectItem value="medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Medium</span>
                  </div>
                </SelectItem>
                <SelectItem value="high">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>High</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Assigned To</Label>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 text-sm font-semibold">
                  {editedTask.assignedTo.firstname[0]}{editedTask.assignedTo.lastname[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">
                  {editedTask.assignedTo.firstname} {editedTask.assignedTo.lastname}
                </p>
                <p className="text-xs text-slate-500">{editedTask.assignedTo.email}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                Assignee
              </Badge>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;