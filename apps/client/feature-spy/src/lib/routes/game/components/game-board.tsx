import { Card } from '@nofun/ui-components';
import { GameSession } from '../../../+state/game-session.state';
import { cn } from '@nofun/tailwind-util-class-names';

export interface GameBoardProps {
  gameSession: GameSession;
}

export function GameBoard(props: GameBoardProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full flex-1">
      <div className="w-72 h-[420px] bg-transparent cursor-pointer group perspective">
        <Card
          className={cn(
            'relative preserve-3d border-0 w-full h-full duration-1000',
            {
              'group-hover:my-rotate-y-180': true,
            }
          )}
        >
          <Card className="absolute backface-hidden w-full h-full">
            <h1 className="text-3xl font-semibold">The King's Man</h1>
          </Card>
          <Card className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-background overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-foreground px-2 pb-24">
              <h1 className="text-3xl font-semibold">The King's Man</h1>
              <p className="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                Watch Now
              </button>
            </div>
          </Card>
        </Card>
      </div>
      {/* <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
        
      </section> */}
    </div>
  );
}
