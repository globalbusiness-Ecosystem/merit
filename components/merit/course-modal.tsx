"use client";

import { useState } from "react";
import { X, Star, Users, BookOpen, Award, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { Course } from "@/lib/merit-data";
import { usePiAuth } from "@/contexts/pi-auth-context";
import { PRODUCT_CONFIG } from "@/lib/product-config";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export function CourseModal({ course, onClose, onEnroll }: CourseModalProps) {
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
      metadata: { productId: product.id },
      onComplete: () => {
        setPaymentState("success");
        setPaymentMessage(`Successfully enrolled! You now have access to this course.`);
        if (course) onEnroll(course);
      },
      onError: (error: any) => {
        setPaymentState("error");
        setPaymentMessage(error?.message || "Payment failed. Please try again.");
      },
    });
  };

  const handleClose = () => {
    setPaymentState("idle");
    setPaymentMessage("");
    onClose();
  };

  if (!course) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 rounded-t-3xl overflow-hidden animate-slide-up"
        style={{ backgroundColor: "#0d0820", border: "1px solid #1e1040" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-700" />
        </div>

        {/* Thumbnail */}
        <div className="relative mx-4 mt-2 rounded-2xl overflow-hidden aspect-video">
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
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-black/60"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-3">
          {/* Title */}
          <div>
            <h2 className="text-white font-bold text-lg leading-tight">
              {course.title}
            </h2>
            <p
              className="text-sm font-medium mt-0.5 text-right"
              dir="rtl"
              style={{ color: "#F59E0B" }}
            >
              {course.titleAr}
            </p>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#7C3AED" }}
            >
              {course.instructor.charAt(0)}
            </div>
            <span className="text-gray-300 text-sm">{course.instructor}</span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            <div
              className="flex flex-col items-center py-3 rounded-xl gap-1"
              style={{ backgroundColor: "#130d2e" }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-bold">{course.rating}</span>
              <span className="text-gray-500 text-[9px]">Rating</span>
            </div>
            <div
              className="flex flex-col items-center py-3 rounded-xl gap-1"
              style={{ backgroundColor: "#130d2e" }}
            >
              <Users className="w-4 h-4" style={{ color: "#7C3AED" }} />
              <span className="text-white text-sm font-bold">
                {course.students.toLocaleString()}
              </span>
              <span className="text-gray-500 text-[9px]">Students</span>
            </div>
            <div
              className="flex flex-col items-center py-3 rounded-xl gap-1"
              style={{ backgroundColor: "#130d2e" }}
            >
              <BookOpen className="w-4 h-4" style={{ color: "#7C3AED" }} />
              <span className="text-white text-sm font-bold">{course.lessons}</span>
              <span className="text-gray-500 text-[9px]">Lessons</span>
            </div>
          </div>

          {/* Payment feedback */}
          {paymentState === "success" && (
            <div
              className="flex items-start gap-3 rounded-xl px-4 py-3"
              style={{ backgroundColor: "#052e16", border: "1px solid #166534" }}
            >
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-green-400 text-sm font-semibold">Enrollment Confirmed!</p>
                <p className="text-green-300 text-xs mt-0.5">{paymentMessage}</p>
                <p className="text-green-300 text-xs mt-0.5" dir="rtl">تم التسجيل بنجاح</p>
              </div>
            </div>
          )}

          {paymentState === "error" && (
            <div
              className="flex items-start gap-3 rounded-xl px-4 py-3"
              style={{ backgroundColor: "#2d0a0a", border: "1px solid #7f1d1d" }}
            >
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-300 text-sm">{paymentMessage}</p>
            </div>
          )}

          {/* Enroll CTA */}
          {paymentState !== "success" && (
            <div
              className="rounded-2xl px-5 py-4 space-y-3"
              style={{ backgroundColor: "#130d2e", border: "1px solid #3b1f7a" }}
            >
              {/* Price display */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs">Course Price</p>
                  <p className="text-2xl font-extrabold" style={{ color: "#F59E0B" }}>
                    {amount !== null ? `π ${amount}` : `π ${course.price}`}
                  </p>
                  {product && (
                    <p className="text-gray-500 text-[10px] mt-0.5">{product.name}</p>
                  )}
                </div>
                {!product && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#1c1033" }}>
                    <AlertCircle className="w-3.5 h-3.5 text-yellow-500" />
                    <span className="text-yellow-500 text-[10px] font-medium">Loading...</span>
                  </div>
                )}
              </div>

              {/* Enroll button */}
              <button
                onClick={handleEnrollWithPi}
                disabled={!isProductReady || paymentState === "loading"}
                className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: isProductReady ? "#7C3AED" : "#3b1f7a",
                }}
              >
                {paymentState === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    {amount !== null
                      ? `Enroll Now — π ${amount}`
                      : "Enroll Now with Pi"}
                  </>
                )}
              </button>

              {!isProductReady && paymentState !== "loading" && (
                <p className="text-center text-gray-500 text-[10px]">
                  {!product ? "Fetching product details..." : "Pi payment initializing..."}
                </p>
              )}
            </div>
          )}

          {/* Course access button after success */}
          {paymentState === "success" && (
            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all active:scale-95"
              style={{ backgroundColor: "#166534" }}
            >
              Start Learning
            </button>
          )}

          {/* Pi badge */}
          <div className="flex items-center justify-center gap-1.5 pb-2">
            <Award className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
            <span className="text-xs text-gray-400">Get π Certified upon completion</span>
          </div>
        </div>
      </div>
    </>
  );
}
