"use client";

import { useState } from "react";
import Board from "./Board";
import { Column, NewColumnForm, NewTaskForm, Task } from "./types";

// Mock data - replace with actual data from your API
const mockColumns: Column[] = [
  {
    id: 1,
    name: "To Do",
    isDone: false,
    tasks: [
      {
        id: 1,
        title: "Design Database Schema",
        description: "Create the initial database schema for the project",
        priority: "high",
        order: 0,
        createdAt: "2024-01-01",
        columnId: 1,
        projectId: 1,
        assignedTo: {
          id: 1,
          firstname: "John",
          lastname: "Doe",
          email: "john@example.com",
        },
        subtasks: [
          { id: 1, title: "Research database options", done: true },
          { id: 2, title: "Create entity diagrams", done: false },
          { id: 3, title: "Review with team", done: false },
        ],
        comments: [
          {
            id: 1,
            author: { id: 1, firstname: "John", lastname: "Doe", email: "john@example.com" },
            content: "Starting with PostgreSQL for this project",
            createdAt: "2024-01-01T10:00:00Z",
          },
        ],
      },
      {
        id: 4,
        title: "Setup Development Environment",
        description: "Configure the development environment and tools",
        priority: "medium",
        order: 1,
        createdAt: "2024-01-01",
        columnId: 1,
        projectId: 1,
        assignedTo: {
          id: 1,
          firstname: "John",
          lastname: "Doe",
          email: "john@example.com",
        },
        subtasks: [],
        comments: [],
      },
    ],
  },
  {
    id: 2,
    name: "In Progress",
    isDone: false,
    tasks: [
      {
        id: 2,
        title: "Implement Authentication",
        description: "Set up user authentication system",
        priority: "medium",
        order: 0,
        createdAt: "2024-01-02",
        columnId: 2,
        projectId: 1,
        assignedTo: {
          id: 2,
          firstname: "Jane",
          lastname: "Smith",
          email: "jane@example.com",
        },
        subtasks: [
          { id: 4, title: "Setup JWT tokens", done: true },
          { id: 5, title: "Create login page", done: false },
        ],
        comments: [
          {
            id: 2,
            author: { id: 2, firstname: "Jane", lastname: "Smith", email: "jane@example.com" },
            content: "Working on the JWT implementation",
            createdAt: "2024-01-02T14:30:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Done",
    isDone: true,
    tasks: [
      {
        id: 3,
        title: "Project Setup",
        description: "Initialize the project repository and basic structure",
        priority: "low",
        order: 0,
        createdAt: "2024-01-01",
        columnId: 3,
        projectId: 1,
        assignedTo: {
          id: 1,
          firstname: "John",
          lastname: "Doe",
          email: "john@example.com",
        },
        subtasks: [
          { id: 6, title: "Initialize git repository", done: true },
          { id: 7, title: "Setup package.json", done: true },
          { id: 8, title: "Configure build tools", done: true },
        ],
        comments: [],
      },
    ],
  },
];

export default function KanbanPage() {
  const [columns, setColumns] = useState<Column[]>(mockColumns);
  const [nextTaskId, setNextTaskId] = useState(5); // Start from 5 since we have 4 mock tasks
  const [nextColumnId, setNextColumnId] = useState(4); // Start from 4 since we have 3 mock columns

  const handleTaskMove = (
    taskId: number,
    newColumnId: number,
    newOrder?: number
  ) => {
    setColumns((prevColumns) => {
      // Create a copy of columns and remove the task being moved
      const newColumns = prevColumns.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskId),
      }));

      // Find the task that's being moved
      const taskToMove = prevColumns
        .flatMap((column) => column.tasks)
        .find((task) => task.id === taskId);

      if (taskToMove) {
        const targetColumn = newColumns.find(
          (column) => column.id === newColumnId
        );
        if (targetColumn) {
          // Insert the task at the specified position
          const insertPosition =
            newOrder !== undefined ? newOrder : targetColumn.tasks.length;

          // Create the updated task with new column
          const updatedTask = {
            ...taskToMove,
            columnId: newColumnId,
            order: insertPosition,
          };

          // Insert task at the specific position
          targetColumn.tasks.splice(insertPosition, 0, updatedTask);

          // Reorder all tasks in the target column to have sequential order numbers
          targetColumn.tasks.forEach((task, index) => {
            task.order = index;
          });
        }
      }

      return newColumns;
    });
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      }))
    );
  };

  const handleCreateTask = (columnId: number, taskData: NewTaskForm) => {
    const newTask: Task = {
      id: nextTaskId,
      title: taskData.title,
      description: taskData.description,
      priority: taskData.priority,
      order: 0, // Will be set to correct order in the column
      createdAt: new Date().toISOString(),
      columnId: columnId,
      projectId: 1, // Default project ID
      assignedTo: {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
      }, // Default assignee
      subtasks: [],
      comments: [],
    };

    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === columnId) {
          const newTasks = [...column.tasks, newTask];
          // Update order for all tasks
          newTasks.forEach((task, index) => {
            task.order = index;
          });
          return { ...column, tasks: newTasks };
        }
        return column;
      })
    );

    setNextTaskId((prev) => prev + 1);
  };

  const handleCreateColumn = (columnData: NewColumnForm) => {
    const newColumn: Column = {
      id: nextColumnId,
      name: columnData.name,
      isDone: false,
      tasks: [],
    };

    setColumns((prevColumns) => [...prevColumns, newColumn]);
    setNextColumnId((prev) => prev + 1);
  };

  return (
    <Board
      columns={columns}
      onTaskMove={handleTaskMove}
      onTaskUpdate={handleTaskUpdate}
      onCreateTask={handleCreateTask}
      onCreateColumn={handleCreateColumn}
    />
  );
}
