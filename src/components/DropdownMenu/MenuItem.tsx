import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DropdownMenuItem, {
  MenuItemProps as DropdownMenuItemProps,
} from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  root: {
    height: "50px",
    padding: "0 20px",
    font: "inherit",

    "& svg": {
      marginRight: "15px",
    },
  },
});

export interface MenuItemProps extends DropdownMenuItemProps {}

export const MenuItem: React.FC<MenuItemProps> = React.forwardRef(({ children, ...props }, ref) => {
  const classes = useStyles();
  return (
    // @ts-ignore
    <DropdownMenuItem className={classes.root} ref={ref} {...props}>
      {children}
    </DropdownMenuItem>
  );
});
