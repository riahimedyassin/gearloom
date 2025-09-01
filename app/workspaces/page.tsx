"use client";

import { useState } from "react";
import Board from "../kanban/Board";
import { Column, NewColumnForm, NewTaskForm, Task } from "../kanban/types";

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
        createdBy: {
          id: 2,
          firstname: "Sarah",
          lastname: "Wilson",
          email: "sarah.wilson@example.com",
        },
        subtasks: [
          {
            id: 1,
            title: "Research database options",
            done: true,
            createdBy: {
              id: 2,
              firstname: "Sarah",
              lastname: "Wilson",
              email: "sarah.wilson@example.com",
            },
            assignedTo: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
            createdAt: "2024-01-01T08:00:00Z",
          },
          {
            id: 2,
            title: "Create entity diagrams",
            done: false,
            createdBy: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
            assignedTo: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
            createdAt: "2024-01-01T08:30:00Z",
          },
          {
            id: 3,
            title: "Review with team",
            done: false,
            createdBy: {
              id: 2,
              firstname: "Sarah",
              lastname: "Wilson",
              email: "sarah.wilson@example.com",
            },
            createdAt: "2024-01-01T09:00:00Z",
          },
        ],
        comments: [
          {
            id: 1,
            author: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
            content: "Starting with PostgreSQL for this project",
            createdAt: "2024-01-01T10:00:00Z",
          },
        ],
        attachments: [
          {
            id: 1,
            title: "Database Schema Diagram",
            description: "Visual representation of the database structure",
            url: "https://example.com/schema-diagram",
            resourceType: "image" as const,
            uploadedAt: "2024-01-01T09:00:00Z",
            uploadedBy: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
          },
          {
            id: 2,
            title: "PostgreSQL Documentation",
            description: "Official PostgreSQL documentation",
            url: "https://www.postgresql.org/docs/",
            resourceType: "link" as const,
            uploadedAt: "2024-01-01T09:30:00Z",
            uploadedBy: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
          },
          {
            id: 3,
            title: "Sample Database File",
            description: "Initial database structure file",
            fileName: "schema.sql",
            fileSize: 2048,
            fileType: "text/sql",
            resourceType: "code" as const,
            uploadedAt: "2024-01-01T10:00:00Z",
            uploadedBy: {
              id: 1,
              firstname: "John",
              lastname: "Doe",
              email: "john@example.com",
            },
          },
        ],
        steps: [
          {
            id: 1,
            order: 1,
            title: "Research database options",
            description: "Compare PostgreSQL, MySQL, and MongoDB",
            completed: true,
            linkedResourceIds: [2], // Linked to PostgreSQL Documentation
          },
          {
            id: 2,
            order: 2,
            title: "Create entity relationship diagram",
            description: "Map out all tables and relationships",
            completed: false,
            linkedResourceIds: [1], // Linked to Database Schema Diagram
          },
          {
            id: 3,
            order: 3,
            title: "Review with team",
            description: "Get feedback on the proposed structure",
            completed: false,
            linkedResourceIds: [1, 3], // Linked to both Schema Diagram and Sample Database File
          },
        ],
        pomodoroTimer: {
          id: 1,
          taskId: 1,
          totalTimeSpent: 45, // 45 minutes total
          sessions: [
            {
              id: 1,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T09:00:00Z",
              endTime: "2024-01-01T09:25:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 2,
              type: "shortBreak" as const,
              duration: 5,
              timeRemaining: 0,
              startTime: "2024-01-01T09:25:00Z",
              endTime: "2024-01-01T09:30:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 3,
              type: "work" as const,
              duration: 20,
              timeRemaining: 0,
              startTime: "2024-01-01T09:35:00Z",
              endTime: "2024-01-01T09:55:00Z",
              completed: true,
              isActive: false,
            },
          ],
          isActive: false,
          currentSessionId: undefined,
          settings: {
            workDuration: 25,
            shortBreakDuration: 5,
            longBreakDuration: 15,
            sessionsUntilLongBreak: 4,
          },
        },
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
        createdBy: {
          id: 3,
          firstname: "Mike",
          lastname: "Brown",
          email: "mike.brown@example.com",
        },
        subtasks: [],
        comments: [],
        attachments: [],
        steps: [],
        pomodoroTimer: {
          id: 4,
          taskId: 4,
          totalTimeSpent: 0,
          sessions: [],
          isActive: false,
          currentSessionId: undefined,
          settings: {
            workDuration: 25,
            shortBreakDuration: 5,
            longBreakDuration: 15,
            sessionsUntilLongBreak: 4,
          },
        },
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
        createdBy: {
          id: 2,
          firstname: "Jane",
          lastname: "Smith",
          email: "jane@example.com",
        },
        subtasks: [
          {
            id: 6,
            title: "Initialize git repository",
            done: true,
            createdBy: {
              id: 3,
              firstname: "Mike",
              lastname: "Brown",
              email: "mike.brown@example.com",
            },
            assignedTo: {
              id: 3,
              firstname: "Mike",
              lastname: "Brown",
              email: "mike.brown@example.com",
            },
            createdAt: "2024-01-01T11:00:00Z",
          },
          {
            id: 7,
            title: "Setup package.json",
            done: true,
            createdBy: {
              id: 3,
              firstname: "Mike",
              lastname: "Brown",
              email: "mike.brown@example.com",
            },
            assignedTo: {
              id: 3,
              firstname: "Mike",
              lastname: "Brown",
              email: "mike.brown@example.com",
            },
            createdAt: "2024-01-01T11:15:00Z",
          },
          {
            id: 8,
            title: "Configure build tools",
            done: true,
            createdBy: {
              id: 3,
              firstname: "Mike",
              lastname: "Brown",
              email: "mike.brown@example.com",
            },
            assignedTo: {
              id: 3,
              firstname: "Mike",
              lastname: "Brown",
              email: "mike.brown@example.com",
            },
            createdAt: "2024-01-01T11:30:00Z",
          },
        ],
        comments: [],
        attachments: [],
        steps: [],
        pomodoroTimer: {
          id: 3,
          taskId: 3,
          totalTimeSpent: 150, // 150 minutes - completed task
          sessions: [
            {
              id: 7,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T09:00:00Z",
              endTime: "2024-01-01T09:25:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 8,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T10:00:00Z",
              endTime: "2024-01-01T10:25:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 9,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T14:00:00Z",
              endTime: "2024-01-01T14:25:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 10,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T15:00:00Z",
              endTime: "2024-01-01T15:25:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 11,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T16:00:00Z",
              endTime: "2024-01-01T16:25:00Z",
              completed: true,
              isActive: false,
            },
            {
              id: 12,
              type: "work" as const,
              duration: 25,
              timeRemaining: 0,
              startTime: "2024-01-01T17:00:00Z",
              endTime: "2024-01-01T17:25:00Z",
              completed: true,
              isActive: false,
            },
          ],
          isActive: false,
          currentSessionId: undefined,
          settings: {
            workDuration: 25,
            shortBreakDuration: 5,
            longBreakDuration: 15,
            sessionsUntilLongBreak: 4,
          },
        },
      },
    ],
  },
];

