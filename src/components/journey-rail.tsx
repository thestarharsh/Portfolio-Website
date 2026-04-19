"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface JourneySection {
  id: string;
  label: string;
}

interface JourneyRailProps {
  sections: JourneySection[];
}

export function JourneyRail({ sections }: JourneyRailProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.25,
  });

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="pointer-events-auto rounded-2xl border border-border/70 bg-card/70 px-3 py-4 shadow-2xl shadow-primary/10 backdrop-blur-xl">
        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-border/80" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-0 h-full w-px origin-top bg-gradient-to-b from-primary via-blue-400 to-violet-400"
          />
          <div className="space-y-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2"
              >
                <span
                  className={cn(
                    "size-3 rounded-full border border-border bg-background transition-colors",
                    activeId === section.id && "border-primary bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]"
                  )}
                />
                <span
                  className={cn(
                    "text-xs text-muted-foreground transition-colors",
                    activeId === section.id && "text-foreground"
                  )}
                >
                  {section.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

