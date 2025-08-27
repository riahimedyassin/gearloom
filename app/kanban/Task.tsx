'use client';

import React from 'react';
import { useDrag } from 'react-dnd';
import { Task as TaskType } from './types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

interface TaskProps {
  task: TaskType;
  onClick: () => void;
}

export const TaskComponent: React.FC<TaskProps> = ({ task, onClick }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'TASK',
    item: { 
      type: 'TASK', 
      id: task.id, 
      columnId: task.columnId,
      title: task.title,
      description: task.description,
      priority: task.priority,
      assignedTo: task.assignedTo
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-gradient-to-r from-red-50 to-white';
      case 'medium': return 'border-l-amber-500 bg-gradient-to-r from-amber-50 to-white';
      case 'low': return 'border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-white';
      default: return 'border-l-slate-500 bg-gradient-to-r from-slate-50 to-white';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': 
        return { 
          variant: 'destructive' as const, 
          icon: AlertCircle, 
          className: 'bg-red-100 text-red-700 hover:bg-red-200' 
        };
      case 'medium': 
        return { 
          variant: 'default' as const, 
          icon: Clock, 
          className: 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
        };
      case 'low': 
        return { 
          variant: 'secondary' as const, 
          icon: CheckCircle2, 
          className: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
        };
      default: 
        return { 
          variant: 'outline' as const, 
          icon: Clock, 
          className: 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
        };
    }
  };

  const priorityConfig = getPriorityBadge(task.priority);
  const PriorityIcon = priorityConfig.icon;

  return (
    <Card
      ref={drag as any}
      onClick={onClick}
      style={{ opacity: isDragging ? 0.4 : 1 }}
      className={`cursor-grab active:cursor-grabbing border-l-4 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] group ${
        getPriorityColor(task.priority)
      } ${
        isDragging 
          ? 'shadow-xl rotate-1 scale-105 border-blue-300 ring-2 ring-blue-200' 
          : 'shadow-sm hover:shadow-md border-slate-200'
      }`}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-slate-700 transition-colors leading-tight">
              {task.title}
            </h4>
            <Badge 
              variant={priorityConfig.variant} 
              className={`ml-2 flex items-center gap-1 text-xs ${priorityConfig.className}`}
            >
              <PriorityIcon className="w-3 h-3" />
              {task.priority.toUpperCase()}
            </Badge>
          </div>
          
          {task.description && (
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {task.description}
            </p>
          )}
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <span className="text-xs text-slate-500 font-medium">
                Task #{task.id}
              </span>
            </div>
            
            <Avatar className="w-7 h-7 border-2 border-white shadow-sm">
              <AvatarFallback className="text-xs font-semibold bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700">
                {task.assignedTo.firstname[0]}{task.assignedTo.lastname[0]}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskComponent;