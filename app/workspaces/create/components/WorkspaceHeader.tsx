"use client";

import { Sparkles } from "lucide-react";

export function WorkspaceHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          GearLoom
        </h1>
      </div>
      <p className="text-lg text-slate-600">Create your new workspace</p>
    </div>
  );
}
