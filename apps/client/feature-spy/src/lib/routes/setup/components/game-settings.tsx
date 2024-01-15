import { PlayersNumSettings } from './players-num-settings';
import { SpiesNumSettings } from './spies-num-settings';
import { TimerSettings } from './timer-settings';
import { WordCategoriesSettings } from './words-categories-settings';

export function GameSettings() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 p-5 mx-auto mb-8">
      <PlayersNumSettings />
      <SpiesNumSettings />
      <WordCategoriesSettings />
      <TimerSettings />
    </div>
  );
}
