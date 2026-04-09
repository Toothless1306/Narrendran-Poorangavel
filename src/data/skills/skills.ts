import { SkillItem } from "../../types/portfolio.types"

export const skills: Record<string, SkillItem> = {
  react: {
    id: 1,
    name: "React",
    category: "Frontend",
    show: true
  },
  typescript: {
    id: 2,
    name: "TypeScript",
    category: "Frontend",
    show: true
  },
  nodejs: {
    id: 3,
    name: "Node.js",
    category: "Backend",
    show: true
  },
  mongodb: {
    id: 4,
    name: "MongoDB",
    category: "Database",
    show: true
  }
}