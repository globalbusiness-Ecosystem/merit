"use client";

import { X, Home, BookOpen, BarChart3, User, Info, Star, Download, HelpCircle } from "lucide-react";
import { usePiAuth } from "@/contexts/pi-auth-context";

const MENU_ITEMS = [
  { icon: Home, label: "Home", labelAr: "الرئيسية" },
  { icon: BookOpen, label: "Browse Courses", labelAr: "تصفح الكورسات" },
  { icon: Star, label: "My Courses", labelAr: "كورساتي" },
  { icon: BarChart3, label: "My Progress", labelAr: "تقدمي" },
  { icon: Download, label: "Downloads", labelAr: "التنزيلات" },
  { icon: User, label: "Profile", labelAr: "الملف الشخصي" },
  { icon: HelpCircle, label: "Help & Support", labelAr: "المساعدة" },
  { icon: Info, label: "About Merit", labelAr: "عن merit" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { userData } = usePiAuth();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col transition-transform duration-300"
        style={{
          backgroundColor: "#0d0820",
          borderRight: "1px solid #1e1040",
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ backgroundColor: "#7C3AED" }}
        >
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">🎓 merit</span>
            <span className="text-purple-200 text-[10px] tracking-widest uppercase">
              merit.pi
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* User greeting */}
        {userData && (
          <div
            className="px-5 py-3 flex items-center gap-3"
            style={{ backgroundColor: "#130d2e", borderBottom: "1px solid #1e1040" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: "#7C3AED" }}
            >
              {userData.username?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{userData.username}</p>
              <p className="text-gray-400 text-[10px]">Pi Network Member</p>
            </div>
          </div>
        )}

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={onClose}
              className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-white/5 transition-colors text-left"
            >
              <item.icon className="w-5 h-5 shrink-0" style={{ color: "#7C3AED" }} />
              <div className="flex flex-col items-start">
                <span className="text-white text-sm font-medium">{item.label}</span>
                <span className="text-[10px]" style={{ color: "#F59E0B" }} dir="rtl">
                  {item.labelAr}
                </span>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div
          className="px-5 py-4 text-center"
          style={{ borderTop: "1px solid #1e1040" }}
        >
          <p className="text-gray-500 text-[10px]">merit.pi · Powered by Pi Network</p>
          <p className="text-[10px]" style={{ color: "#F59E0B" }}>
            التعلم بعملة Pi
          </p>
        </div>
      </aside>
    </>
  );
}
