"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useNotificationStore } from "@/stores";
import { AlertTriangle, Bell, CheckCircle2, Clock, Trash2, FolderOpen } from "lucide-react";
import React from "react";

interface NotificationCenterProps {
  children: React.ReactNode;
}

export function NotificationCenter({ children }: NotificationCenterProps) {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotificationStore();

  const getNotificationIcon = (
    type: "info" | "warning" | "success" | "error"
  ) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Bell className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end" sideOffset={4}>
        <div className="flex flex-col max-h-96">
          {/* Header */}
          <div className="p-4 pb-3 border-b">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">Notifications</h3>
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="h-5 px-2 text-xs">
                    {unreadCount}
                  </Badge>
                )}
              </div>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs h-6 px-2"
                >
                  Mark all read
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Stay updated with your latest activities
            </p>
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto max-h-72">
            <div className="p-2">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Bell className="h-6 w-6 text-muted-foreground/50 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    No notifications yet
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    When you have updates, they'll appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  {notifications.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "relative p-3 rounded-md hover:bg-muted/50 group transition-colors",
                        !notification.read && "bg-muted/30"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <p
                                  className={cn(
                                    "text-sm font-medium leading-tight",
                                    !notification.read && "font-semibold"
                                  )}
                                >
                                  {notification.title}
                                </p>
                                {notification.projectName && (
                                  <Badge
                                    variant="outline"
                                    className="h-5 px-2 text-xs flex items-center gap-1"
                                  >
                                    <FolderOpen className="h-3 w-3" />
                                    {notification.projectName}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                                {notification.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {notification.time}
                                </div>
                                {!notification.read && (
                                  <Badge
                                    variant="secondary"
                                    className="h-4 px-1.5 text-xs"
                                  >
                                    New
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markAsRead(notification.id);
                                  }}
                                  className="h-6 w-6 p-0"
                                >
                                  <CheckCircle2 className="h-3 w-3" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteNotification(notification.id);
                                }}
                                className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {!notification.read && (
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <>
              <Separator />
              <div className="p-3">
                <Button
                  variant="outline"
                  className="w-full h-8 text-xs"
                  size="sm"
                >
                  View All Notifications
                  {notifications.length > 5 && (
                    <Badge
                      variant="secondary"
                      className="ml-2 h-4 px-1.5 text-xs"
                    >
                      +{notifications.length - 5}
                    </Badge>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
