import * as React from "react";
import styled from "styled-components";
import { styled as style } from "@material-ui/core/styles";
import { Button, GameOverIcon, Main, popup } from "components";

export interface GameOverProps {
  word: string;
  onNewGame: () => void;
  score: number;
}
export const GameOver: React.FC<GameOverProps> = ({ word, onNewGame, score }) => (
  <Card>
    <h1>Game over</h1>
    <p>The correct word was {word.toUpperCase()}</p>
    <GameOverIcon />
    <p className="score">Final score: {score}</p>
    <ResetButton autoFocus onClick={onNewGame}>
      Try again?
    </ResetButton>
  </Card>
);

const Card = styled(Main)`
  animation: ${popup} 0.25s linear;
  background-color: #dc3545;
  color: #f8f9fa;

  & p {
    color: #f8f9fa;
  }
  & .score {
    margin-top: auto;
    margin-bottom: 0.5rem;
  }
`;

const ResetButton = style(Button)({
  backgroundColor: "#f4f4f4",
  color: "#212529",

  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(255, 255, 255, 0.5)",
  },
  "&:active": {
    backgroundColor: "#c6c6c6",
  },
});
