import { WordCategory } from '@nofun/util-words';
import { withImmer } from 'jotai-immer';
import { atomWithStorage } from 'jotai/utils';

export interface GameSettings {
  spyCount: number;
  playerCount: number;
  wordCategories: {
    useAll: boolean;
    selected: Array<WordCategory>;
  };
  timer: {
    enabled: boolean;
    durationInMins: number;
  };
}

const defaultGameSettings: GameSettings = {
  spyCount: 1,
  playerCount: 3,
  wordCategories: {
    useAll: true,
    selected: Object.values(WordCategory),
  },
  timer: {
    enabled: false,
    durationInMins: 3,
  },
};

const persistentSpyGameSettingsAtom = atomWithStorage<GameSettings>(
  'spy.gameSettings',
  defaultGameSettings
);
persistentSpyGameSettingsAtom.debugLabel = 'persistentSpyGameSettingsAtom';

const spyGameSettingsAtom = withImmer(persistentSpyGameSettingsAtom);
spyGameSettingsAtom.debugLabel = 'spyGameSettingsAtom';

export { spyGameSettingsAtom };
