export interface BaseSection {
  show: boolean
}

export interface SkillItem extends BaseSection {
  id: number
  name: string
  category: string
  icon?: string
}

export interface ProjectItem extends BaseSection {
  id: number
  title: string
  description: string
  techStack: string[]
  category: string
  github?: string
  liveDemo?: string
  image?: string
}

export interface EducationItem {
  id: number
  institution: string
  degree: string
  year: string
  score: string
  location?: string
  board?: string
  specialization?: string[]
  group?: string
  show: boolean
}

export interface CertificateItem {
  id: number
  title: string
  pdfPath: string
  show: boolean
  image?: string
}

export interface ExperienceItem {
  id: number
  company: string
  role: string
  duration: string
  location?: string
  highlights: string[]
  show: boolean
}

// Add this after your existing interfaces

export interface BaseJourneyItem extends BaseSection {
  id: number;
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  timeline?: string;
  location?: string;
  image?: string;
  website?: string;
  score?: string;
  highlights?: string[];
}

export interface EducationJourneyItem extends BaseJourneyItem {
  type: 'education';
}

export interface ExperienceJourneyItem extends BaseJourneyItem {
  type: 'experience';
}

// Type for the entire journey object (if you want to type the exported const)
export interface Journey {
  sslc: EducationJourneyItem;
  hsc: EducationJourneyItem;
  degree: EducationJourneyItem;
  eliteTechPark: ExperienceJourneyItem;
  gwayerp: ExperienceJourneyItem;
}