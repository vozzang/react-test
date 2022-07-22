export interface SkillItem {
  name: string;
  level: 'high' | 'medium' | 'low' | '';
  description: string;
}

export interface SkillItemProps {
  item: SkillItem
}