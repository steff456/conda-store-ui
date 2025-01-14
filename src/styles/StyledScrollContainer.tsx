import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const StyledScrollContainer = styled(Box, {
  shouldForwardProp: prop => prop !== "styleType"
})<{ styleType?: string }>(({ theme: { palette } }) => ({
  overflowY: "scroll",
  overflowX: "hidden",
  paddingRight: "0px",
  "&::-webkit-scrollbar": {
    width: "10px"
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#DADCE0",
    borderRadius: "5px",
    border: "none"
  }
}));
