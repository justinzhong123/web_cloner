export type ServiceItem = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  imageSp?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  image: string;
  href: string;
};

export type Partner = {
  name: string;
  href: string;
};

export type VoiceCard = {
  client: string;
  quote: string;
  avatar: string;
  href: string;
};

export type BlogPost = {
  date: string;
  title: string;
  image: string;
  href: string;
};

export type NavItem = {
  label: string;
  labelHover?: string;
  href: string;
};
