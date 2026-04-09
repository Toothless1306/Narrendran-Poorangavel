import { ExperienceItem } from "../../types/portfolio.types"

export const experience: Record<string, ExperienceItem> = {
  gwayerp: {
    id: 1,
    company: "GWAYERP Tech Solutions",
    role: "Junior Developer | ERP Developer",
    duration: "Dec 2024 - October 2025",
    location: "Chennai, India",
    highlights: [
      "Developed and maintained scalable ERP modules using JavaScript and TypeScript",
      "Collaborated with cross-functional teams to implement features and resolve production issues",
      "Enhanced front-end interfaces and backend business logic for better performance",
      "Worked in Agile environments to deliver client-focused ERP solutions"
    ],
    show: true
  },

  eliteTechPark: {
    id: 2,
    company: "Elite Tech Park",
    role: "Zoho Developer Intern",
    duration: "Mar 2024 - Jul 2024",
    location: "Coimbatore, India",
    highlights: [
      "Completed internship as a Zoho Developer",
      "Worked on CRM automation and workflow optimization",
      "Assisted in building business process solutions using Zoho tools"
    ],
    show: true
  }
}