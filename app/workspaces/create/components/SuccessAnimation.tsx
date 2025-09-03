"use client";

import { Check } from "lucide-react";

export function SuccessAnimation() {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Workspace Created!</h3>
      <p className="text-slate-600 mb-4">
        Redirecting you to your dashboard...
      </p>
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
    </div>
  );
}
