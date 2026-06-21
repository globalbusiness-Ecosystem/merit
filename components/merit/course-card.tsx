"use client";

import { Star, Users, Clock, BookOpen } from "lucide-react";
import type { Course } from "@/lib/merit-data";

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
  onView: (course: Course) => void;
}

export function CourseCard({ course, onEnroll, onView }: CourseCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-transform active:scale-95"
      style={{ backgroundColor: "#130d2e" }}
      onClick={() => onView(course)}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-bold"
          style={{ backgroundColor: "#7C3AED", color: "#fff" }}
        >
          {course.level}
        </div>
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        {/* Title */}
        <h3 className="text-white text-xs font-bold leading-tight line-clamp-2">
          {course.title}
        </h3>
        {/* Arabic subtitle */}
        <p
          className="text-[10px] font-medium text-right leading-tight"
          dir="rtl"
          style={{ color: "#F59E0B" }}
        >
          {course.titleAr}
        </p>

        {/* Instructor */}
        <p className="text-gray-400 text-[10px] truncate">{course.instructor}</p>

        {/* Duration & Language */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-0.5 text-gray-400 text-[9px]">
            <Clock className="w-2.5 h-2.5" />
            <span>{course.duration}h</span>
          </div>
          <div className="flex items-center gap-0.5 text-gray-400 text-[9px]">
            <BookOpen className="w-2.5 h-2.5" />
            <span>{course.lessons}</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ backgroundColor: "#1e1040", color: "#b8a6ff" }}>
            {course.language}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-[9px] leading-tight line-clamp-2">
          {course.description}
        </p>

        {/* Rating + Students */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-400 text-[10px] font-bold">
              {course.rating}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <Users className="w-3 h-3 text-gray-500" />
            <span className="text-gray-400 text-[10px]">
              {course.students.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Price + Enroll */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span
            className="text-sm font-extrabold"
            style={{ color: "#F59E0B" }}
          >
            π {course.price}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEnroll(course);
            }}
            className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white transition-all active:scale-95"
            style={{ backgroundColor: "#7C3AED" }}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
