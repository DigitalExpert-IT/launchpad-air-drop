interface INavChild {
  title: string;
  link: string;
}

export interface INavigation {
  name: string;
  link?: string;
  children?: INavChild[];
}

export interface IFooter {
  linkUrl: string;
  iconUrl: string;
}

export const Navigation: Array<INavigation> = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Order Form",
    link: "#OrderForm",
  },
  {
    name: "Launchpad",
    link: "#Launchpad",
  },
  {
    name: "About",
    link: "#About",
  },
];

export const Footer: Array<IFooter> = [
  {
    linkUrl: "#",
    iconUrl: "#",
  },
  {
    linkUrl: "#",
    iconUrl: "#",
  },
  {
    linkUrl: "#",
    iconUrl: "#",
  },
  {
    linkUrl: "#",
    iconUrl: "#",
  },
  {
    linkUrl: "#",
    iconUrl: "#",
  },
  {
    linkUrl: "#",
    iconUrl: "#",
  },
];
