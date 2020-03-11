import * as React from "react";
import styled from "styled-components";

import { Button, GallowsIcon, Main } from "components";

interface IntroProps {
  onPlay: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onPlay }) => (
  <Main>
    <h1>Hangman</h1>
    <p>A simple JavaScript game</p>
    <GallowsIcon />
    <Button autoFocus onClick={onPlay}>
      Play
    </Button>
  </Main>
);
