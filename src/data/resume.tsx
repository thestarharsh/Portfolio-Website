import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "Harsh Jain",
  initials: "HJ",
  url: "https://harsh-jain.io",
  location: "Pune, Maharashtra",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "From Uncertain Beginnings to Thriving as a Software Engineer: Driven by a passion for problem-solving and a commitment to helping others. Actively networking on LinkedIn.",
  summary:
    "In 2021, I dove into a Computer Science and Engineering degree and emerged as a Software Engineer. Now, I'm bringing my frontend skills to life at an innovative advertising services startup, where I craft dynamic UIs that make an impact.",
  avatarUrl: "/myphoto.png",
  skills: [
    "Java",
    "Data Structures",
    "Algorihthms",
    "C/C++",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Redux",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Express.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://leetcode.com/u/the_star_harsh/", icon: CodeIcon, label: "LeetCode"},
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
        url: "https://www.linkedin.com/in/harsh-jain-635636218/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/the_star_harsh",
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
      company: "OnlineSales.ai",
      href: "https://hyperlocal.onlinesales.ai",
      badges: [],
      location: "Pune",
      title: "Software Design Engineer Intern",
      logoUrl: "/onlinesales-ai.png",
      start: "Jun 2024",
      end: "Present",
      description:
        "Since June 2024, I have been working in Pune, Maharashtra, India, where I implemented solutions for broadly defined problems related to advertising services, leading to a 3X increase in demand generation. I developed code using JavaScript to build large-scale, robust distributed systems for over 1200 channel partners. I also built and deployed new features for admin dashboards to production, which accelerated application development. Additionally, I integrated APIs into the frontend to enhance functionality and improve user experience.",
    },
    {
      company: "OpenBootcamp",
      badges: [],
      href: "https://theopenbootcamp.com",
      location: "Remote",
      title: "Web Developer Fellow",
      logoUrl: "/theopenbootcamp.jpeg",
      start: "Mar 2024",
      end: "May 2024",
      description:
        "From March to May 2024, I completed an intensive 8-week full-stack web development internship program remotely, gaining hands-on experience in web development. During this period, I mastered front-end technologies, including JavaScript, HTML5, CSS, and React.js, while also developing back-end skills with Node.js, Express, and MongoDB. I demonstrated strong collaboration and problem-solving abilities by working on real-world projects and assignments throughout the program.",
    },
  ],
  education: [
    {
      school: "MIT World Peace University",
      href: "https://mitwpu.edu.in",
      degree: "B.Tech Computer Science",
      logoUrl: "/mitwpu.jpeg",
      start: "2021",
      end: "2025",
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
      degree: "Secondary Secondary Certificate",
      logoUrl: "/sas.png",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Friends and Bills",
      href: "https://friends-and-bills.netlify.app/",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "I built a responsive user interface using HTML5, CSS3, and JavaScript to ensure compatibility with all screen sizes. I implemented visualization features by adding graphs to display split expenses on the front end.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://friends-and-bills.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fandbpreview.png",
      video: "",
    },
    {
      title: "Metro Discount System",
      href: "https://colab.research.google.com/drive/1U3IBEPlAII-56aYC2arWhNzg1Kj9-FG_?usp=sharing",
      dates: "Oct 2023 - Dec 2024",
      active: true,
      description:
        "Developed a Python script to process student records, generate QR codes, and automate verification, achieving 95% accuracy and efficiency.",
      technologies: [
        "Python",
        "Numpy",
        "Faker",
        "Colab",
        "Data Cleaning",
      ],
      links: [
        {
          type: "Source",
          href: "https://colab.research.google.com/drive/1U3IBEPlAII-56aYC2arWhNzg1Kj9-FG_?usp=sharing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mdspreview.png",
      video: "",
    },
  ],
  certifications: [
    {
      title: "Goldman Sachs Software Engineering Simulation",
      dates: "August 2024",
      location: "Virtual",
      description:
        "Completed Goldman Sachs Virtual Experience Program in software engineering, focusing on IT security. Detected vulnerabilities by cracking MD5 hashed passwords using HashCat. Recommended using stronger hashing algorithms like bcrypt or Argon2 with salting. Drafted a memo proposing actionable IT security improvements.",
      image:
        "https://www.pngmart.com/files/23/Goldman-Sachs-Logo-PNG-Image.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "JP Morgan Chase Software Engineering Simulation",
      dates: "Febraury 2024",
      location: "Virtual",
      description:
        "I configured a local development environment using TypeScript, Python, and essential tools, fixing broken files in the repository to ensure accurate web application output as part of an open-source contribution. I utilized JPMorgan Chase's Perspective library for live graph visualization and employed GitHub for version control and collaboration.",
      image:
        "https://www.pngplay.com/wp-content/uploads/3/JPMorgan-Chase-Logo-Background-PNG-Image.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
