export interface MenuItem {
  title: string;
  link?: string;
  subMenu?: MenuItem[];
}

export interface Article {
  img: string;
  title: string;
  description: string;
  link: string;
  category: {
    title: string;
    url: string;
  };
}
