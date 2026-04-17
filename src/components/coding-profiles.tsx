"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodechef, SiCodeforces } from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

interface CodingProfileProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  rank: string;
}

const CodingProfile = ({ name, url, icon, rank }: CodingProfileProps) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="h-full"
    aria-label={name}
  >
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-border/70 bg-card/50 p-4 text-center shadow-xl shadow-primary/5 backdrop-blur-sm"
    >
      <div className="text-4xl">{icon}</div>
      <span className="text-sm font-semibold">{name}</span>
      <Badge variant="secondary" className="rounded-full px-2 py-0 text-[10px]">
        {rank}
      </Badge>
    </motion.div>
  </Link>
);

interface CodingProfilesProps {
  profiles: {
    leetcode: string;
    geeksforgeeks: string;
    codechef: string;
    codeforces: string;
  };
}

export function CodingProfiles({ profiles }: CodingProfilesProps) {
  const profileLinks = [
    {
      name: "LeetCode",
      url: profiles.leetcode,
      icon: <FaCode className="text-orange-500" />,
      rank: "Problem Solving",
    },
    {
      name: "GeeksforGeeks",
      url: profiles.geeksforgeeks,
      icon: <SiGeeksforgeeks className="text-green-600" />,
      rank: "DSA Practice",
    },
    {
      name: "CodeChef",
      url: profiles.codechef,
      icon: <SiCodechef className="text-yellow-600" />,
      rank: "Contest Arena",
    },
    {
      name: "CodeForces",
      url: profiles.codeforces,
      icon: <SiCodeforces className="text-red-600" />,
      rank: "Competitive Mode",
    },
  ];

  return (
    <section className="w-full space-y-10 rounded-3xl border border-border/60 bg-card/50 px-4 py-10 shadow-2xl shadow-primary/10 sm:px-6">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="rounded-full px-3 py-1">Competitive Playground</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Coding Journey
            </h2>
            <p className="max-w-2xl text-muted-foreground md:text-lg">
              I regularly train through contests and timed challenges to sharpen problem solving speed.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {profileLinks.map((profile) => (
          <CodingProfile
            key={profile.name}
            name={profile.name}
            url={profile.url}
            icon={profile.icon}
            rank={profile.rank}
          />
        ))}
      </div>
    </section>
  );
}
