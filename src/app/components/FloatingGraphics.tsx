// components/FloatingGraphic.tsx
"use client";

import { useEffect, useState } from "react";

export default function FloatingGraphic() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="hidden lg:block absolute right-10 top-1/3 transition-transform duration-300"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="relative w-80 h-80">
        {/* Mock stock chart using SVG */}
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Chart line */}
          <polyline
            points="20,200 60,150 100,180 140,120 180,160 220,140 260,190 300,170 340,210 380,160"
            fill="none"
            stroke="#818cf8"
            strokeWidth="4"
          />

          {/* Area under curve */}
          <polygon
            points="20,200 60,150 100,180 140,120 180,160 220,140 260,190 300,170 340,210 380,160 380,400 20,400"
            fill="url(#chartGradient)"
          />

          {/* Data points */}
          {[
            { x: 20, y: 200 },
            { x: 60, y: 150 },
            { x: 100, y: 180 },
            { x: 140, y: 120 },
            { x: 180, y: 160 },
            { x: 220, y: 140 },
            { x: 260, y: 190 },
            { x: 300, y: 170 },
            { x: 340, y: 210 },
            { x: 380, y: 160 },
          ].map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#6366f1"
              className="hover:r-8 transition-all duration-200"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
