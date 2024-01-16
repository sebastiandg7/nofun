import { useAtom } from 'jotai';
import { spyGameSessionAtom } from '../../+state/game-session.state';
import { useEffect } from 'react';
import { getRandomWord, getRandomWordFromCategories } from '@nofun/util-words';
import { spyGameSettingsAtom } from '../../+state/game-settings.state';
import { useTranslation } from 'react-i18next';
import { GameBoard } from './components/game-board';
import { generateGameSpies } from '../../services/generate-game-spies';

export function GamePage() {
  const [gameSettings] = useAtom(spyGameSettingsAtom);
  const [gameSession, setGameSession] = useAtom(spyGameSessionAtom);
  const { i18n } = useTranslation();
  const gameLanguage = i18n.language.split('-')[0];

  useEffect(() => {
    const gameWord = gameSettings.wordCategories.useAll
      ? getRandomWord(gameLanguage)
      : getRandomWordFromCategories(
          gameLanguage,
          gameSettings.wordCategories.selected
        );

    const gameSpies = generateGameSpies(
      gameSettings.playerCount,
      gameSettings.spyCount
    );

    setGameSession((_gameSession) => {
      _gameSession.word = gameWord.word;
      _gameSession.category = gameWord.category;
      _gameSession.players = gameSpies;
      return _gameSession;
    });
  }, []);

  return <GameBoard gameSession={gameSession} />;
}
