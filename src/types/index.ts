export type WorkCase = {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  description?: string;
  thumbnail: string;
  tag: string;
  tags?: string[];
  href: string;
  isPickup?: boolean;
};

export type ServiceTab = {
  id: "graphic" | "web" | "promotion" | "movie";
  number: "01" | "02" | "03" | "04";
  english: string;
  japanese: string;
  description: string;
  image: string;
  tags: string[];
};

export type BlogPost = {
  date: string;
  title: string;
  href: string;
  thumbnail: string;
  profileImage?: string;
  author: string;
};

export type MemberCard = {
  role: string;
  name: string;
  nameJp: string;
  jobLabel: string;
  avatar: string;
  isNew?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};
