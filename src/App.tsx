import * as React from "react";
import styled from "styled-components";
import { Background, Game, Intro } from "components";

import githubIcon from "components/Icons/githubIcon.svg";

function App() {
  const [page, setPage] = React.useState<IPages>("Intro");
  return (
    <Background>
      <Link href="https://github.com/snelsi/hangman" target="_blank" rel="noopener">
        <img src={githubIcon} alt="Github" />
      </Link>
      <Pages page={page} setPage={setPage} />
    </Background>
  );
}

type IPages = "Intro" | "Game";
interface PagesProps {
  page: IPages;
  setPage: (newValue: IPages) => void;
}
const Pages: React.FC<PagesProps> = ({ page, setPage }) => {
  if (page === "Intro") return <Intro onPlay={() => setPage("Game")} />;
  if (page === "Game") return <Game />;
  throw new Error("");
};
export default App;

const Link = styled.a`
  --size: 24px;
  border-radius: 50%;
  position: fixed;
  height: var(--size);
  width: var(--size);
  top: var(--size);
  right: var(--size);
  opacity: 0.3;
  outline: none;

  transition: all 0.15s ease;

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.05);
  }

  &:focus {
    box-shadow: 0 0 1px 2px #4589ff;
  }
  &:active {
    opacity: 0.6;
    transform: scale(0.95);
  }
  & > img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
