import { Icons } from '@nofun/ui-components';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type MainNavItem = NavItem;

export type SidebarNavItem = NavItemWithChildren;

export interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    // {
    //   title: 'GitHub',
    //   href: 'https://github.com/divetool',
    //   external: true,
    // },
    // {
    //   title: 'Twitter',
    //   href: 'https://twitter.com/divetool',
    //   external: true,
    // },
  ],
  sidebarNav: [
    {
      title: 'Games',
      items: [
        {
          title: 'Spy',
          href: '/spy',
          items: [],
        },
        {
          title: 'Papelito',
          href: '/papelito',
          items: [],
        },
        {
          title: 'Dice',
          href: '/dice',
          items: [],
        },
      ],
    },
  ],
};
