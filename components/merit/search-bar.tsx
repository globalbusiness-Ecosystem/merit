"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 py-3">
      <div
        className="flex items-center gap-3 rounded-xl px-4 py-3"
        style={{ backgroundColor: "#1e1040" }}
      >
        <Search className="w-4 h-4 shrink-0" style={{ color: "#7C3AED" }} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search courses, instructors..."
          className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
        />
      </div>
    </div>
  );
}