export default function KanbanPage() {
  const [columns, setColumns] = useState<Column[]>(mockColumns);
  const [nextTaskId, setNextTaskId] = useState(5); // Start from 5 since we have 4 mock tasks
  const [nextColumnId, setNextColumnId] = useState(4); // Start from 4 since we have 3 mock columns
  const [activeTimerTaskId, setActiveTimerTaskId] = useState<number | null>(
    mockColumns
      .flatMap((col) => col.tasks)
      .find((task) => task.pomodoroTimer.isActive)?.id || null
  );

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
      createdBy: {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
      }, // Default creator
      subtasks: [],
      comments: [],
      attachments: [],
      steps: [],
      pomodoroTimer: {
        id: nextTaskId,
        taskId: nextTaskId,
        totalTimeSpent: 0,
        sessions: [],
        isActive: false,
        currentSessionId: undefined,
        settings: {
          workDuration: 25,
          shortBreakDuration: 5,
          longBreakDuration: 15,
          sessionsUntilLongBreak: 4,
        },
      },
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

  const handleUpdateTimer = (taskId: number, timer: Task["pomodoroTimer"]) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) =>
          task.id === taskId ? { ...task, pomodoroTimer: timer } : task
        ),
      }))
    );

    // Update active timer
    if (timer.isActive) {
      setActiveTimerTaskId(taskId);
    } else if (activeTimerTaskId === taskId) {
      setActiveTimerTaskId(null);
    }
  };

  const handleTimerClick = (task: Task) => {
    // If another timer is active, stop it first
    if (activeTimerTaskId && activeTimerTaskId !== task.id) {
      setColumns((prevColumns) =>
        prevColumns.map((column) => ({
          ...column,
          tasks: column.tasks.map((t) =>
            t.id === activeTimerTaskId
              ? {
                  ...t,
                  pomodoroTimer: {
                    ...t.pomodoroTimer,
                    isActive: false,
                    sessions: t.pomodoroTimer.sessions.map((s) =>
                      s.isActive ? { ...s, isActive: false } : s
                    ),
                  },
                }
              : t
          ),
        }))
      );
    }

    // Toggle current task timer
    const isCurrentlyActive = task.pomodoroTimer.isActive;
    if (isCurrentlyActive) {
      // Pause the timer
      const updatedTimer = {
        ...task.pomodoroTimer,
        isActive: false,
      };
      handleUpdateTimer(task.id, updatedTimer);
    } else {
      // Start a new work session or resume
      const activeSession = task.pomodoroTimer.sessions.find((s) => s.isActive);
      if (activeSession) {
        // Resume existing session
        const updatedTimer = {
          ...task.pomodoroTimer,
          isActive: true,
        };
        handleUpdateTimer(task.id, updatedTimer);
      } else {
        // Start new work session
        const newSession: Task["pomodoroTimer"]["sessions"][0] = {
          id: Date.now(),
          type: "work",
          duration: task.pomodoroTimer.settings.workDuration,
          timeRemaining: task.pomodoroTimer.settings.workDuration * 60,
          startTime: new Date().toISOString(),
          completed: false,
          isActive: true,
        };

        const updatedTimer = {
          ...task.pomodoroTimer,
          isActive: true,
          currentSessionId: newSession.id,
          sessions: [...task.pomodoroTimer.sessions, newSession],
        };
        handleUpdateTimer(task.id, updatedTimer);
      }
    }
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

  const handleTaskDelete = (taskId: number) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        tasks: column.tasks.filter((task) => task.id !== taskId),
      }))
    );
  };

  const handleTaskDuplicate = (task: Task) => {
    const duplicatedTask: Task = {
      ...task,
      id: nextTaskId,
      title: `${task.title} (Copy)`,
      order: task.order + 0.5, // Place it right after the original
      createdAt: new Date().toISOString().split("T")[0],
    };

    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === task.columnId
          ? {
              ...column,
              tasks: [...column.tasks, duplicatedTask]
                .sort((a, b) => a.order - b.order)
                .map((t, index) => ({ ...t, order: index })),
            }
          : column
      )
    );
    setNextTaskId((prev) => prev + 1);
  };

  const handleTaskArchive = (taskId: number) => {
    // For now, we'll just move to the last column (Done) or remove if already there
    const task = columns
      .flatMap((col) => col.tasks)
      .find((t) => t.id === taskId);

    if (!task) return;

    const doneColumn = columns.find((col) => col.isDone);

    if (task.columnId === doneColumn?.id) {
      // If already in done column, remove it
      handleTaskDelete(taskId);
    } else if (doneColumn) {
      // Move to done column
      handleTaskMove(taskId, doneColumn.id);
    }
  };

  return (
    <Board
      columns={columns}
      onTaskMove={handleTaskMove}
      onTaskUpdate={handleTaskUpdate}
      onCreateTask={handleCreateTask}
      onCreateColumn={handleCreateColumn}
      onTaskDelete={handleTaskDelete}
      onTaskDuplicate={handleTaskDuplicate}
      onTaskArchive={handleTaskArchive}
      onTimerClick={handleTimerClick}
      onTimerUpdate={handleUpdateTimer}
      activeTimerTaskId={activeTimerTaskId}
      onColumnOrderChange={setColumns}
    />
  );
}
