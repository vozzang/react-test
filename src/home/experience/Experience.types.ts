export interface ExperienceItemHistory {
  content: string;
  startDate?: string;
  endDate?: string;
  skills?: string[];
  description?: string;
  url?: string;
}

export interface ExperienceItem {
  startDate: string;
  company: string;
  job: string;
  skills: string[];
  history: ExperienceItemHistory[];
  endDate?: string;
  description?: string;
  url?: string;
}

export interface ExperienceItemProps {
  item: ExperienceItem;
}