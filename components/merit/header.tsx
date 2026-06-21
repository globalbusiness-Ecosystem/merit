"use client";

import { Settings } from "lucide-react";

interface HeaderProps {
  onMenuOpen: () => void;
  onSettingsOpen: () => void;
}

export function Header({ onMenuOpen, onSettingsOpen }: HeaderProps) {
  return (
    <header
      className="flex items-center justify-between px-4 py-3 sticky top-0 z-40"
      style={{ backgroundColor: "#7C3AED" }}
    >
      {/* Left: Hamburger */}
      <button
        onClick={onMenuOpen}
        className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Open menu"
      >
        <span className="block w-5 h-0.5 bg-white rounded-full" />
        <span className="block w-5 h-0.5 bg-white rounded-full" />
        <span className="block w-5 h-0.5 bg-white rounded-full" />
      </button>

      {/* Center: Logo + domain */}
      <div className="flex flex-col items-center gap-0">
        <span className="text-white font-bold text-xl tracking-wide">
          🎓 merit
        </span>
        <span className="text-purple-200 text-[10px] font-medium tracking-widest uppercase">
          merit.pi
        </span>
      </div>

      {/* Right: Settings */}
      <button
        onClick={onSettingsOpen}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Open settings"
      >
        <Settings className="w-5 h-5 text-white" />
      </button>
    </header>
  );
}
