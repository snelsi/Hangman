import * as React from "react";
import styled from "styled-components";

import { Button, GallowsIcon, Main } from "components";

interface IntroProps {
  onPlay: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onPlay }) => (
  <Main>
    <h1>Hangman</h1>
    <Label>A simple JavaScript game</Label>
    <GallowsIcon />
    <Button autoFocus onClick={onPlay}>
      Play
    </Button>
  </Main>
);

const Label = styled.p`
  margin-bottom: 2.5rem;
`;
