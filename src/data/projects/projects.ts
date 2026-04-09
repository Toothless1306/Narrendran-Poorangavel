import { ProjectItem } from "../../types/portfolio.types"

export const projects: Record<string, ProjectItem> = {
  erpRollout: {
    id: 1,
    title: "Integrated ERP System Rollout",
    description:
      "Led the end-to-end development of three integrated ERP modules including database design, API layer development, and front-end implementation. Built a modular architecture for seamless scalability and future integrations.",
    techStack: ["TypeScript", "JavaScript", "React", "Node.js"],
    category: "Professional",
    github: "",
    liveDemo: "",
    image: "/assets/projects/erp-rollout.png",
    show: true
  },

  shiftManagement: {
    id: 2,
    title: "Shift Management ERP",
    description:
      "Developed an ERP module for employee shift scheduling, attendance management, and workflow optimization with a focus on scalable architecture.",
    techStack: ["React", "TypeScript", "Node.js"],
    category: "Professional",
    github: "",
    liveDemo: "",
    image: "/assets/projects/shift-management.png",
    show: true
  },

  zohoAutomation: {
    id: 3,
    title: "Zoho Workflow Automation",
    description:
      "Automated manual data entry, lead qualification, and CRM workflows using Zoho tools and custom business logic.",
    techStack: ["Zoho CRM", "Deluge"],
    category: "Professional",
    github: "",
    liveDemo: "",
    image: "/assets/projects/zoho-automation.png",
    show: true
  },

  bloodBank: {
    id: 4,
    title: "Blood Bank Management System",
    description:
      "Academic web application designed to store donor details and provide emergency blood contact information efficiently.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Academic",
    github: "",
    liveDemo: "",
    image: "/assets/projects/blood-bank.png",
    show: true
  },

  bookTracking: {
    id: 5,
    title: "Book Tracking System",
    description:
      "Academic software project to manage and track books in libraries and similar institutions.",
    techStack: ["Java", "MySQL"],
    category: "Academic",
    github: "",
    liveDemo: "",
    image: "/assets/projects/book-tracking.png",
    show: true
  }
}