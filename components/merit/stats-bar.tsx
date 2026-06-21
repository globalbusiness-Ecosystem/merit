"use client";

import { BookOpen, Users, Award } from "lucide-react";

const STATS = [
  { icon: BookOpen, value: "1,000+", label: "Courses" },
  { icon: Users, value: "50K+", label: "Students" },
  { icon: Award, value: "π", label: "Certified" },
];

export function StatsBar() {
  return (
    <div
      className="mx-4 my-3 rounded-2xl flex items-center justify-around py-4 px-2"
      style={{ backgroundColor: "#1e1040", border: "1px solid #3b1f7a" }}
    >
      {STATS.map((stat, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <stat.icon className="w-5 h-5" style={{ color: "#7C3AED" }} />
          <span
            className="text-base font-extrabold"
            style={{ color: "#F59E0B" }}
          >
            {stat.value}
          </span>
          <span className="text-gray-400 text-[10px] font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
