export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Project",
    href: "#project",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Minor Cineplex - Booking ticket website",
    desc: "An online movie ticket booking system facilitates the purchasing of movie tickets to its customers. E-ticketing systems allow customers to browse through movies currently playing and book seats, anywhere and anytime. The system includes an admin management module, enabling administrators to manage movies, cinemas, users, and showtimes.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://minor-cineplex-nine.vercel.app/",
    github: "https://github.com/Thammaruthai/Minor-Cineplex",
    texture: "/textures/project/minorc.mp4",
    logo: "/assets/logo.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 5,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 6,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  {
    title: "Blog Post - A personal blog platform",
    desc: "A platform for sharing articles on topics I've learned about, making content accessible for readers. Features include category filtering, article title search.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://blogpost-sirawit.vercel.app/",
    github: "https://github.com/Sirawit-Boon/sirawit-blogpost",
    texture: "/textures/project/Blogpost.mp4",
    logo: "/assets/blog.png",
    logoStyle: {
      backgroundColor: "#75716B",
      border: "0.2px solid #43403B",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1 : isMobile ? 1 : isTablet ? 1.5 : 1.7,
    deskPosition: isSmall
      ? [0, -0.5, 2.0]
      : isMobile
      ? [0, -0.1, 2.0]
      : [-0.1, -1.7, 2.5],
    javascriptPosition: isSmall
      ? [2, -1, 0]
      : isMobile
      ? [2, -1, 0]
      : isTablet
      ? [1, 2, 0]
      : [4, -2.5, 1.9],
    javascriptRotation: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [-4.5, -4.7, 0]
      : [1.6, -4.7, 0],
    javascriptScale: isSmall ? 0.02 : isMobile ? 0.03 : 0.04,
    reactLogoPosition: isSmall
      ? [2, 1, 0]
      : isMobile
      ? [2, 1.5, 0]
      : isTablet
      ? [2, 2, 0]
      : [5, 2, 0],
    reactScale: isSmall ? 0.005 : isTablet ? 0.007 : 0.01,
    HtmlPosition: isSmall
      ? [-2, 1.5, -10]
      : isMobile
      ? [-3, 2, -10]
      : isTablet
      ? [-2, 1.3, 0]
      : [-9, 1, -10],
    HtmlRotation: isSmall
      ? [1.5, -3.2, 1.5]
      : isMobile
      ? [2, -3.2, 1.5]
      : isTablet
      ? [-1.5, 0, -1.5]
      : [-1.5, 0, -1.5],
    HtmlScale: isSmall ? 0.005 : isTablet ? 0.004 : 0.01,
    CssPosition: isSmall
      ? [-2, -1.5, -10]
      : isMobile
      ? [-3, 1, -10]
      : isTablet
      ? [-1, 2, 0]
      : [-9, -7, -10],
    CssRotation: isSmall
      ? [1.5, -3.2, 1.5]
      : isMobile
      ? [2, -3.2, 1.5]
      : isTablet
      ? [-1.5, 0, -1.5]
      : [-1.6, 0, -1.6],
    CssScale: isSmall ? 0.005 : isTablet ? 0.004 : 0.01,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Fisheries Biologist",
    pos: "Strategy and Planing Division, Department of Fisheries",
    duration: "2023 - 2024",
    title:
      "Analyzed and reported disbursement results and performance outcomes for 150 research projects annually while organizing a training on research impact pathways for 167 participants with a budget of 735,000 baht, enabling them to evaluate their projects' results and impacts.",
    icon: "/assets/fisheries_thailand.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Fisheries Biologist",
    pos: "Fisheries and Fleet Management Division, Department of Fisheries",
    duration: "2022 - 2023",
    title:
      "Monitored loading and unloading at Kooddoo Port and reviewed transshipment activities using rule-based guidelines, recording details for CCTV review to ensure compliance with the submitted plan and reducing CCTV inspection review time by 35%.",
    icon: "/assets/fisheries_thailand.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "General Administration Officer",
    pos: "Personnel Division, Department of Land",
    duration: "2020 - 2022",
    title:
      "Coordinated communication between internal divisions, maintained inventory records and distributed supplies, and managed official correspondence with across all divisions.",
    icon: "/assets/land_thailand.png",
    animation: "salute",
  },
];

export const techStack = [
  {
    id: 1,
    name: "React.js",
    path: "/assets/react.svg",
  },
  {
    id: 2,
    name: "Next.js",
    path: "/assets/nextjs.png",
  },
  {
    id: 3,
    name: "TailwindCSS",
    path: "/assets/tailwindcss.png",
  },
  {
    id: 4,
    name: "JavaScript",
    path: "/assets/js.png",
  },
  {
    id: 5,
    name: "Node.js",
    path: "/assets/nodejs.png",
  },
  {
    id: 6,
    name: "PostgreSQL",
    path: "/assets/postgres.png",
  },
];
