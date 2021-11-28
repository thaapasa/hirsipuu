import React from "react";
import { getNewWord } from "./Words";

export function useHangmanGame() {
  const word = React.useMemo(() => getNewWord(), []);
  const [position, setPosition] = React.useState(0);
  const [selected, setSelected] = React.useState<string[]>([]);
  const selectLetter = React.useCallback(
    (letter: string) => {
      setSelected([...selected, letter]);
      setPosition(position + 1);
    },
    [selected, position]
  );
  return { position, word, selected, selectLetter };
}
