import MaterialMenu from "@material-ui/core/Menu";
import { styled } from "@material-ui/core/styles";

export const Menu = styled(MaterialMenu)({
  "& .MuiPaper-root": {
    backgroundColor: "#2E3136",
    borderRadius: "8px",
    color: "var(--text-white, white)",
    font: "inherit",
    width: "236px",
  },
});
