export const navLinks = [
  {
    id: 1,
    url: "#home",
    label: "Home",
  },
  {
    id: 2,
    url: "#about",
    label: "About",
  },
  {
    id: 4,
    url: "#experience",
    label: "Experience",
  },
];

export const sections = [
  {
    title: "My journey",
    description:
      "Hi there! My name is Chloe Daull, a recent Computer Science Graduate from Concordia University. I love learning about software development, data analytics and Machine Learning.",
    listItems: [
      "Concordia University CS graduate",
      "Grew up in Singapore",
      "French and Korean",
      "Billingual: EN/FR",
    ],
  },
  {
    title: "Technologies",
    description:
      "I have experience working with an array of languages, framworks and tools. Here are some of them:",
    listItems: ["Java", "React", "Next.js", "TypeScript", "Tailwind", "Python"],
  },
  {
    title: "Experience",
    description:
      "Delivered real-world projects in finance, analytics, and web development across multinational environments.",
    listItems: [
      "Capital Markets Intern",
      "Web Development",
      "AWS Cloud Practitioner Certificate",
      "Concordia Research",
    ],
  },
  {
    title: "Locations",
    description:
      "Currently living in Montreal, open to exploring opportunities anywhere from Montreal, Europe and Singapore. My visa situation in each location:",
    listItems: ["EU passport", "Singapore PR", "Canada PGWP - 3 years"],
  },
];

export const experiences = [
  {
    title: "Software Developer (Contract)",
    date: "June 2025 - October 2025",
    location: "Montreal, QC",
    job: "369 TechLabs",
    contents: [
      "Developed a user-facing application with React, Node.js, and TypeScript, implementing 20+ core features including item tracking, data search, and real-time updates for a smart home device.",
      "Built and maintained back-end APIs in Python and JavaScript to synchronize records between external MariaDB and internal OPFS databases, using Redux to ensure real-time UI updates.",
      "Designed and implemented MySQL databases to manage information for 60+ tracked items, creating efficient schemas and queries that improved data retrieval speed and supported real-time application features.",
      "Designed embedded software for a microcontroller-based device, integrating hardware and software to enable efficient device operation and persistent tracking of an expanding range of categorized objects.",
      "Worked in an Agile environment using Jira for sprint planning, backlog management, and task tracking.",
    ],
  },
  {
    title: "Software Developer Intern",
    date: "Jan 2025 - April 2025",
    location: "Laval, QC",
    job: "WSP Canada",
    contents: [
      "Developed in-house applications with HTML/CSS enhancements, improving usability for a department of 200+ employees.",
      "Programmed and deployed a Python-based Excel processing pipeline on Azure Functions, containerized with Docker and automated via Power Automate, reducing manual processing time by 80%.",
      "Built a PDF contract converter in Python using PyPDF2 and Pandas to automate organization of 20,000+ client contracts, achieving a 70% reduction in contract transfer time.",
    ],
  },
  {
    title: "Smart Sales Intern",
    date: "May 2023 - August 2023",
    location: "Montreal, QC",
    job: "Bombardier",
    contents: [
      "Monitored and tracked customer aircraft flight hours and maintenance status.",
      "Developed an AI-integrated aircraft maintenance prediction model using MS PowerApps and Power BI, improving maintenance forecasting accuracy by 40%.",
      "Collaborated in a team of 4 engineers, managing cross-functional workflows, setting sprint goals, and conducting daily stand-ups to ensure timely project delivery.",
    ],
  },
];

export const folders = [
  {
    id: "en",
    label: "English CV",
    cvLink: "anglaisMontrealCV.pdf",
    thumbnail: "/CVanglaisThumbnail.webp",
  },
  {
    id: "fr",
    label: "French CV",
    cvLink: "françaisMontrealCV.pdf",
    thumbnail: "/CVfrancaisThumbnail.webp",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kookmin Bank Dashboard",
    date: "Summer 2023",
    shortDesc: "Capital Markets analytics platform",
    image: "/projects/kookmin-dashboard.jpg",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    date: "2025",
    shortDesc: "Modern React/Next.js portfolio site",
    image: "/projects/portfolio.jpg",
    link: "https://example.com/project1",
  },
  {
    id: 3,
    title: "Concordia Research",
    date: "2024",
    shortDesc: "Learned Index Structures - Java/ML",
    image: "/projects/research.jpg",
    link: "https://example.com/project1",
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/chloe-daull/",
    icon: "linkedin1.svg",
  },
  {
    name: "Github",
    href: "https://github.com/chloedaull",
    icon: "github.svg",
  },
];
