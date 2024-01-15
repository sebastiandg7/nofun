const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function generateGameSpies(
  numberOfPlayers: number,
  numberOfSpies: number
) {
  const spies = Array.from({ length: numberOfSpies }, () => 'spy');
  const nonSpies = Array.from(
    { length: numberOfPlayers - numberOfSpies },
    () => 'non-spy'
  );

  return shuffle([...spies, ...nonSpies]);
}
