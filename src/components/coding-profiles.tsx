"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodechef, SiCodeforces } from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

interface CodingProfileProps {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const CodingProfile = ({ name, url, icon }: CodingProfileProps) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-muted/50 transition-colors h-full"
    aria-label={name}
  >
    <div className="text-4xl mb-2">{icon}</div>
    <span className="text-sm font-medium text-center">{name}</span>
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
    },
    {
      name: "GeeksforGeeks",
      url: profiles.geeksforgeeks,
      icon: <SiGeeksforgeeks className="text-green-600" />,
    },
    {
      name: "CodeChef",
      url: profiles.codechef,
      icon: <SiCodechef className="text-yellow-600" />,
    },
    {
      name: "CodeForces",
      url: profiles.codeforces,
      icon: <SiCodeforces className="text-red-600" />,
    },
  ];

  return (
    <section className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Coding Profiles
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Coding Journey
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I actively participate in competitive programming and problem-solving on various platforms.
              Here are some of my profiles where I practice and compete.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto px-4">
        {profileLinks.map((profile) => (
          <CodingProfile
            key={profile.name}
            name={profile.name}
            url={profile.url}
            icon={profile.icon}
          />
        ))}
      </div>
    </section>
  );
}
