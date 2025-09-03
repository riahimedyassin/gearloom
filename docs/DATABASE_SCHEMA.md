# Database Schema Documentation

## Overview

This document outlines the comprehensive database schema implemented for the GearLoom project management system. The schema has been designed to support advanced project management features, Pomodoro tracking, team collaboration, and rich LLM context generation.

## Schema Migration

The schema has been successfully migrated using Prisma with the migration name: `comprehensive_schema_update`

Migration file: `20250903111016_comprehensive_schema_update`

## Core Models

### User Model
- **Enhanced with role-based access control**
- **Fields**: id, firstname, lastname, email, password, avatar, role, timestamps
- **Relationships**: Projects (owner & member), Tasks (creator & assignee), Comments, Pomodoro Sessions, Notifications

### Project Model
- **Rich LLM context fields for better AI assistance**
- **Enhanced Fields**: 
  - Basic: name, description, type, category, priority, status
  - LLM Context: targetAudience, timeline, budget, context
  - JSON Fields: goals, challenges, resources, techStack, keywords, milestones
- **Relationships**: Owner, Members, Tasks, Columns, Labels, Notifications

### Task Model  
- **Comprehensive task management**
- **Fields**: title, description, priority, status, order, time estimates, dates
- **Relationships**: Project, Column, Creator, Assignee, SubTasks, Comments, Attachments, Labels, Steps, Pomodoro Sessions

### Column Model
- **Kanban board columns with ordering and colors**
- **Fields**: name, isDone, order, color
- **Relationships**: Project, Tasks

### Enhanced Pomodoro System
- **PomodoroSettings**: User-specific timer configurations
- **PomodoroSession**: Individual focus/break sessions with full tracking
- **Legacy Pomorounds**: Maintained for backward compatibility

### Notification System
- **Rich notification types**: Task updates, project changes, team events, system announcements
- **Fields**: type, title, message, read status, metadata, project context
- **Relationships**: User, Project (optional)

## Enums

### Project Types
- web_development, mobile_app, desktop_app, api_backend
- data_science, machine_learning, research, marketing
- design, business, education, personal, startup, learning, custom, other

### Project Categories  
- startup, enterprise, personal, freelance, open_source, academic, non_profit

### Task Status
- todo, in_progress, in_review, done, blocked

### User Roles
- ADMIN, OWNER, MEMBER, VIEWER

### Member Roles (Project-specific)
- ADMIN, MANAGER, MEMBER, VIEWER

### Notification Types
- TASK_ASSIGNED, TASK_UPDATED, TASK_COMPLETED, TASK_DUE_SOON
- PROJECT_UPDATED, MEMBER_ADDED, COMMENT_ADDED
- POMODORO_COMPLETED, SYSTEM_ANNOUNCEMENT

## Schema Files Created/Updated

### Zod Validation Schemas
1. **projects/createProject.ts** - Comprehensive project creation with LLM context
2. **tasks/createTask.ts** - Enhanced task creation with time estimates and relationships
3. **columns/createColumn.ts** - Column management with ordering and colors
4. **labels/createLabel.ts** - Label creation with color support
5. **notifications/createNotification.ts** - Rich notification creation
6. **pomodoro/createPomodoro.ts** - Pomodoro session and settings management

### Type Definitions
- **lib/types.ts** - Comprehensive type exports and extended relationship types

## Key Features Implemented

### 1. Enhanced Project Context for LLM
- Rich metadata fields (goals, challenges, resources, techStack)
- Target audience and timeline information
- JSON storage for flexible data structures
- Budget and milestone tracking

### 2. Advanced Task Management
- Time estimation and actual time tracking
- Multiple status states (todo, in_progress, in_review, done, blocked)
- Due dates and start dates
- Hierarchical structure with subtasks and steps

### 3. Team Collaboration
- Project member roles and permissions
- Comment system with rich text support (JSON)
- Task assignments and notifications
- File attachment system with metadata

### 4. Comprehensive Pomodoro Integration
- User-specific timer settings
- Session tracking with actual time recording
- Integration with task time tracking
- Legacy support for existing data

### 5. Rich Notification System
- Project-aware notifications
- Multiple notification types
- Metadata storage for context
- Read/unread status tracking

## Database Indexing

Strategic indexes have been added for optimal query performance:
- Project relationships (projectId, ownerId)
- Task relationships (assignedToId, createdById, columnId)
- Time-based queries (createdAt, dueDate)
- User-specific queries (userId)
- Notification queries (read status, createdAt)

## API Integration

The schema is designed to work seamlessly with:
- REST API endpoints
- GraphQL resolvers
- Real-time updates via WebSocket
- Batch operations for notifications and task updates

## Migration Strategy

- **Backward Compatibility**: Maintained existing enum values (e.g., 'custom' project type)
- **Data Preservation**: All existing data relationships preserved
- **Gradual Migration**: New features can be adopted incrementally
- **Type Safety**: Full TypeScript support with Prisma Client generation

## Next Steps

1. **API Routes**: Create corresponding API routes for all schema operations
2. **Real-time Updates**: Implement WebSocket integration for live updates
3. **Data Seeding**: Create seed scripts for development environment
4. **Performance Monitoring**: Set up query performance tracking
5. **Backup Strategy**: Implement automated backup procedures

This comprehensive schema provides a solid foundation for advanced project management features while maintaining flexibility for future enhancements.
