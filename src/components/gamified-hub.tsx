"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface Achievement {
  title: string;
  detail: string;
}

interface SkillNode {
  name: string;
  level: number;
}

interface GamifiedHubProps {
  achievements: Achievement[];
  skillTree: SkillNode[];
}

type Tab = "achievements" | "skills";

const tabs: { key: Tab; label: string }[] = [
  { key: "achievements", label: "Milestones" },
  { key: "skills", label: "Skill Levels" },
];

export function GamifiedHub({ achievements, skillTree }: GamifiedHubProps) {
  const [activeTab, setActiveTab] = useState<Tab>("achievements");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/65 p-5 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.12),transparent_30%),radial-gradient(circle_at_85%_5%,hsl(var(--accent)/0.14),transparent_35%)]" />
      <div className="relative space-y-6">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-border/70 bg-background/60 p-1.5 sm:inline-flex sm:rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={cn(
                "relative rounded-xl px-4 py-2 text-sm transition-colors sm:rounded-full",
                activeTab === tab.key
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab(tab.key)}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="active-snapshot-tab"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", duration: 0.45 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid gap-3 md:grid-cols-3"
            >
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="h-full border border-border/70 bg-background/50">
                  <CardHeader className="space-y-2 p-4 sm:p-5">
                    <Badge variant="secondary" className="w-fit rounded-full px-2 py-0.5">
                      <Sparkles className="mr-1 size-3.5" />
                      Completed
                    </Badge>
                    <CardTitle className="text-base leading-tight">{achievement.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">{achievement.detail}</p>
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {skillTree.map((skill) => (
                <Card key={skill.name} className="border border-border/70 bg-background/50">
                  <CardHeader className="gap-2 p-4 pb-2 sm:flex-row sm:items-center sm:justify-between sm:p-5 sm:pb-2">
                    <CardTitle className="text-sm">{skill.name}</CardTitle>
                    <Badge variant="secondary" className="rounded-full px-2 py-0.5 text-xs">
                      Level {skill.level}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 pb-4 sm:p-5 sm:pt-0 sm:pb-5">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary/70 to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level * 10}%` }}
                        transition={{ duration: 0.45 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
