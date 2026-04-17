import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "Harsh Jain",
  initials: "HJ",
  url: "https://portfolio-website-harsh-jain.vercel.app/",
  location: "Pune, Maharashtra",
  locationLink: "https://www.google.com/maps/place/Pune",
  experience: 2,
  description:
    "I'm a Software Engineer specializing in building scalable frontend solutions and dynamic user interfaces. I thrive on solving complex problems and creating seamless digital experiences at innovative tech startups.",
  summary:
    "A Software Engineer (Frontend) specializing in React, with professional experience in building scalable, user-focused web applications. Currently, I work at an adtech startup, developing features used by major agencies like Hyundai, Jeep, Citroën, LimeRoad, and VW, while enhancing engagement through AI-driven solutions. I’ve also solved 1000+ coding problems and achieved notable milestones in competitive programming.",
  avatarUrl: "/myphoto.png",
  resumeUrl: "/resume.pdf",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "HTML5",
    "CSS3",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Tanstack Query",
    "Prisma ORM",
    "OpenAI",
    "Assembly AI",
    "Gemini AI",
    "Data Structures",
    "Algorithms",
    "Git",
    "Linux",
    "Firebase",
    "Appwrite",
    "Java",
    "Python",
    "C/C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "talatiharsh19@gmail.com",
    tel: "+918112200583",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thestarharsh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/engharsh",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/harshjaindev",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@the_star_harsh",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Osmos",
      href: "https://osmos.ai",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Software Engineer",
      logoUrl: "/osmos.png",
      start: "May 2025",
      end: "Present",
      description:
        "Led campaign management flow improvements for a PLG initiative and built Next.js microsites for Ashok Leyland dealers. As a founding engineer in OsmosX, built onboarding journeys for retailers to manage campaigns and reporting across marketplaces. Delivered multiple migration tracks to modernize legacy modules and improve release stability.",
    },
    {
      company: "Osmos",
      href: "https://onlinesales.ai",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Software Engineer Intern",
      logoUrl: "/osmos.png",
      start: "Jun 2024",
      end: "May 2025",
      description:
        "Built and optimized custom audience targeting for Meta and Google campaigns used by multiple agencies. Improved used-car inventory workflows with dynamic forms and tables, and supported ad creative configuration flows for iOS and Android channels.",
    },
    {
      company: "OpenBootcamp",
      badges: [],
      href: "https://theopenbootcamp.com",
      location: "Remote",
      title: "Web Developer Fellow",
      logoUrl: "/theopenbootcamp.jpeg",
      start: "Jan 2024",
      end: "Mar 2024",
      description:
        "Completed a full-stack Web Development fellowship focused on building real-world applications. Gained hands-on experience with HTML, CSS, JavaScript, React, and Node.js. Developed responsive web projects and contributed to collaborative coding exercises, enhancing practical skills in frontend and backend development.",
    },
  ],  
  education: [
    {
      school: "Maharashtra Institute of Technology",
      href: "https://mitwpu.edu.in",
      degree: "B.Tech Computer Science and Engineering",
      logoUrl: "/mitwpu.jpeg",
      start: "2021",
      end: "2025",
      cgpa: "9.26/10"
    },
    {
      school: "St. Anthony's Sr. Sec. School",
      href: "https://sasudaipur.com",
      degree: "Higher Secondary Certificate",
      logoUrl: "/sas.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "St. Anthony's Sr. Sec. School",
      href: "https://sasudaipur.com",
      degree: "Secondary School Certificate",
      logoUrl: "/sas.png",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "instagrep: Instant Grep",
      href: "https://github.com/thestarharsh/instagrep",
      active: true,
      dates: "2026 - Present",
      description:
        "Built an open-source, blazing-fast regex search engine powered by a sparse n-gram inverted index with mmap-backed lookup and compressed postings. Added ripgrep-compatible CLI behavior (50+ flags), a built-in MCP server for AI tools, and production-ready cross-platform support.",
      technologies: [
        "Rust",
        "Sparse N-gram Index",
        "Regex Engine",
        "Mmap",
        "CLI",
        "MCP"
      ],
      links: [
        { type: "Source", href: "https://github.com/thestarharsh/instagrep", icon: <Icons.github className="size-3" /> }
      ],
      image: "",
      video: "",
    },
    {
      title: "NewTube: A Video Streaming Platform",
      href: "https://newtube-next16.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Developed a full-stack video platform inspired by YouTube with home feed, watch page, creator studio, subscriptions, nested comments, watch history, and search suggestions. Implemented authenticated creator workflows, Mux-powered upload/playback pipeline, typed APIs with tRPC, and scalable data modeling with Drizzle ORM. Added responsive category and trending discovery flows, robust video visibility controls, and polished UX states for loading, empty results, and creator interactions.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Drizzle ORM",
        "tRPC",
        "Clerk",
        "Mux"
      ],
      links: [
        { type: "Live", href: "https://newtube-next16.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/thestarharsh/new-tube", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Slide: An Instagram Chat Automation Platform",
      href: "https://slide-next15.vercel.app",
      dates: "Jan 2025 - May 2025",
      active: true,
      description:
        "Developed a platform to automate Instagram interactions with Comment and DM triggers. Engineered AI-driven chat models that dynamically generate replies, increasing engagement by up to 300%. Added subscription-based AI automation at ₹999/month and integrated Razorpay for secure, seamless payments. Real-time slide presentation functionality also included, allowing collaborative content creation and sharing.",
      technologies: [
        "React",
        "Next.js",
        "Webhooks",
        "Instagram API",
        "AI Integration",
        "Razorpay"
      ],
      links: [
        { type: "Live", href: "https://slide-next15.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/thestarharsh/slide", icon: <Icons.github className="size-3" /> },
      ],
      image: "/slide-preview.png",
      video: "",
    },
    {
      title: "Gitsync AI: GitHub & Audio Analyzer",
      href: "https://gitsync-next15.vercel.app",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Built a platform to analyze GitHub repositories and answer developer queries using AI. Stored repository files as vector embeddings for fast retrieval, provided AI-powered summaries of recent commits, and integrated Assembly AI to process audio files and generate meeting notes. Razorpay implemented for credit-based usage (1 file = 1 credit).",
      technologies: [
        "React",
        "Next.js",
        "OpenAI API",
        "Assembly AI",
        "Vector Embeddings",
        "Prisma ORM",
        "Razorpay"
      ],
      links: [
        { type: "Live", href: "https://gitsync-next15.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/thestarharsh/gitsync", icon: <Icons.github className="size-3" /> },
      ],
      image: "/gitsync-preview.png",
      video: "",
    },
    {
      title: "Jira Clone: A Project Management Platform",
      href: "https://jira-clone-next15.vercel.app",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Developed a Jira alternative with Workspaces, Projects, Epics, Tasks, Kanban, and Calendar views. Implemented Invite System and Role-Based Access Control for secure collaboration. Added real-time task editing, deletion, and image uploads, with Task Analytics tracking progress and improving productivity by 30%.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Hono",
        "React Query",
        "Appwrite"
      ],
      links: [
        { type: "Live", href: "https://jira-clone-next15.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/thestarharsh/jira-clone", icon: <Icons.github className="size-3" /> },
      ],
      image: "/jira-clone-preview.png",
      video: "",
    },
    {
      title: "CozyGripz: A Phone Case E-Commerce Platform",
      href: "https://cozygripz.com",
      dates: "Jun 2025 - Jul 2025",
      active: true,
      description:
        "Built a live e-commerce platform for phone cases with optimized product listing, checkout, and payment flows. Integrated Razorpay and tuned UX interactions for conversion-focused browsing on mobile and desktop.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Razorpay",
        "Tailwind CSS",
        "Responsive Design"
      ],
      links: [
        { type: "Live", href: "https://cozygripz.com", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/thestarharsh/CozyTheme", icon: <Icons.github className="size-3" /> }
      ],
      image: "/cozygripz-preview.png",
      video: "",
    },
    {
      title: "Violet Mocks: Animated Landing Page",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Built a small, visually rich landing page with GSAP-driven motion, scroll transitions, and polished interaction timing for a modern showcase experience.",
      technologies: [
        "GSAP",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      title: "Goldman Sachs Software Engineering Simulation",
      dates: "January 2024 - March 2024",
      location: "Virtual",
      description:
        "Conducted IT security assessment at Goldman Sachs, identifying outdated password hashing vulnerabilities. Cracked weak passwords using Hashcat software and proposed stronger hashing algorithms like bcrypt or Argon2 with salting. Drafted comprehensive security recommendations and implemented actionable IT security improvements.",
      image:
        "https://www.pngmart.com/files/23/Goldman-Sachs-Logo-PNG-Image.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "JP Morgan Chase Software Engineering Simulation",
      dates: "January 2024 - March 2024",
      location: "Virtual",
      description:
        "Configured secure development environment for Python3 and resolved repository conflicts. Built real-time financial dashboard using JPMorgan Chase Perspective library for live graph visualization. Utilized GitHub for version control and collaboration in an enterprise environment.",
      image:
        "https://www.pngplay.com/wp-content/uploads/3/JPMorgan-Chase-Logo-Background-PNG-Image.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
  codingProfiles: {
    leetcode: "https://leetcode.com/u/the_star_harsh/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/talatiharsh19",
    codechef: "https://www.codechef.com/users/harshjainmit",
    codeforces: "https://codeforces.com/profile/the_star_harsh"
  }
} as const;
