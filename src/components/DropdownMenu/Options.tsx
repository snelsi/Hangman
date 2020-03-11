import React from "react";
import { Menu, NewGame, SettingsButton } from "components/DropdownMenu";

export interface OptionsProps {
  onNewGame: () => void;
}
export const Options: React.FC<OptionsProps> = ({ onNewGame }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <>
      <SettingsButton onClick={openMenu} />
      <Menu id="menu" keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
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
