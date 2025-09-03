"use client";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Pause, Play, Square, Timer } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  PomodoroSession,
  PomodoroTimer as PomodoroTimerType,
  Task,
} from "../types";

interface PomodoroTimerProps {
  task: Task;
  onUpdateTimer: (taskId: number, timer: PomodoroTimerType) => void;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  task,
  onUpdateTimer,
}) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const { pomodoroTimer } = task;
  const activeSession = pomodoroTimer.sessions.find((s) => s.isActive);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle timer countdown
  useEffect(() => {
    if (!activeSession || !pomodoroTimer.isActive) return;

    const interval = setInterval(() => {
      if (activeSession.timeRemaining > 0) {
        const updatedSessions = pomodoroTimer.sessions.map((session) =>
          session.id === activeSession.id
            ? { ...session, timeRemaining: session.timeRemaining - 1 }
            : session
        );

        const updatedTimer = {
          ...pomodoroTimer,
          sessions: updatedSessions,
        };

        onUpdateTimer(task.id, updatedTimer);
      } else {
        // Session completed
        handleSessionComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSession, pomodoroTimer.isActive]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const formatMinutes = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const startSession = (type: "work" | "shortBreak" | "longBreak") => {
    const duration =
      type === "work"
        ? pomodoroTimer.settings.workDuration
        : type === "shortBreak"
        ? pomodoroTimer.settings.shortBreakDuration
        : pomodoroTimer.settings.longBreakDuration;

    // Stop any active session
    const updatedSessions = pomodoroTimer.sessions.map((session) => ({
      ...session,
      isActive: false,
    }));

    // Create new session
    const newSession: PomodoroSession = {
      id: Date.now(),
      type,
      duration,
      timeRemaining: duration * 60, // Convert to seconds
      startTime: new Date().toISOString(),
      completed: false,
      isActive: true,
    };

    const updatedTimer = {
      ...pomodoroTimer,
      isActive: true,
      currentSessionId: newSession.id,
      sessions: [...updatedSessions, newSession],
    };

    onUpdateTimer(task.id, updatedTimer);
  };

  const pauseTimer = () => {
    const updatedTimer = {
      ...pomodoroTimer,
      isActive: false,
    };
    onUpdateTimer(task.id, updatedTimer);
  };

  const resumeTimer = () => {
    const updatedTimer = {
      ...pomodoroTimer,
      isActive: true,
    };
    onUpdateTimer(task.id, updatedTimer);
  };

  const stopTimer = () => {
    const updatedSessions = pomodoroTimer.sessions.map((session) => ({
      ...session,
      isActive: false,
      endTime: session.isActive ? new Date().toISOString() : session.endTime,
    }));

    const updatedTimer = {
      ...pomodoroTimer,
      isActive: false,
      currentSessionId: undefined,
      sessions: updatedSessions,
    };

    onUpdateTimer(task.id, updatedTimer);
  };

  const handleSessionComplete = () => {
    if (!activeSession) return;

    const updatedSessions = pomodoroTimer.sessions.map((session) =>
      session.id === activeSession.id
        ? {
            ...session,
            completed: true,
            isActive: false,
            endTime: new Date().toISOString(),
            timeRemaining: 0,
          }
        : session
    );

    // Calculate total time spent if it was a work session
    const newTotalTime =
      activeSession.type === "work"
        ? pomodoroTimer.totalTimeSpent + activeSession.duration
        : pomodoroTimer.totalTimeSpent;

    const updatedTimer = {
      ...pomodoroTimer,
      isActive: false,
      currentSessionId: undefined,
      totalTimeSpent: newTotalTime,
      sessions: updatedSessions,
    };

    onUpdateTimer(task.id, updatedTimer);

    // Auto-suggest next session type
    if (activeSession.type === "work") {
      const completedWorkSessions = updatedSessions.filter(
        (s) => s.type === "work" && s.completed
      ).length;
      const shouldTakeLongBreak =
        completedWorkSessions %
          pomodoroTimer.settings.sessionsUntilLongBreak ===
        0;

      // You could add a notification or auto-start the break here
      console.log(
        `Work session completed! Time for a ${
          shouldTakeLongBreak ? "long" : "short"
        } break.`
      );
    }
  };

  const getNextSessionType = (): "work" | "shortBreak" | "longBreak" => {
    const completedWorkSessions = pomodoroTimer.sessions.filter(
      (s) => s.type === "work" && s.completed
    ).length;
    const lastSession =
      pomodoroTimer.sessions[pomodoroTimer.sessions.length - 1];

    if (!lastSession || lastSession.type !== "work") {
      return "work";
    }

    return completedWorkSessions %
      pomodoroTimer.settings.sessionsUntilLongBreak ===
      0
      ? "longBreak"
      : "shortBreak";
  };

  return (
    <div className="relative">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Timer className="w-5 h-5" />
            Pomodoro Timer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Session Display */}
          {activeSession ? (
            <div className="text-center space-y-2">
              <Badge
                variant={
                  activeSession.type === "work" ? "default" : "secondary"
                }
                className="text-sm"
              >
                {activeSession.type === "work"
                  ? "🍅 Work Session"
                  : activeSession.type === "shortBreak"
                  ? "☕ Short Break"
                  : "🛋️ Long Break"}
              </Badge>
              <div className="text-4xl font-mono font-bold text-center">
                {formatTime(activeSession.timeRemaining)}
              </div>
              <div className="flex justify-center gap-2">
                {pomodoroTimer.isActive ? (
                  <>
                    <Button onClick={pauseTimer} variant="outline" size="sm">
                      <Pause className="w-4 h-4 mr-1" />
                      Pause
                    </Button>
                    <Button onClick={stopTimer} variant="outline" size="sm">
                      <Square className="w-4 h-4 mr-1" />
                      Stop
                    </Button>
                  </>
                ) : (
                  <Button onClick={resumeTimer} size="sm">
                    <Play className="w-4 h-4 mr-1" />
                    Resume
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="text-2xl font-mono text-gray-400">25:00</div>
              <div className="flex justify-center gap-2 flex-wrap">
                <Button onClick={() => startSession("work")} size="sm">
                  <Play className="w-4 h-4 mr-1" />
                  Start Work
                </Button>
                <Button
                  onClick={() => startSession("shortBreak")}
                  variant="outline"
                  size="sm"
                >
                  <Coffee className="w-4 h-4 mr-1" />
                  Short Break
                </Button>
                <Button
                  onClick={() => startSession("longBreak")}
                  variant="outline"
                  size="sm"
                >
                  <Coffee className="w-4 h-4 mr-1" />
                  Long Break
                </Button>
              </div>
            </div>
          )}

          {/* Session Statistics */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {
                  pomodoroTimer.sessions.filter(
                    (s) => s.type === "work" && s.completed
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Completed Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {formatMinutes(pomodoroTimer.totalTimeSpent)}
              </div>
              <div className="text-sm text-gray-600">Total Time</div>
            </div>
          </div>
        </CardContent>

        {/* Animated shine border for active timer */}
        {pomodoroTimer.isActive && activeSession && (
          <ShineBorder
            className="absolute inset-0 rounded-[inherit]"
            shineColor={["#3B82F6", "#60A5FA", "#93C5FD"]}
            duration={2}
            borderWidth={2}
          />
        )}
      </Card>
    </div>
  );
};

export default PomodoroTimer;
