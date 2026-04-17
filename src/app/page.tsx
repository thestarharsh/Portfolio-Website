import { CertificationCard } from "@/components/certification-card";
import { GamifiedHub } from "@/components/gamified-hub";
import dynamic from "next/dynamic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCircle2, Download, Mail } from "lucide-react";

const CodingProfiles = dynamic(
  () => import("@/components/coding-profiles").then((mod) => mod.CodingProfiles),
  { ssr: false }
);
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const instagrepProject = DATA.projects.find((project) =>
  project.title.toLowerCase().includes("instagrep")
);
const nonInstagrepProjects = DATA.projects.filter(
  (project) => !project.title.toLowerCase().includes("instagrep")
);
const featuredProjects = nonInstagrepProjects.slice(0, 3);
const extraProjects = nonInstagrepProjects.slice(3);
const quickStats = [
  `${DATA.experience}+ YOE in Software Engineering`,
  `${DATA.projects.length}+ Shipped Projects`,
  "1000+ DSA Problems Solved",
];
const achievementData = [
  {
    title: "Product Led Growth Flows",
    detail: "Improved campaign management journeys and reduced flow friction in production.",
  },
  {
    title: "Founding Member at OsmosX",
    detail: "Built onboarding experiences for retailers managing campaigns and reporting.",
  },
  {
    title: "Instagrep Open-Source Release",
    detail: "Shipped a sparse n-gram indexed regex search tool with CLI + MCP support.",
  },
];
const skillTreeData = [
  { name: "React + TypeScript", level: 8 },
  { name: "Next.js", level: 8 },
  { name: "LLM Understanding", level: 7 },
  { name: "Developer tooling", level: 7 },
  { name: "Migration & modernization", level: 7 },
];
const instagrepHighlights = [
  "Sparse n-gram inverted index with disk-backed postings and mmap lookups",
  "ripgrep-compatible CLI with 50+ flags for practical drop-in usage",
  "Built-in MCP server so AI coding tools can call fast indexed search directly",
  "Cross-platform support across Linux, macOS, and Windows",
];

