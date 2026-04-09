import { CertificateItem } from "../../types/portfolio.types"

import ciscoPdf from "../../assets/certificates/Cisco Network Engineering.pdf"
import angularPdf from "../../assets/certificates/Infosys Angular.pdf"
import computersPdf from "../../assets/certificates/Infosys Exploring Computers.pdf"
import htmlReportPdf from "../../assets/certificates/Infosys HTML Development Report.pdf"
import htmlDevPdf from "../../assets/certificates/Infosys HTML Development.pdf"
import html5Pdf from "../../assets/certificates/Infosys HTML5.pdf"
import mongoPdf from "../../assets/certificates/Infosys MongoDB.pdf"
import mongoReportPdf from "../../assets/certificates/Infosys MongoDB Report.pdf"
import nodePdf from "../../assets/certificates/Infosys Node JS.pdf"

export const certificates: Record<string, CertificateItem> = {
  cisco: {
    id: 1,
    title: "Cisco Network Engineering",
    pdfPath: ciscoPdf,
    show: true
  },
  angular: {
    id: 2,
    title: "Infosys Angular",
    pdfPath: angularPdf,
    show: true
  },
  computers: {
    id: 3,
    title: "Infosys Exploring Computers",
    pdfPath: computersPdf,
    show: true
  },
  htmlReport: {
    id: 4,
    title: "Infosys HTML Development Report",
    pdfPath: htmlReportPdf,
    show: true
  },
  htmlDevelopment: {
    id: 5,
    title: "Infosys HTML Development",
    pdfPath: htmlDevPdf,
    show: true
  },
  html5: {
    id: 6,
    title: "Infosys HTML5",
    pdfPath: html5Pdf,
    show: true
  },
  mongodb: {
    id: 7,
    title: "Infosys MongoDB",
    pdfPath: mongoPdf,
    show: true
  },
  mongodbReport: {
    id: 8,
    title: "Infosys MongoDB Report",
    pdfPath: mongoReportPdf,
    show: true
  },
  nodejs: {
    id: 9,
    title: "Infosys Node JS",
    pdfPath: nodePdf,
    show: true
  }
}