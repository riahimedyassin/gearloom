/*
  Warnings:

  - You are about to drop the `Column` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Label` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pomorounds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskLabel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'OWNER', 'MEMBER', 'VIEWER');

-- CreateEnum
CREATE TYPE "public"."ProjectCategory" AS ENUM ('startup', 'enterprise', 'personal', 'freelance', 'open_source', 'academic', 'non_profit');

-- CreateEnum
CREATE TYPE "public"."ProjectPriority" AS ENUM ('low', 'medium', 'high', 'critical');

-- CreateEnum
CREATE TYPE "public"."ProjectStatus" AS ENUM ('planning', 'active', 'on_hold', 'completed', 'archived');

-- CreateEnum
CREATE TYPE "public"."MemberRole" AS ENUM ('ADMIN', 'MANAGER', 'MEMBER', 'VIEWER');

-- CreateEnum
CREATE TYPE "public"."TaskStatus" AS ENUM ('todo', 'in_progress', 'in_review', 'done', 'blocked');

-- CreateEnum
CREATE TYPE "public"."SessionType" AS ENUM ('FOCUS', 'SHORT_BREAK', 'LONG_BREAK');

-- CreateEnum
CREATE TYPE "public"."SessionStatus" AS ENUM ('PENDING', 'ACTIVE', 'COMPLETED', 'PAUSED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."NotificationType" AS ENUM ('TASK_ASSIGNED', 'TASK_UPDATED', 'TASK_COMPLETED', 'TASK_DUE_SOON', 'PROJECT_UPDATED', 'MEMBER_ADDED', 'COMMENT_ADDED', 'POMODORO_COMPLETED', 'SYSTEM_ANNOUNCEMENT');

-- AlterEnum
ALTER TYPE "public"."AttachmentType" ADD VALUE 'file';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."ProjectType" ADD VALUE 'web_development';
ALTER TYPE "public"."ProjectType" ADD VALUE 'mobile_app';
ALTER TYPE "public"."ProjectType" ADD VALUE 'desktop_app';
ALTER TYPE "public"."ProjectType" ADD VALUE 'api_backend';
ALTER TYPE "public"."ProjectType" ADD VALUE 'data_science';
ALTER TYPE "public"."ProjectType" ADD VALUE 'machine_learning';
ALTER TYPE "public"."ProjectType" ADD VALUE 'research';
ALTER TYPE "public"."ProjectType" ADD VALUE 'marketing';
ALTER TYPE "public"."ProjectType" ADD VALUE 'design';
ALTER TYPE "public"."ProjectType" ADD VALUE 'business';
ALTER TYPE "public"."ProjectType" ADD VALUE 'education';
ALTER TYPE "public"."ProjectType" ADD VALUE 'personal';
ALTER TYPE "public"."ProjectType" ADD VALUE 'other';

-- AlterEnum
ALTER TYPE "public"."TaskPriority" ADD VALUE 'critical';

-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Pomorounds" DROP CONSTRAINT "Pomorounds_taskId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Pomorounds" DROP CONSTRAINT "Pomorounds_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SubTask" DROP CONSTRAINT "SubTask_taskId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_assignedToId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_columnId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TaskAttachment" DROP CONSTRAINT "TaskAttachment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TaskLabel" DROP CONSTRAINT "TaskLabel_labelId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TaskLabel" DROP CONSTRAINT "TaskLabel_taskId_fkey";

-- DropTable
DROP TABLE "public"."Column";

-- DropTable
DROP TABLE "public"."Comment";

-- DropTable
DROP TABLE "public"."Label";

-- DropTable
DROP TABLE "public"."Pomorounds";

-- DropTable
DROP TABLE "public"."Project";

-- DropTable
DROP TABLE "public"."SubTask";

-- DropTable
DROP TABLE "public"."Task";

-- DropTable
DROP TABLE "public"."TaskAttachment";

-- DropTable
DROP TABLE "public"."TaskLabel";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "public"."ProjectType" NOT NULL,
    "category" "public"."ProjectCategory" NOT NULL,
    "priority" "public"."ProjectPriority" NOT NULL DEFAULT 'medium',
    "status" "public"."ProjectStatus" NOT NULL DEFAULT 'planning',
    "targetAudience" TEXT,
    "timeline" TEXT,
    "budget" TEXT,
    "context" TEXT,
    "goals" JSONB,
    "challenges" JSONB,
    "resources" JSONB,
    "techStack" JSONB,
    "keywords" JSONB,
    "milestones" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_members" (
    "id" SERIAL NOT NULL,
    "role" "public"."MemberRole" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "project_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."columns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "columns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "priority" "public"."TaskPriority" NOT NULL DEFAULT 'medium',
    "status" "public"."TaskStatus" NOT NULL DEFAULT 'todo',
    "order" INTEGER NOT NULL DEFAULT 0,
    "estimatedTime" INTEGER,
    "actualTime" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3),
    "startDate" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "projectId" INTEGER NOT NULL,
    "columnId" INTEGER NOT NULL,
    "createdById" INTEGER NOT NULL,
    "assignedToId" INTEGER,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sub_tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "priority" "public"."TaskPriority" NOT NULL DEFAULT 'medium',
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "sub_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."task_steps" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "task_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."comments" (
    "id" SERIAL NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "taskId" INTEGER NOT NULL,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."task_attachments" (
    "id" SERIAL NOT NULL,
    "type" "public"."AttachmentType" NOT NULL,
    "filename" TEXT NOT NULL,
    "originalName" TEXT,
    "url" TEXT NOT NULL,
    "size" INTEGER,
    "mimeType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskId" INTEGER NOT NULL,
    "uploadedById" INTEGER NOT NULL,

    CONSTRAINT "task_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pomodoro_settings" (
    "id" SERIAL NOT NULL,
    "focusDuration" INTEGER NOT NULL DEFAULT 25,
    "shortBreakDuration" INTEGER NOT NULL DEFAULT 5,
    "longBreakDuration" INTEGER NOT NULL DEFAULT 15,
    "sessionsUntilLongBreak" INTEGER NOT NULL DEFAULT 4,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "pomodoro_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pomodoro_sessions" (
    "id" SERIAL NOT NULL,
    "type" "public"."SessionType" NOT NULL,
    "status" "public"."SessionStatus" NOT NULL DEFAULT 'PENDING',
    "duration" INTEGER NOT NULL,
    "actualTime" INTEGER,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "taskId" INTEGER,
    "settingsId" INTEGER,

    CONSTRAINT "pomodoro_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pomorounds" (
    "id" SERIAL NOT NULL,
    "rounds" INTEGER NOT NULL,
    "longBreaks" INTEGER NOT NULL,
    "shortBreaks" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "pomorounds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."labels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#3B82F6',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "labels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."task_labels" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "labelId" INTEGER NOT NULL,

    CONSTRAINT "task_labels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notifications" (
    "id" SERIAL NOT NULL,
    "type" "public"."NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "projects_ownerId_idx" ON "public"."projects"("ownerId");

-- CreateIndex
CREATE INDEX "projects_status_idx" ON "public"."projects"("status");

-- CreateIndex
CREATE INDEX "projects_type_idx" ON "public"."projects"("type");

-- CreateIndex
CREATE UNIQUE INDEX "project_members_projectId_userId_key" ON "public"."project_members"("projectId", "userId");

-- CreateIndex
CREATE INDEX "columns_projectId_idx" ON "public"."columns"("projectId");

-- CreateIndex
CREATE INDEX "tasks_projectId_idx" ON "public"."tasks"("projectId");

-- CreateIndex
CREATE INDEX "tasks_columnId_idx" ON "public"."tasks"("columnId");

-- CreateIndex
CREATE INDEX "tasks_assignedToId_idx" ON "public"."tasks"("assignedToId");

-- CreateIndex
CREATE INDEX "tasks_createdById_idx" ON "public"."tasks"("createdById");

-- CreateIndex
CREATE INDEX "tasks_createdAt_idx" ON "public"."tasks"("createdAt");

-- CreateIndex
CREATE INDEX "tasks_dueDate_idx" ON "public"."tasks"("dueDate");

-- CreateIndex
CREATE INDEX "sub_tasks_taskId_idx" ON "public"."sub_tasks"("taskId");

-- CreateIndex
CREATE INDEX "task_steps_taskId_idx" ON "public"."task_steps"("taskId");

-- CreateIndex
CREATE INDEX "comments_taskId_idx" ON "public"."comments"("taskId");

-- CreateIndex
CREATE INDEX "comments_createdById_idx" ON "public"."comments"("createdById");

-- CreateIndex
CREATE INDEX "task_attachments_taskId_idx" ON "public"."task_attachments"("taskId");

-- CreateIndex
CREATE UNIQUE INDEX "pomodoro_settings_userId_key" ON "public"."pomodoro_settings"("userId");

-- CreateIndex
CREATE INDEX "pomodoro_sessions_userId_idx" ON "public"."pomodoro_sessions"("userId");

-- CreateIndex
CREATE INDEX "pomodoro_sessions_taskId_idx" ON "public"."pomodoro_sessions"("taskId");

-- CreateIndex
CREATE INDEX "labels_projectId_idx" ON "public"."labels"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "labels_name_projectId_key" ON "public"."labels"("name", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "task_labels_taskId_labelId_key" ON "public"."task_labels"("taskId", "labelId");

-- CreateIndex
CREATE INDEX "notifications_userId_idx" ON "public"."notifications"("userId");

-- CreateIndex
CREATE INDEX "notifications_projectId_idx" ON "public"."notifications"("projectId");

-- CreateIndex
CREATE INDEX "notifications_read_idx" ON "public"."notifications"("read");

-- CreateIndex
CREATE INDEX "notifications_createdAt_idx" ON "public"."notifications"("createdAt");

-- AddForeignKey
ALTER TABLE "public"."projects" ADD CONSTRAINT "projects_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_members" ADD CONSTRAINT "project_members_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_members" ADD CONSTRAINT "project_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."columns" ADD CONSTRAINT "columns_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "public"."columns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sub_tasks" ADD CONSTRAINT "sub_tasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."task_steps" ADD CONSTRAINT "task_steps_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."task_attachments" ADD CONSTRAINT "task_attachments_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."task_attachments" ADD CONSTRAINT "task_attachments_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pomodoro_sessions" ADD CONSTRAINT "pomodoro_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pomodoro_sessions" ADD CONSTRAINT "pomodoro_sessions_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pomodoro_sessions" ADD CONSTRAINT "pomodoro_sessions_settingsId_fkey" FOREIGN KEY ("settingsId") REFERENCES "public"."pomodoro_settings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pomorounds" ADD CONSTRAINT "pomorounds_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pomorounds" ADD CONSTRAINT "pomorounds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."labels" ADD CONSTRAINT "labels_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."task_labels" ADD CONSTRAINT "task_labels_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."task_labels" ADD CONSTRAINT "task_labels_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "public"."labels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
