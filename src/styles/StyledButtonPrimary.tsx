import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import React from "react";
import { PrefContext } from "../preferences";

export const StyledButtonPrimary = styled(Button, {
  shouldForwardProp: prop => prop !== "styleType"
})<{ styleType?: string; isalttype?: string }>(
  ({
    theme: { palette },
    styleType = React.useContext(PrefContext).styleType,
    isalttype = "false"
  }) => ({
    padding: isalttype === "true" ? "3px 18px" : "3px 35px",
    border: styleType === "grayscale" ? "none" : "1px solid #33A852",
    fontSize: "13px",
    color: "#fff",
    textTransform: "none",
    backgroundColor: styleType === "grayscale" ? "#5F6368" : "#33A852",
    boxShadow: "none",
    borderRadius: isalttype === "true" ? "2px" : "5px",
    ":hover": {
      boxShadow: "none",
      color: styleType === "grayscale" ? "#fff" : "#33A852",
      backgroundColor: styleType === "grayscale" ? "#3C4043" : "#fff"
    },
    "&:disabled": {
      backgroundColor: "#dddcdc",
      border: "none"
    }
  })
);
