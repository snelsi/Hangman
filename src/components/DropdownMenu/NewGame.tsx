import * as React from "react";
import { MenuItem, MenuItemProps } from "components/DropdownMenu";

interface RefreshIconProps {}

export const RefreshIcon: React.FC<RefreshIconProps> = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

interface EditProps extends Omit<MenuItemProps, "id"> {
  onClick: () => void;
}
export const NewGame: React.FC<EditProps> = React.forwardRef(({ onClick, ...props }, ref) => (
  <MenuItem ref={ref} onClick={onClick} {...props}>
    <RefreshIcon />
    New Game
  </MenuItem>
));
