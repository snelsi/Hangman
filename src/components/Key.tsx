import * as React from "react";
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import { styled } from "@material-ui/core/styles";

export interface KeyProps extends ButtonBaseProps {
  mode?: "guessedWrong" | "guessedRight";
}

export const Key: React.FC<KeyProps> = ({ mode, className, children, ...props }) => (
  <StyledKey
    disabled={mode === "guessedRight" || mode === "guessedWrong"}
    {...props}
    className={`${className} ${mode || ""}`}
  >
    {children}
  </StyledKey>
);

export const StyledKey = styled(ButtonBase)({
  backgroundColor: "var(--primary-color, #4e54c8)",
  border: "none",
  borderRadius: "0.25rem",
  color: "white",
  cursor: "pointer",
  display: "inline-block",
  fontFamily: "inherit",
  fontSize: "1rem",
  lineHeight: "40px",
  height: "40px",
  margin: "0.25em",
  minWidth: "0",
  width: "40px",
  outline: "none",
  padding: "0",
  textAlign: "center",
  textTransform: "uppercase",

  transition: "all 0.15s ease-in-out",

  "&:hover": {
    backgroundColor: "var(--primary-dark-color, #393fb7)",
  },

  "&:focus": {
    boxShadow: "var(--button-shadow, 0 0 0 0.2rem rgba(105, 110, 208, 0.5))",
  },

  "&:active": {
    backgroundColor: "var(--primary-darkest-color, #363cad)",
  },

  "&:disabled": {
    cursor: "default",
    opacity: "0.65",
  },

  "&.guessedWrong": {
    backgroundColor: "#dc3545",
  },
  "&.guessedRight": {
    backgroundColor: "#28a745",
  },
});
