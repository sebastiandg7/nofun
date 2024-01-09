import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@nofun/ui-components';
import { useUIMode } from '@nofun/util-ui-mode';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function UIModeToggle() {
  const { setUIMode } = useUIMode();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setUIMode('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setUIMode('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setUIMode('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
