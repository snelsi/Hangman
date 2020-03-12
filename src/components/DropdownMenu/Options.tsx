import React from "react";
import { Difficulty } from "components";
import { Menu, NewGame, SettingsButton } from "components/DropdownMenu";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { styled } from "@material-ui/core/styles";

export interface OptionsProps {
  difficulty: Difficulty;
  setDifficulty: (newDifficulty: Difficulty) => void;
  onNewGame: () => void;
}
export const Options: React.FC<OptionsProps> = ({ difficulty, setDifficulty, onNewGame }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <>
      <SettingsButton onClick={openMenu} />
      <Menu id="menu" keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        <DifficultySelection>
          <ModeButton disabled={difficulty === "easy"} onClick={() => setDifficulty("easy")}>
            Easy
          </ModeButton>
          <ModeButton disabled={difficulty === "normal"} onClick={() => setDifficulty("normal")}>
            Normal
          </ModeButton>
          <ModeButton disabled={difficulty === "hard"} onClick={() => setDifficulty("hard")}>
            Hard
          </ModeButton>
        </DifficultySelection>
        <NewGame
          onClick={() => {
            onNewGame();
            closeMenu();
          }}
        />
      </Menu>
    </>
  );
};

const DifficultySelection = styled(ButtonGroup)({
  height: "50px",
  marginBottom: "8px",
  width: "100%",
});

const ModeButton = styled(Button)({
  borderColor: "#525252",
  color: "var(--text-white, white)",
  height: "100%",
  width: "100%",
  "&:disabled": {
    backgroundColor: "#28a745",
    color: "var(--text-white, white)",
    "&:hover": {
      backgroundColor: "#28a745",
    },
  },
});
