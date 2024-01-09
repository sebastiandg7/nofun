import { Link } from 'react-router-dom';

type GameCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

export function GameCard(props: GameCardProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      to={props.link}
    >
      {props.icon}
      <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-gray-100">
        {props.title}
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {props.description}
      </p>
    </Link>
  );
}