export default function Page() {
  const firstName = DATA.name.split(" ")[0];

  return (
    <main className="flex min-h-[100dvh] flex-col gap-10 pb-10 sm:gap-12">
      <section id="hero">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-6 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-10">
          <div className="animated-orb absolute -left-16 top-10 h-44 w-44 rounded-full bg-primary/35" />
          <div className="animated-orb animated-orb-delay absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-accent/25" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.24),transparent_40%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-3xl flex-1 flex-col space-y-4">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Badge className="w-fit rounded-full bg-primary/15 px-3 py-1 text-primary hover:bg-primary/15">
                  Product Focused Frontend Engineer
                </Badge>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={`Building thoughtful web experiences, one polished release at a time.`}
              />
              <BlurFadeText
                className="max-w-2xl text-base text-muted-foreground sm:text-lg"
                delay={BLUR_FADE_DELAY}
                text={`Hi, I'm ${firstName}. ${DATA.description}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap gap-2">
                  {DATA.skills.slice(0, 5).map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full px-2.5 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#projects"
                    className={cn(buttonVariants({ size: "lg" }), "w-full rounded-full px-6 sm:w-auto")}
                  >
                    View Projects
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full rounded-full border-border/70 bg-background/40 px-6 sm:w-auto"
                    )}
                  >
                    <Mail className="mr-2 size-4" />
                    Contact Me
                  </Link>
                  <Link
                    href={DATA.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "w-full rounded-full border-border/70 bg-background/40 px-6 sm:w-auto"
                    )}
                  >
                    <Download className="mr-2 size-4" />
                    Download Resume
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 2} className="self-center lg:self-auto">
              <Avatar className="size-28 border-2 border-primary/30 shadow-xl shadow-primary/20 sm:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-border/60 bg-background/65 px-4 py-3 text-sm text-muted-foreground backdrop-blur"
                >
                  {stat}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose mt-4 max-w-none rounded-2xl border border-border/60 bg-card/60 p-6 text-pretty font-sans text-sm leading-7 text-muted-foreground shadow-xl shadow-primary/5 dark:prose-invert sm:text-base">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="experience" className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-card/55 p-5 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
          </BlurFade>
          <div className="mt-4 space-y-3">
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/55 p-5 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          <div className="mt-4 space-y-3">
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="rounded-3xl border border-border/60 bg-card/55 p-5 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-6">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full px-3 py-1 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="developer-questline" className="pt-1">
        <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
          <GamifiedHub achievements={achievementData} skillTree={skillTreeData} />
        </BlurFade>
      </section>

      {instagrepProject && (
        <section id="instagrep">
          <BlurFade delay={BLUR_FADE_DELAY * 10.8}>
            <div className="rounded-3xl border border-border/60 bg-card/60 p-6 shadow-xl shadow-primary/10 sm:p-8">
              <div className="space-y-4">
                <Badge className="rounded-full px-3 py-1">Open Source</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {instagrepProject.title}
                </h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  instagrep is a high-performance open-source reimplementation of Cursor&apos;s Instant Grep. It builds a sparse n-gram inverted index, prunes to a tiny candidate set, and runs regex only where needed for reliable low-latency search.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {instagrepHighlights.map((point) => (
                    <div key={point} className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/55 p-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <p className="text-xs text-muted-foreground sm:text-sm">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {instagrepProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="https://github.com/thestarharsh/instagrep"
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
                  >
                    View Source
                  </Link>
                </div>
                <div className="space-y-3 rounded-xl border border-border/60 bg-background/60 p-4">
                  <p className="text-xs font-medium text-muted-foreground">Install</p>
                  <code className="block overflow-x-auto rounded-md bg-black/30 px-3 py-2 text-xs break-all sm:text-sm">
                    cargo install --git https://github.com/thestarharsh/instagrep --features mcp
                  </code>
                  <code className="block overflow-x-auto rounded-md bg-black/30 px-3 py-2 text-xs break-all sm:text-sm">
                    instagrep setup
                  </code>
                </div>
              </div>
            </div>
          </BlurFade>
        </section>
      )}

      <section id="projects">
        <div className="w-full space-y-8 py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Work</h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Selected projects that combine product thinking, polished UI, and scalable implementation.
                </p>
              </div>
              <Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer">
                <Badge className="rounded-full px-3 py-1.5">View all on GitHub</Badge>
              </Link>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featuredProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          {extraProjects.length > 0 && (
            <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
              <p className="mb-3 text-sm font-medium text-muted-foreground">More shipped builds</p>
              <div className="flex flex-wrap gap-2">
                {extraProjects.map((project) => (
                  <Link key={project.title} href={project.href} target="_blank" rel="noreferrer">
                    <Badge variant="secondary" className="rounded-full px-3 py-1">
                      {project.title}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="hackathons">
        <div className="w-full space-y-8 py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
                <p className="text-muted-foreground">
                  {DATA.certifications.length} certifications completed across software engineering and security domains.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 divide-y divide-dashed rounded-2xl border border-border/60 border-l bg-card/50 p-3">
              {DATA.certifications.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <CertificationCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="coding-profiles">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <CodingProfiles profiles={DATA.codingProfiles} />
        </BlurFade>
      </section>
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 rounded-3xl border border-border/60 bg-card/60 px-4 py-12 text-center shadow-2xl shadow-primary/10 md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s build something meaningful
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                Open to impactful frontend opportunities and product engineering conversations.
              </p>
              <p className="mx-auto max-w-[600px] text-sm text-muted-foreground">
                For quick replies, reach out on{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-primary hover:underline"
                >
                  X/Twitter
                </Link>{" "}
                or email me at{" "}
                <Link href={`mailto:${DATA.contact.email}`} className="text-primary hover:underline">
                  {DATA.contact.email}
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
