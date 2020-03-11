import * as React from "react";
import styled from "styled-components";

interface WordProps {
  word: string;
}

export const Word: React.FC<WordProps> = ({ word }) => (
  <WordBlock>
    {word.split("").map((letter, index) => (
      <Letter key={index}>{letter}</Letter>
    ))}
  </WordBlock>
);

const WordBlock = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const Letter = styled.div`
  display: inline-block;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  width: 40px;
`;
