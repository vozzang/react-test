export interface EducationItem {
  date: string;
  category: string;
  title: string;
  history?: string[]
}

export interface EducationItemProps {
  item: EducationItem;
}