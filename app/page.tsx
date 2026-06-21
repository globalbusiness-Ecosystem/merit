"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/merit/header";
import { Ticker } from "@/components/merit/ticker";
import { SearchBar } from "@/components/merit/search-bar";
import { CategoryChips } from "@/components/merit/category-chips";
import { CourseCard } from "@/components/merit/course-card";
import { StatsBar } from "@/components/merit/stats-bar";
import { BottomNav } from "@/components/merit/bottom-nav";
import { Sidebar } from "@/components/merit/sidebar";
import { SettingsPanel } from "@/components/merit/settings-panel";
import { CourseDetailPage } from "@/components/merit/course-detail-page";
import { EnrollToast } from "@/components/merit/enroll-toast";
import { COURSES, type Course } from "@/lib/merit-data";
import { usePiAuth } from "@/contexts/pi-auth-context";

export default function MeritHome() {
  const { userData } = usePiAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeNav, setActiveNav] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);
  const [toast, setToast] = useState<{
    visible: boolean;
    type: "success" | "error" | "loading";
    message: string;
  }>({ visible: false, type: "loading", message: "" });

  const showToast = (
    type: "success" | "error" | "loading",
    message: string,
    duration = 3000
  ) => {
    setToast({ visible: true, type, message });
    if (type !== "loading") {
      setTimeout(() => setToast((t) => ({ ...t, visible: false })), duration);
    }
  };

  const handleEnroll = (course: Course) => {
    if (typeof window === "undefined" || typeof window.pay !== "function") {
      showToast("error", "Pi payment not available");
      return;
    }
    showToast("loading", `Processing π ${course.price} payment...`);
    window.pay({
      amount: course.price,
      memo: `Enroll in ${course.title}`,
      metadata: { courseId: course.id, courseTitle: course.title },
      onComplete: () => {
        setToast({ visible: false, type: "loading", message: "" });
        showToast("success", `Enrolled in "${course.title}"!`);
        setDetailCourse(null);
      },
      onError: (err) => {
        setToast({ visible: false, type: "loading", message: "" });
        showToast("error", err?.message || "Payment failed. Please try again.");
      },
    });
  };

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesCat = activeCategory === "all" || c.category === activeCategory;
      const matchesSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.titleAr.includes(search) ||
        c.instructor.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  const aiCourses = useMemo(() => {
    return COURSES.filter((c) => c.category === "ai");
  }, []);

  // Show detail page if selected
  if (detailCourse) {
    return (
      <CourseDetailPage
        course={detailCourse}
        onBack={() => setDetailCourse(null)}
        onEnroll={handleEnroll}
      />
    );
  }

  return (
    <div
      className="min-h-screen max-w-[430px] mx-auto flex flex-col relative"
      style={{ backgroundColor: "#030712" }}
    >
      {/* Overlays */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <EnrollToast
        visible={toast.visible}
        type={toast.type}
        message={toast.message}
      />

      {/* Fixed header */}
      <Header
        onMenuOpen={() => setSidebarOpen(true)}
        onSettingsOpen={() => setSettingsOpen(true)}
      />

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {/* Ticker */}
        <Ticker />

        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Categories */}
        <CategoryChips active={activeCategory} onSelect={setActiveCategory} />

        {/* Hero greeting */}
        <div className="px-4 pt-1 pb-3">
          <h1 className="text-white font-bold text-xl leading-tight">
            {userData
              ? `Welcome back, ${userData.username}`
              : "Start Learning Today"}
          </h1>
          <p className="text-gray-400 text-xs mt-0.5" dir="rtl">
            ابدأ رحلتك التعليمية مع Pi
          </p>
        </div>

        {/* Stats */}
        <StatsBar />

        {/* AI Section */}
        <div className="px-4 mb-4 mt-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-white font-bold text-base">Artificial Intelligence</h2>
              <p className="text-[10px]" style={{ color: "#F59E0B" }} dir="rtl">
                الذكاء الاصطناعي
              </p>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#7C3AED" }}>
              {aiCourses.length} courses
            </span>
          </div>

          {/* AI Courses Grid */}
          <div className="grid grid-cols-2 gap-3">
            {aiCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={() => setDetailCourse(course)}
                onView={() => setDetailCourse(course)}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="px-4 py-2">
          <div className="h-px" style={{ backgroundColor: "#1e1040" }} />
        </div>

        {/* Section heading */}
        <div className="flex items-center justify-between px-4 mb-3 mt-2">
          <div>
            <h2 className="text-white font-bold text-base">Featured Courses</h2>
            <p className="text-[10px]" style={{ color: "#F59E0B" }} dir="rtl">
              الكورسات المميزة
            </p>
          </div>
          <span className="text-xs font-semibold" style={{ color: "#7C3AED" }}>
            See all
          </span>
        </div>

        {/* Course grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 px-4">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={() => setDetailCourse(course)}
                onView={() => setDetailCourse(course)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 gap-3">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "#1e1040" }}
            >
              <span className="text-3xl">🎓</span>
            </div>
            <p className="text-white font-semibold text-base">No courses found</p>
            <p className="text-gray-400 text-sm text-center">
              Try a different category or search term
            </p>
          </div>
        )}

        {/* Bottom spacing */}
        <div className="h-4" />
      </main>

      {/* Bottom nav */}
      <BottomNav active={activeNav} onSelect={setActiveNav} />
    </div>
  );
}
