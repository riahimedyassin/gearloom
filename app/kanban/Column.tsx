'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { TaskDropZone } from "./TaskDropZone";
import { Column as ColumnType, DragItem, NewTaskForm, Task } from './types';

interface ColumnProps {
  column: ColumnType;
  onTaskMove: (taskId: number, newColumnId: number, newOrder?: number) => void;
  onTaskClick: (task: Task) => void;
  onCreateTask: (columnId: number, taskData: NewTaskForm) => void;
}

export const ColumnComponent: React.FC<ColumnProps> = ({ column, onTaskMove, onTaskClick, onCreateTask }) => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isEditingColumnName, setIsEditingColumnName] = useState(false);
  const [editedColumnName, setEditedColumnName] = useState(column.name);

  // Drop zone for the entire column (for empty areas and top position)
  const [{ isOver, canDrop }, drop] = useDrop<DragItem, void, { isOver: boolean; canDrop: boolean }>({
    accept: 'TASK',
    drop: (item) => {
      // Handle drop at the beginning of the list when there are tasks
      if (item.columnId !== column.id) {
        onTaskMove(item.id, column.id, 0);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  });

  // Separate drop zone for the top position
  const [{ isOverTop }, dropTop] = useDrop<DragItem, void, { isOverTop: boolean }>({
    accept: 'TASK',
    drop: (item) => {
      if (item.id !== column.tasks[0]?.id) {
        onTaskMove(item.id, column.id, 0);
      }
    },
    collect: (monitor) => ({
      isOverTop: monitor.isOver(),
    }),
  });

  const handleCreateTask = () => {
    if (newTaskTitle.trim()) {
      onCreateTask(column.id, {
        title: newTaskTitle.trim(),
        description: '',
        priority: 'medium'
      });
      setNewTaskTitle('');
      setIsCreatingTask(false);
    }
  };

  const handleCancelCreateTask = () => {
    setNewTaskTitle('');
    setIsCreatingTask(false);
  };

  return (
    <Card 
      ref={drop as any}
      className={`w-80 flex-shrink-0 transition-all duration-300 bg-white/80 backdrop-blur-sm border-slate-200 ${
        isOver && canDrop 
          ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-200 shadow-xl scale-[1.02]' 
          : 'shadow-sm hover:shadow-lg hover:bg-white/90'
      }`}
    >
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          {isEditingColumnName ? (
            <Input
              type="text"
              value={editedColumnName}
              onChange={(e) => setEditedColumnName(e.target.value)}
              onBlur={() => setIsEditingColumnName(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setIsEditingColumnName(false);
                  // Here you would call an onUpdateColumn prop if you had one
                } else if (e.key === 'Escape') {
                  setEditedColumnName(column.name);
                  setIsEditingColumnName(false);
                }
              }}
              className="text-lg font-semibold border-none p-0 h-auto focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          ) : (
            <h3 
              className="text-lg font-semibold text-slate-900 cursor-pointer hover:text-blue-600 transition-colors flex-1"
              onClick={() => setIsEditingColumnName(true)}
            >
              {column.name}
            </h3>
          )}
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
              {column.tasks.length}
            </Badge>
            <Button
              onClick={() => setIsCreatingTask(true)}
              size="sm"
              variant="ghost"
              className="w-8 h-8 p-0 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700"
              title="Add new task"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 max-h-96 overflow-y-auto">
        {column.tasks.length === 0 ? (
          <div className="text-center text-slate-400 py-8 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50/50">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                <Plus className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-sm font-medium">No tasks yet</p>
              <p className="text-xs text-slate-400">Drop tasks here or click + to add</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {/* Drop zone at the very top */}
            <div
              ref={dropTop as any}
              className={`h-2 transition-all duration-200 rounded-md ${
                isOverTop ? 'bg-blue-400 h-4' : 'hover:bg-slate-100'
              }`}
            >
              {isOverTop && (
                <div className="text-xs text-blue-600 text-center font-medium animate-pulse">
                  Drop at top
                </div>
              )}
            </div>
            
            {column.tasks
              .sort((a, b) => a.order - b.order)
              .map((task, index) => (
                <TaskDropZone
                  key={task.id}
                  task={task}
                  index={index}
                  columnId={column.id}
                  onTaskMove={onTaskMove}
                  onTaskClick={onTaskClick}
                />
              ))}
          </div>
        )}
        
        {/* Inline Task Creation */}
        {isCreatingTask && (
          <Card className="mt-2 border-slate-200 bg-white shadow-sm">
            <CardContent className="p-3">
              <Input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Enter task title..."
                className="mb-3 focus:ring-2 focus:ring-blue-500 transition-all"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCreateTask();
                  } else if (e.key === 'Escape') {
                    handleCancelCreateTask();
                  }
                }}
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleCreateTask}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add Task
                </Button>
                <Button
                  onClick={handleCancelCreateTask}
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-slate-800"
                >
                  <X className="w-3 h-3 mr-1" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default ColumnComponent;