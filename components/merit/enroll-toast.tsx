"use client";

import { CheckCircle, XCircle } from "lucide-react";

interface EnrollToastProps {
  type: "success" | "error" | "loading";
  message: string;
  visible: boolean;
}

export function EnrollToast({ type, message, visible }: EnrollToastProps) {
  if (!visible) return null;

  return (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl max-w-[90vw]"
      style={{ backgroundColor: "#130d2e", border: "1px solid #3b1f7a" }}
    >
      {type === "success" && <CheckCircle className="w-5 h-5 shrink-0 text-green-400" />}
      {type === "error" && <XCircle className="w-5 h-5 shrink-0 text-red-400" />}
      {type === "loading" && (
        <div
          className="w-5 h-5 rounded-full border-2 border-t-transparent shrink-0 animate-spin"
          style={{ borderColor: "#7C3AED", borderTopColor: "transparent" }}
        />
      )}
      <span className="text-white text-sm font-medium">{message}</span>
    </div>
  );
}
