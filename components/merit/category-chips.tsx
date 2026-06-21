"use client";

export const CATEGORIES = [
  { id: "all", label: "All", labelAr: "الكل" },
  { id: "programming", label: "Programming", labelAr: "البرمجة" },
  { id: "business", label: "Business", labelAr: "الأعمال" },
  { id: "design", label: "Design", labelAr: "التصميم" },
  { id: "language", label: "Language", labelAr: "اللغات" },
  { id: "math", label: "Math", labelAr: "الرياضيات" },
  { id: "science", label: "Science", labelAr: "العلوم" },
  { id: "islam", label: "Islam", labelAr: "الإسلام" },
];

interface CategoryChipsProps {
  active: string;
  onSelect: (id: string) => void;
}

export function CategoryChips({ active, onSelect }: CategoryChipsProps) {
  return (
    <div className="px-4 pb-2">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={
                isActive
                  ? {
                      backgroundColor: "#7C3AED",
                      color: "#fff",
                    }
                  : {
                      backgroundColor: "#1e1040",
                      color: "#a78bfa",
                    }
              }
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
