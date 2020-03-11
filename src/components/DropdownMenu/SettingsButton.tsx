import React from "react";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";

export const SettingsIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

export const SettingsButton: React.FC<IconButtonProps> = React.forwardRef((props, ref) => (
  <IconButton {...props} ref={ref}>
    <SettingsIcon />
  </IconButton>
));
