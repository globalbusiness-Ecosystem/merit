"use client";

import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "1,000+ Courses Available",
  "50K+ Students Enrolled",
  "Programming · Business · Design · Math",
  "Pay with Pi Coin",
  "Arabic & English Support",
  "Get π Certified Today",
  "New: AI & Machine Learning Courses",
  "Language · Science · Islam Categories",
];

export function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="overflow-hidden py-2 border-b"
      style={{ backgroundColor: "#1c1033", borderColor: "#3b1f7a" }}
    >
      <div className="ticker-track flex gap-8 whitespace-nowrap animate-ticker">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="text-xs font-medium shrink-0"
            style={{ color: "#F59E0B" }}
          >
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
