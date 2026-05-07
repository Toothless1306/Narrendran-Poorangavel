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
import cisco from "../../assets/certificates/cisco.jpg"
import infosys from "../../assets/certificates/infosys.png"
import nodejs from "../../assets/certificates/nodejs.jpg"
import html5 from "../../assets/certificates/html5.jpg"
import angular from "../../assets/certificates/angular.png"
import mongodb from "../../assets/certificates/mongodb.png"
import htmldevelopment from "../../assets/certificates/html development.jpg"
import fitaCertificate from "../../assets/certificates/Certificate_36503.pdf"
import pythonwithML from "../../assets/certificates/python-with-ml.png"

export const certificates: Record<string, CertificateItem> = {
  cisco: {
    id: 1,
    title: "Cisco Network Engineering",
    pdfPath: ciscoPdf,
    image: cisco,
    show: true
  },
  angular: {
    id: 2,
    title: "Infosys Angular",
    pdfPath: angularPdf,
    image: angular,
    show: true
  },
  computers: {
    id: 3,
    title: "Infosys Exploring Computers",
    pdfPath: computersPdf,
    image: infosys,
    show: true
  },
  htmlDevelopment: {
    id: 5,
    title: "Infosys HTML Development",
    pdfPath: htmlDevPdf,
    image: htmldevelopment,
    show: true
  },

  htmlReport: {
    id: 4,
    title: "Infosys HTML Development Report",
    pdfPath: htmlReportPdf,
    image: htmldevelopment,
    show: true
  },
  html5: {
    id: 6,
    title: "Infosys HTML5",
    pdfPath: html5Pdf,
    image: html5,
    show: true
  },
  mongodb: {
    id: 7,
    title: "Infosys MongoDB",
    pdfPath: mongoPdf,
    image: mongodb,
    show: true
  },
  mongodbReport: {
    id: 8,
    title: "Infosys MongoDB Report",
    pdfPath: mongoReportPdf,
    image: mongodb,
    show: true
  },
  nodejs: {
    id: 9,
    title: "Infosys Node JS",
    pdfPath: nodePdf,
    image: nodejs,
    show: true
  },
  dataAnalysis: {
    id: 8,
    title: "Fita Data Analysis",
    pdfPath: fitaCertificate,
    image: pythonwithML,
    show: true
  },
}