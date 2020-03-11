import * as React from "react";
import { getWord as generateWord, useSet } from "scripts";

export const alphabet = "abcdefghijklmnopqrstuvwxyz";

const defaultLives = 10;
const defaultMinWordLength = 3;
const defaultMaxWordLength = 5;

interface WordConstructorProps {
  lives?: number;
  minWordLength?: number;
  maxWordLength?: number;
}
export const useHangman = ({
  lives = defaultLives,
  minWordLength = defaultMinWordLength,
  maxWordLength = defaultMaxWordLength,
}: WordConstructorProps = {}): [
  string,
  (letter: string) => boolean,
  {
    getNewWord: () => void;
    guessedLetters: Set<string>;
    livesLeft: number;
    maxLives: number;
    mode: "Guessed" | "Loose" | "Game";
    score: number;
    startNewGame: (params?: WordConstructorProps) => void;
    uniqueLettersInTheWorld: number;
    unguessedLeft: number;
  },
] => {
  // Secret word
  const [word, setWord] = React.useState(
    generateWord({ minLength: minWordLength, maxLength: maxWordLength }),
  );

  const [livesLeft, setLivesLeft] = React.useState(lives);
  const [guessedLetters, { add, has, reset }] = useSet<string>();
  const [score, setScore] = React.useState(0);

  /**
   * Set score to 0 and get a new word.
   */
  const startNewGame = ({
    lives = defaultLives,
    minWordLength = defaultMinWordLength,
    maxWordLength = defaultMaxWordLength,
  }: WordConstructorProps = {}) => {
    setWord(generateWord({ minLength: minWordLength, maxLength: maxWordLength }));
    setLivesLeft(lives);
    setScore(0);
    reset();
  };

  /**
   * Unique letters in the word
   */
  const uniqueLettersInTheWorld = React.useMemo(() => new Set(word).size, [word]);

  /**
   * Unique letters in the word, that haven't been guessed yet.
   */
  const unguessedLeft = React.useMemo(
    () => [...new Set(word)].filter(letter => !has(letter)).length,
    [word, has],
  );

  /**
   * Try to guess a letter. If no tries left or letter is already been guessed will do nothing.
   * Otherwise will try to match letter to a word.
   */
  function guessLetter(letter: string) {
    const lowerCaseLetter = letter.toLowerCase();
    if (livesLeft <= 0) return false; // No tries left
    if (unguessedLeft <= 0) return false; // Already guessed
    if (has(lowerCaseLetter)) return false; // Letter was already guessed
    if (!alphabet.includes(lowerCaseLetter)) return false; // Letter is not in the alphabet

    add(lowerCaseLetter);

    if (word.includes(lowerCaseLetter)) {
      setScore(score + 5);
      return true; // Letter is guessed right
    }
    navigator.vibrate(100);
    setLivesLeft(livesLeft - 1);
    return false; // Letter is not in the word
  }

  /**
   * Equals 'Guessed' if word is guessed.
   * Equals 'Loose' if no lives left.
   * Otherwise is 'Game'
   */
  const mode = React.useMemo(() => {
    if (unguessedLeft <= 0) return "Guessed";
    if (livesLeft <= 0) return "Loose";
    return "Game";
  }, [livesLeft, unguessedLeft]);

  /**
   * If letter is not guessed yet, it will be swaped with '_'
   */
  const dashedWord = React.useMemo(() => {
    if (mode === "Guessed" || mode === "Loose") return word;
    return word
      .split("")
      .map(letter => (has(letter) ? letter : "_"))
      .join("");
  }, [word, has, mode]);

  /**
   * Only available if current word is guessed.
   * To start new game use 'startNewGame'
   */
  const getNewWord = () => {
    if (mode !== "Guessed") return;
    setWord(generateWord({ minLength: minWordLength, maxLength: maxWordLength }));
    setLivesLeft(lives);
    reset();
  };

  return [
    dashedWord,
    guessLetter,
    {
      guessedLetters,
      uniqueLettersInTheWorld,
      unguessedLeft,
      startNewGame,
      getNewWord,
      livesLeft,
      maxLives: lives,
      score,
      mode,
    },
  ];
};
