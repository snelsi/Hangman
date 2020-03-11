import * as React from "react";
import styled from "styled-components";
import { Hearts, Main, KeyBoard, Word, GameOver, Guessed } from "components";
import { Options } from "components/DropdownMenu";
import { useHangman } from "scripts";

export const Game: React.FC = () => {
  const [
    word,
    guessLetter,
    { guessedLetters, startNewGame, score, livesLeft, maxLives, mode, getNewWord },
  ] = useHangman();

  React.useEffect(() => {
    const handleKeyPress = ({ key }) => guessLetter(key.toLowerCase());
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [guessLetter]);

  if (mode === "Guessed") return <Guessed word={word} getNewWord={getNewWord} score={score} />;
  if (mode === "Loose") return <GameOver word={word} onNewGame={startNewGame} score={score} />;

  return (
    <Main>
      <Score>Score: {score}</Score>
      <OptionsButton>
        <Options onNewGame={startNewGame} />
      </OptionsButton>
      <Word word={word} />

      <Hearts bars={maxLives} value={livesLeft} />

      <KeyBoard word={word} guessedLetters={guessedLetters} onClick={guessLetter} />
    </Main>
  );
};

const Score = styled.span`
  text-align: left;
`;

const OptionsButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
