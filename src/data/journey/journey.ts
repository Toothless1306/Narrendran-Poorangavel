import { BaseJourneyItem } from "../../types/portfolio.types";
import college from "../../assets/kit.png";
import school from "../../assets/school.jpg";
import etp from "../../assets/ETP.jpg";
import gwayerp from "../../assets/Gwayerp.jpg";
export const journey: Record<string, BaseJourneyItem> = {
    gwayerp: {
        id: 5,
        type: "experience",
        title: "Junior Developer | ERP Developer",
        subtitle: "GWAYERP Tech Solutions",
        timeline: "Dec 2024 - Oct 2025",
        location: "Chennai, India",
        image: gwayerp,
        website: "https://gwayerp.com",
        highlights: [
            "Developed scalable ERP modules",
            "Improved frontend and backend performance"
        ],
        show: true
    },

    eliteTechPark: {
        id: 4,
        type: "experience",
        title: "Zoho Developer Intern",
        subtitle: "Elite Tech Park",
        timeline: "Mar 2024 - Jul 2024",
        location: "Coimbatore, India",
        image: etp,
        website: "https://www.elitetechcorp.com/",
        highlights: [
            "CRM automation",
            "Workflow optimization"
        ],
        show: true
    },

    degree: {
        id: 3,
        type: "education",
        title: "B.Tech Information Technology",
        subtitle: "Karpagam Institute of Technology",
        timeline: "2020 - 2024",
        location: "Coimbatore, India",
        image: college,
        website: "https://karpagamtech.ac.in/",
        score: "CGPA: 7.49 / 10",
        show: true
    },

    hsc: {
        id: 2,
        type: "education",
        title: "Higher Secondary Certificate (HSC)",
        subtitle: "H.N.U.P.R Matric Higher Secondary School",
        timeline: "2018 - 2020",
        location: "Coimbatore, India",
        image: school,
        website: "",
        score: "76.67%",
        show: true
    },

    sslc: {
        id: 1,
        type: "education",
        title: "Secondary School Leaving Certificate (SSLC)",
        subtitle: "H.N.U.P.R Matric Higher Secondary School",
        timeline: "2017 - 2018",
        location: "Coimbatore, India",
        image: school,
        website: "",
        score: "84.2%",
        show: true
    },
}