// Search.js
import React from "react";
import Button from "@mui/material/Button";
import LocalBarTwoToneIcon from "@mui/icons-material/LocalBarTwoTone";

export default function Search(props) {
  const { onSearch } = props;

  return (
    <Button
    color="secondary"
      onClick={onSearch}
      endIcon=<LocalBarTwoToneIcon fontSize="large" />
      variant="contained"
    >
      Mix It Up!
    </Button>
  );
}
