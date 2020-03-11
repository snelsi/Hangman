import * as React from "react";
import styled from "styled-components";
import { styled as style } from "@material-ui/core/styles";
import { Button, GuessedIcon, Main } from "components";
import confetti from "canvas-confetti";

const leftRightConfetti = () => {
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  });
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  });
};

export interface GuessedProps {
  word: string;
  getNewWord: () => void;
  score: number;
}
export const Guessed: React.FC<GuessedProps> = ({ word, getNewWord, score }) => {
  React.useEffect(() => leftRightConfetti(), []);
  return (
    <Card>
      <h1>Well done!</h1>
      <p>The word was {word.toUpperCase()}</p>
      <GuessedIcon />
      <p className="score">Current score: {score}</p>
      <ResetButton autoFocus onClick={getNewWord}>
        Next round
      </ResetButton>
    </Card>
  );
};

const Card = styled(Main)`
  background-color: #28a745;
  color: #f8f9fa;
  & p {
    color: #f8f9fa;
  }
  & .score {
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
