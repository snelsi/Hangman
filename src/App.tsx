import * as React from "react";
import { Background, Game, Intro } from "components";

function App() {
  const [page, setPage] = React.useState<IPages>("Intro");
  return (
    <Background>
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
