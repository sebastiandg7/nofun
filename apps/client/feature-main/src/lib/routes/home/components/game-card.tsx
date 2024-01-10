import { cn } from '@nofun/tailwind-util-class-names';
import { Badge } from '@nofun/ui-components';
import { Link } from 'react-router-dom';

type GameCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  commingSoon?: boolean;
};

export function GameCard(props: GameCardProps) {
  const { title, description, link, icon, commingSoon } = props;
  return (
    <Link
      className={`relative flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md ${cn(
        { 'opacity-70 pointer-events-none': commingSoon }
      )}`}
      to={link}
    >
      {commingSoon && (
        <Badge className="absolute top-4 right-4">Comming Soon</Badge>
      )}
      {icon}
      <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
}
