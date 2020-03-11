import * as React from "react";
import styled from "styled-components";
import { Key } from "components";
import { alphabet } from "scripts";

const Letters = alphabet.split("");

export interface KeyBoardProps {
  word: string;
  guessedLetters: Set<string>;
  onClick: (letter: string) => void;
}
export const KeyBoard: React.FC<KeyBoardProps> = ({ word, guessedLetters, onClick }) => (
  <Grid>
    {Letters.map(letter => {
      let mode = null;
      if (guessedLetters.has(letter)) {
        mode = word.includes(letter) ? "guessedRight" : "guessedWrong";
      }
      return (
        <Key key={letter} mode={mode} onClick={() => onClick(letter)}>
          {letter}
        </Key>
      );
    })}
  </Grid>
);

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0 auto;
`;
