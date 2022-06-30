export interface ExperienceItemHistory {
  content: string;
  startDate?: string;
  endDate?: string;
  skills?: string[];
}

export interface ExperienceItem {
  startDate: string;
  endDate?: string;
  company: string;
  job: string;
  skills: string[],
  history: ExperienceItemHistory[]
}

export interface ExperienceItemProps {
  item: ExperienceItem;
}