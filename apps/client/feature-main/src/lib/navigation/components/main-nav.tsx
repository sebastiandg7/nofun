import { siteConfig } from '@nofun/client-util-config';
import { cn } from '@nofun/tailwind-util-class-names';
import { Icons } from '@nofun/ui-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@nofun/ui-components';
import React from 'react';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Spy',
    href: '/spy',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Papelito',
    href: '/papelito',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Dice',
    href: '/dice',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
];

export function NavigationMenuDemo() {
  const { pathname } = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {pathname !== '/' && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Games</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <NavLink to="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </NavLink>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <NavigationMenuDemo />
      </nav>
    </div>
  );
}
