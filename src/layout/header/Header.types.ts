export interface HeaderNavLinkItem {
  id: string;
  name: string;
  icon: any;
  url: string;
  isActive: boolean;
  offsetStart: number;
  offsetEnd: number;
}

export interface HeaderNavLinkItemProps {
  item: HeaderNavLinkItem
}