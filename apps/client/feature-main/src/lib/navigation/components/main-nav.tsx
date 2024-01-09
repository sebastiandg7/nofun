import { siteConfig } from '@nofun/client-util-config';
import { cn } from '@nofun/tailwind-util-class-names';
import { Icons } from '@nofun/ui-components';
import { NavLink, useLocation } from 'react-router-dom';

export function MainNav() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="mr-4 hidden md:flex">
      <NavLink to="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </NavLink>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              'transition-colors hover:text-foreground/80',
              isActive ? 'text-foreground' : 'text-foreground/60'
            )
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/settings"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/settings')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Settings
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            cn(
              'transition-colors hover:text-foreground/80',
              pathname?.startsWith('/themes')
                ? 'text-foreground'
                : 'text-foreground/60'
            )
          }
        >
          Login
        </NavLink>
        <NavLink
          to={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
          )}
        >
          GitHub
        </NavLink>
      </nav>
    </div>
  );
}
