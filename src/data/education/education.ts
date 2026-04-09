import { EducationItem } from "../../types/portfolio.types"

export const education: Record<string, EducationItem> = {
  degree: {
    id: 1,
    institution: "Karpagam Institute of Technology",
    degree: "B.Tech Information Technology",
    year: "2020 - 2024",
    location: "Coimbatore, India",
    score: "CGPA: 7.49 / 10",
    specialization: ["DSA", "Web Development", "DBMS"],
    show: true
  },

  hsc: {
    id: 2,
    institution: "H.N.U.P.R. Matric Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2018 - 2020",
    board: "Matric",
    score: "76.67%",
    show: true,
    group: "Computer Science"
  },

  sslc: {
    id: 3,
    institution: "H.N.U.P.R Matric Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    year: "2017 - 2018",
    board: "Matric",
    score: "84.2%",
    show: true
  }
}