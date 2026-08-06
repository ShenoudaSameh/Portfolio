// Lightweight inline SVG fallback generator to avoid 404 console errors
const getPlaceholder = (text) => 
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="337" viewBox="0 0 600 337"><rect width="100%" height="100%" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2338bdf8" font-family="sans-serif" font-size="24" font-weight="bold">${text}</text></svg>`;

export const portfolioData = {
  personalInfo: {
    name: "Shenouda Sameh",
    role: "Front-End Developer | React Developer",
    email: "shenoudasameh16.12@email.com",
    phones: ["01211586527", "01515727940"],
    github: "https://github.com/ShenoudaSameh",
    linkedin: "https://www.linkedin.com/in/shenouda-sameh-39bb13425/",
    whatsapp: "https://wa.me/201211586527"
  },
projects: [
  {
    id: "taskflow",
    title: "TaskFlow PWA",
    description: "Daily task manager featuring offline local storage persistence, real-time debounced search, light/dark theme toggling, and Playwright end-to-end testing.",
    technologies: ["React 18", "PWA", "LocalStorage", "CSS Modules"],
    image: "/projects/images/taskflow.png",
    fallbackImage: getPlaceholder("TaskFlow PWA"),
    github: "https://github.com/ShenoudaSameh/taskflow",
    demo: "https://date-taskflow.vercel.app/"
  },
  {
    id: "adminx",
    title: "AdminX Dashboard",
    description: "E-commerce administration dashboard equipped with interactive Chart.js analytics modules, modular layout grids, and explicit color tokens.",
    technologies: ["React", "Chart.js", "CSS Variables", "i18next"],
    image: "/projects/images/Adminx-Dashboard-Pro.png",
    fallbackImage: getPlaceholder("AdminX Dashboard"),
    github: "https://github.com/ShenoudaSameh/Adminx-Dashboard-Pro",
    demo: "https://adminx-dashboard-pro.vercel.app/"
  },
  {
    id: "devhub",
    title: "DevHub Platform",
    description: "Developer hub and community showcase platform built using Vite, React Router, and modular component architecture.",
    technologies: ["React", "React Router", "Vite", "Tailwind CSS"],
    image: "/projects/images/Dev_Hub.png",
    fallbackImage: getPlaceholder("DevHub Platform"),
    github: "https://github.com/ShenoudaSameh/Dev_Hub",
    demo: "https://dev-hub-one-gamma.vercel.app/"
  }
]
};