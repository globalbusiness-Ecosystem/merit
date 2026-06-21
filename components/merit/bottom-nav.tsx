"use client";

import { Home, Search, BookMarked, BarChart3, User } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "search", icon: Search, label: "Search" },
  { id: "courses", icon: BookMarked, label: "My Courses", gold: true },
  { id: "progress", icon: BarChart3, label: "Progress" },
  { id: "profile", icon: User, label: "Profile" },
];

interface BottomNavProps {
  active: string;
  onSelect: (id: string) => void;
}

export function BottomNav({ active, onSelect }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] flex items-center justify-around px-2 py-2 border-t z-40"
      style={{ backgroundColor: "#0d0820", borderColor: "#1e1040" }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;
        const color = item.gold
          ? "#F59E0B"
          : isActive
          ? "#7C3AED"
          : "#6b7280";
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all active:scale-90"
            style={isActive ? { backgroundColor: "#1e1040" } : {}}
          >
            <item.icon className="w-5 h-5" style={{ color }} />
            <span
              className="text-[9px] font-semibold"
              style={{ color }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
