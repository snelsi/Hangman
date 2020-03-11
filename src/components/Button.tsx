import ButtonBase from "@material-ui/core/ButtonBase";
import { styled } from "@material-ui/core/styles";

export const Button = styled(ButtonBase)({
  backgroundColor: "var(--primary-color, #4e54c8)",
  border: "none",
  borderRadius: "24px",
  cursor: "pointer",
  color: "#fff",
  height: "40px",
  fontFamily: "inherit",
  fontSize: "1rem",
  outline: "none",
  textTransform: "none",
  transition: "all 0.15s ease-in-out",
  width: "100%",

  "&:hover": {
    backgroundColor: "var(--primary-dark-color, #393fb7)",
  },

  "&:focus": {
    boxShadow: "var(--button-shadow, 0 0 0 0.2rem rgba(105, 110, 208, 0.5))",
  },

  "&:active": {
    backgroundColor: "var(--primary-darkest-color, #363cad)",
  },
});
