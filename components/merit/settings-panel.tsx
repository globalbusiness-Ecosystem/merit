"use client";

import { X, Moon, Sun, Globe, Coins, Bell, Info, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

export function SettingsPanel({ open, onClose }: SettingsPanelProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [currency, setCurrency] = useState<"pi" | "usd">("pi");
  const [notifications, setNotifications] = useState(true);

  const SETTINGS_SECTIONS = [
    {
      title: "Appearance",
      titleAr: "المظهر",
      items: [
        {
          icon: darkMode ? Moon : Sun,
          label: "Dark Theme",
          labelAr: "الوضع الداكن",
          action: (
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-11 h-6 rounded-full transition-colors"
              style={{ backgroundColor: darkMode ? "#7C3AED" : "#374151" }}
            >
              <span
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-sm"
                style={{ transform: darkMode ? "translateX(21px)" : "translateX(2px)" }}
              />
            </button>
          ),
        },
      ],
    },
    {
      title: "Language",
      titleAr: "اللغة",
      items: [
        {
          icon: Globe,
          label: "App Language",
          labelAr: "لغة التطبيق",
          action: (
            <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid #3b1f7a" }}>
              {(["en", "ar"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className="px-3 py-1 text-xs font-bold transition-colors"
                  style={
                    language === lang
                      ? { backgroundColor: "#7C3AED", color: "#fff" }
                      : { backgroundColor: "transparent", color: "#a78bfa" }
                  }
                >
                  {lang === "en" ? "EN" : "عر"}
                </button>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      title: "Currency",
      titleAr: "العملة",
      items: [
        {
          icon: Coins,
          label: "Display Currency",
          labelAr: "عملة العرض",
          action: (
            <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid #3b1f7a" }}>
              {(["pi", "usd"] as const).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className="px-3 py-1 text-xs font-bold transition-colors"
                  style={
                    currency === cur
                      ? { backgroundColor: "#F59E0B", color: "#0d0820" }
                      : { backgroundColor: "transparent", color: "#a78bfa" }
                  }
                >
                  {cur === "pi" ? "π Pi" : "$ USD"}
                </button>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      title: "Notifications",
      titleAr: "الإشعارات",
      items: [
        {
          icon: Bell,
          label: "Push Notifications",
          labelAr: "الإشعارات الفورية",
          action: (
            <button
              onClick={() => setNotifications(!notifications)}
              className="relative w-11 h-6 rounded-full transition-colors"
              style={{ backgroundColor: notifications ? "#7C3AED" : "#374151" }}
            >
              <span
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-sm"
                style={{ transform: notifications ? "translateX(21px)" : "translateX(2px)" }}
              />
            </button>
          ),
        },
      ],
    },
    {
      title: "About",
      titleAr: "عن التطبيق",
      items: [
        {
          icon: Info,
          label: "About Merit",
          labelAr: "عن merit",
          action: <ChevronRight className="w-4 h-4 text-gray-500" />,
        },
      ],
    },
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className="fixed top-0 right-0 h-full w-80 z-50 flex flex-col transition-transform duration-300 overflow-y-auto"
        style={{
          backgroundColor: "#0d0820",
          borderLeft: "1px solid #1e1040",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 sticky top-0 z-10"
          style={{ backgroundColor: "#7C3AED" }}
        >
          <div>
            <h2 className="text-white font-bold text-lg">Settings</h2>
            <p className="text-purple-200 text-[10px]" dir="rtl">الإعدادات</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-1 p-4">
          {SETTINGS_SECTIONS.map((section) => (
            <div key={section.title} className="mb-4">
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>
                  {section.title}
                </p>
                <p className="text-[10px]" style={{ color: "#F59E0B" }} dir="rtl">
                  {section.titleAr}
                </p>
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#130d2e", border: "1px solid #1e1040" }}
              >
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-4 py-3.5"
                    style={{ borderBottom: "1px solid #1e1040" }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 shrink-0" style={{ color: "#7C3AED" }} />
                      <div>
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-[10px]" style={{ color: "#F59E0B" }} dir="rtl">
                          {item.labelAr}
                        </p>
                      </div>
                    </div>
                    {item.action}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Version */}
        <div className="mt-auto px-5 py-4 text-center">
          <p className="text-gray-500 text-xs">merit.pi v1.0.0</p>
          <p className="text-[10px]" style={{ color: "#F59E0B" }}>
            منصة merit التعليمية
          </p>
        </div>
      </aside>
    </>
  );
}
