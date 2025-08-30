import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  createdAt: Date;
  avatar?: string;
}

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  
  // Actions
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: string) => void;
  clearAllNotifications: () => void;
  
  // Getters
  getUnreadNotifications: () => Notification[];
  getRecentNotifications: (limit?: number) => Notification[];
}

const defaultNotifications: Notification[] = [
  {
    id: '1',
    title: 'Task assigned to you',
    description: 'John Doe assigned "Update user interface" to you',
    time: '2 minutes ago',
    type: 'info',
    read: false,
    createdAt: new Date(Date.now() - 2 * 60 * 1000),
  },
  {
    id: '2',
    title: 'Project deadline approaching',
    description: 'Website Redesign project is due in 2 days',
    time: '1 hour ago',
    type: 'warning',
    read: false,
    createdAt: new Date(Date.now() - 60 * 60 * 1000),
  },
  {
    id: '3',
    title: 'Pomodoro session completed',
    description: 'Great job! You completed a 25-minute focus session',
    time: '3 hours ago',
    type: 'success',
    read: true,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: '4',
    title: 'New team member joined',
    description: 'Sarah Wilson joined the development team',
    time: '1 day ago',
    type: 'info',
    read: false,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: defaultNotifications,
      unreadCount: defaultNotifications.filter(n => !n.read).length,
      
      addNotification: (notificationData) => {
        const notification: Notification = {
          ...notificationData,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
        
        set((state) => ({
          notifications: [notification, ...state.notifications],
          unreadCount: state.unreadCount + 1,
        }));
      },
      
      markAsRead: (id) => {
        set((state) => ({
          notifications: state.notifications.map(n => 
            n.id === id ? { ...n, read: true } : n
          ),
          unreadCount: state.notifications.find(n => n.id === id && !n.read) 
            ? state.unreadCount - 1 
            : state.unreadCount,
        }));
      },
      
      markAllAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map(n => ({ ...n, read: true })),
          unreadCount: 0,
        }));
      },
      
      deleteNotification: (id) => {
        set((state) => {
          const notification = state.notifications.find(n => n.id === id);
          return {
            notifications: state.notifications.filter(n => n.id !== id),
            unreadCount: notification && !notification.read 
              ? state.unreadCount - 1 
              : state.unreadCount,
          };
        });
      },
      
      clearAllNotifications: () => {
        set({ notifications: [], unreadCount: 0 });
      },
      
      getUnreadNotifications: () => {
        return get().notifications.filter(n => !n.read);
      },
      
      getRecentNotifications: (limit = 10) => {
        return get().notifications
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(0, limit);
      },
    }),
    {
      name: 'notifications-storage',
      // Only persist the notifications and unreadCount, not functions
      partialize: (state) => ({ 
        notifications: state.notifications,
        unreadCount: state.unreadCount 
      }),
    }
  )
);
