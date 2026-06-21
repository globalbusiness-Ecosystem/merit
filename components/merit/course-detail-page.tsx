"use client";

import { useState } from "react";
import { ArrowLeft, Star, Clock, BookOpen, User, Award } from "lucide-react";
import type { Course } from "@/lib/merit-data";
import { usePiAuth } from "@/contexts/pi-auth-context";
import { PRODUCT_CONFIG } from "@/lib/product-config";

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
  onEnroll: (course: Course) => void;
}

export function CourseDetailPage({
  course,
  onBack,
  onEnroll,
}: CourseDetailPageProps) {
  const { products } = usePiAuth();
  const [paymentState, setPaymentState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [paymentMessage, setPaymentMessage] = useState("");

  const product = products?.find(
    (p) => p.id === PRODUCT_CONFIG.PRODUCT_69b0da4d654737a939df723e
  );
  const amount = product?.price_in_pi ?? null;
  const isProductReady = !!product && typeof window !== "undefined" && typeof window.pay === "function";

  const handleEnrollWithPi = () => {
    if (!product || amount === null) {
      setPaymentState("error");
      setPaymentMessage("Product not available. Please try again.");
      return;
    }
    if (typeof window === "undefined" || typeof window.pay !== "function") {
      setPaymentState("error");
      setPaymentMessage("Pi payment not available.");
      return;
    }

    setPaymentState("loading");
    setPaymentMessage("");

    window.pay({
      amount,
      memo: product.name,
      metadata: { productId: product.id, courseId: course.id },
      onComplete: () => {
        setPaymentState("success");
        setPaymentMessage(`Successfully enrolled in ${course.title}!`);
        onEnroll(course);
      },
      onError: (error: any) => {
        setPaymentState("error");
        setPaymentMessage(error?.message || "Payment failed. Please try again.");
      },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col max-w-[430px] mx-auto"
      style={{ backgroundColor: "#030712" }}
    >
      {/* Header with back button */}
      <div
        className="flex items-center gap-3 px-4 py-3 sticky top-0 z-10"
        style={{ backgroundColor: "#0d0820", borderBottom: "1px solid #1e1040" }}
      >
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
          style={{ backgroundColor: "#1e1040", color: "#fff" }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-white font-bold text-sm truncate flex-1">
          {course.title}
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Thumbnail */}
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold"
            style={{ backgroundColor: "#7C3AED", color: "#fff" }}
          >
            {course.level}
          </div>
        </div>

        <div className="px-4 py-4 space-y-5">
          {/* Title section */}
          <div>
            <h2 className="text-white text-xl font-bold leading-tight">
              {course.title}
            </h2>
            <p
              className="text-sm font-semibold mt-1 text-right"
              dir="rtl"
              style={{ color: "#F59E0B" }}
            >
              {course.titleAr}
            </p>
          </div>

          {/* Instructor section */}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
              style={{ backgroundColor: "#7C3AED" }}
            >
              {course.instructor.charAt(0)}
            </div>
            <div>
              <p className="text-gray-400 text-xs">Instructor</p>
              <p className="text-white font-semibold text-sm">{course.instructor}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-2">
            <div
              className="rounded-xl p-3 flex items-center gap-2"
              style={{ backgroundColor: "#130d2e" }}
            >
              <Clock className="w-4 h-4" style={{ color: "#F59E0B" }} />
              <div>
                <p className="text-gray-400 text-[10px]">Duration</p>
                <p className="text-white font-bold text-sm">{course.duration}h</p>
              </div>
            </div>
            <div
              className="rounded-xl p-3 flex items-center gap-2"
              style={{ backgroundColor: "#130d2e" }}
            >
              <BookOpen className="w-4 h-4" style={{ color: "#7C3AED" }} />
              <div>
                <p className="text-gray-400 text-[10px]">Lessons</p>
                <p className="text-white font-bold text-sm">{course.lessons}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {course.description}
            </p>
            <p
              className="text-gray-400 text-xs leading-relaxed mt-2 text-right"
              dir="rtl"
            >
              {course.descriptionAr}
            </p>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="text-white font-bold text-base mb-3">Curriculum</h3>
            <div className="space-y-2">
              {course.curriculum.map((lesson, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: "#130d2e" }}
                >
                  <span
                    className="font-bold text-xs w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#7C3AED", color: "#fff" }}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-gray-200 text-sm leading-tight flex-1">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-white font-bold text-base mb-3">Requirements</h3>
            <div className="space-y-2">
              {course.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span
                    className="text-base mt-0.5 flex-shrink-0"
                    style={{ color: "#F59E0B" }}
                  >
                    •
                  </span>
                  <p className="text-gray-300 text-sm leading-tight">{req}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rating and Students */}
          <div
            className="flex items-center justify-between p-4 rounded-xl"
            style={{ backgroundColor: "#130d2e" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">
                  {course.rating}
                </span>
              </div>
              <span className="text-gray-400 text-xs">
                ({course.students.toLocaleString()} students)
              </span>
            </div>
            <Award className="w-5 h-5" style={{ color: "#F59E0B" }} />
          </div>
        </div>
      </div>

      {/* Fixed bottom enrollment section */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-4 py-3 flex flex-col gap-2"
        style={{ backgroundColor: "#0d0820", borderTop: "1px solid #1e1040" }}
      >
        {/* Payment feedback */}
        {paymentState === "success" && (
          <div
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
            style={{ backgroundColor: "#052e16", color: "#4ade80" }}
          >
            <span>✓ Enrollment successful!</span>
          </div>
        )}

        {paymentState === "error" && (
          <div
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
            style={{ backgroundColor: "#2d0a0a", color: "#ef4444" }}
          >
            <span>✕ {paymentMessage}</span>
          </div>
        )}

        {/* Enroll button */}
        {paymentState !== "success" && (
          <button
            onClick={handleEnrollWithPi}
            disabled={!isProductReady || paymentState === "loading"}
            className="w-full py-3 rounded-lg font-bold text-white text-sm transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            style={{
              backgroundColor: isProductReady ? "#7C3AED" : "#3b1f7a",
            }}
          >
            {paymentState === "loading" ? (
              <>
                <span className="animate-spin">⟳</span>
                Processing...
              </>
            ) : (
              <>
                Enroll Now — π {amount !== null ? amount : course.price}
              </>
            )}
          </button>
        )}

        {paymentState === "success" && (
          <button
            onClick={onBack}
            className="w-full py-3 rounded-lg font-bold text-white text-sm transition-all active:scale-95"
            style={{ backgroundColor: "#166534" }}
          >
            Back to Home
          </button>
        )}
      </div>
    </div>
  );
}
