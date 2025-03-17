export interface NavbarProps {
  id: string;
  name: string;
  category: string;
  description: string;
  title: string;
  href: string;
  items: {
    id: string;
    category: string;
    title: string;
    href: string;
    description: string;
  }[];
}
