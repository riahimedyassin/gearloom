"use client";

import { useUIStore } from "@/stores";
import React, { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useUIStore();

  useEffect(() => {
    // Apply theme to DOM after hydration
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
}
