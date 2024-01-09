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
    {
      title: 'Settings',
      href: '/settings',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/divetool',
      external: true,
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/divetool',
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
        {
          title: 'CLI',
          href: '/docs/cli',
          items: [],
        },
      ],
    },
    {
      title: 'Settings',
      href: '/settings',
      items: [
        {
          title: 'Profile',
          href: '/settings/profile',
          items: [],
        },
        {
          title: 'Account',
          href: '/settings/account',
          items: [],
        },
        {
          title: 'Appearance',
          href: '/settings/appearance',
          items: [],
        },
        {
          title: 'Notifications',
          href: '/settings/notifications',
          items: [],
        },
        {
          title: 'Display',
          href: '/settings/display',
          items: [],
        },
      ],
    },
  ],
};
