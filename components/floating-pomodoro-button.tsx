"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePomodoroStore } from "@/stores";
import { Brain, Coffee, Pause, Play, Square, Timer } from "lucide-react";

export function FloatingPomodoroButton() {
  const {
    isOpen,
    timerState,
    timeLeft,
    sessionType,
    linkedTask,
    openTimer,
    startTimer,
    pauseTimer,
    stopTimer,
  } = usePomodoroStore();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getSessionIcon = () => {
    switch (sessionType) {
      case "work":
        return <Brain className="w-5 h-5" />;
      case "short-break":
        return <Coffee className="w-5 h-5" />;
      case "long-break":
        return <Coffee className="w-5 h-5" />;
      default:
        return <Timer className="w-5 h-5" />;
    }
  };

  const getButtonColor = () => {
    if (timerState === "running") {
      return sessionType === "work"
        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
        : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25";
    } else if (timerState === "paused") {
      return "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg shadow-yellow-500/25";
    }
    return "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/25";
  };

  const getPulseAnimation = () => {
    if (timerState === "running") {
      return "animate-pulse";
    }
    return "";
  };

  const handleMainButtonClick = () => {
    if (timerState === "idle" && !linkedTask) {
      openTimer();
    } else if (timerState === "running") {
      pauseTimer();
    } else if (timerState === "paused") {
      startTimer();
    } else {
      startTimer();
    }
  };

  const getTooltipText = () => {
    if (linkedTask) {
      if (timerState === "running") {
        return `Pause timer for "${linkedTask.title}"`;
      } else if (timerState === "paused") {
        return `Resume timer for "${linkedTask.title}"`;
      }
      return `Start timer for "${linkedTask.title}"`;
    }
    return "Open Pomodoro Timer";
  };

  const getMainButtonIcon = () => {
    if (timerState === "running") {
      return <Pause className="w-5 h-5" />;
    } else if (timerState === "paused") {
      return <Play className="w-5 h-5" />;
    } else if (linkedTask) {
      return <Play className="w-5 h-5" />;
    }
    return <Timer className="w-5 h-5" />;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Timer Display - only show when timer is active */}
      {timerState !== "idle" && linkedTask && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border p-3 animate-in slide-in-from-right-2">
          <div className="flex items-center gap-2 text-sm">
            {getSessionIcon()}
            <div className="flex flex-col">
              <span className="font-mono font-bold text-lg">
                {formatTime(timeLeft)}
              </span>
              <span className="text-xs text-muted-foreground truncate max-w-[140px]">
                {linkedTask.title}
              </span>
            </div>
          </div>

          {/* Session type indicator */}
          <Badge
            variant="outline"
            className={cn(
              "text-xs mt-2 w-full justify-center",
              sessionType === "work"
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : sessionType === "short-break"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-purple-200 bg-purple-50 text-purple-700"
            )}
          >
            {sessionType === "work"
              ? "🍅 Focus Time"
              : sessionType === "short-break"
              ? "☕ Short Break"
              : "🛋️ Long Break"}
          </Badge>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex items-center gap-2">
        {/* Stop Button - only show when timer is active */}
        {timerState !== "idle" && linkedTask && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={stopTimer}
                  className="h-10 w-10 p-0 bg-white dark:bg-gray-900 hover:bg-red-50 dark:hover:bg-red-950 border-red-200 hover:border-red-300"
                >
                  <Square className="w-4 h-4 text-red-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Stop Timer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {/* Main Pomodoro Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                onClick={handleMainButtonClick}
                className={cn(
                  "h-14 w-14 rounded-full border-0 text-white transition-all duration-300 hover:scale-105 active:scale-95",
                  getButtonColor(),
                  getPulseAnimation(),
                  "relative overflow-hidden"
                )}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75" />

                {/* Button content */}
                <div className="relative z-10 flex items-center justify-center">
                  {getMainButtonIcon()}
                </div>

                {/* Active indicator */}
                {timerState === "running" && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-bounce">
                    <div className="w-2 h-2 bg-green-600 rounded-full absolute top-1 left-1" />
                  </div>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{getTooltipText()}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Floating particles effect when timer is running */}
      {timerState === "running" && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute animate-bounce w-2 h-2 bg-blue-400 rounded-full -top-2 -left-2 opacity-70"
            style={{ animationDelay: "0s", animationDuration: "2s" }}
          />
          <div
            className="absolute animate-bounce w-1 h-1 bg-purple-400 rounded-full -top-4 right-2 opacity-60"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <div
            className="absolute animate-bounce w-1.5 h-1.5 bg-indigo-400 rounded-full top-2 -right-4 opacity-50"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
        </div>
      )}
    </div>
  );
}
