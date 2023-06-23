import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  const { name, ingredients, onNameChange, onIngredientsChange } = props;

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      {/* Text field for cocktail name */}
      <TextField
        onChange={onNameChange}
        value={name}
        helperText="eg. Martini"
        id="name"
        label="Name"
        variant="outlined"
      />

      {/* Text field for cocktail ingredients */}
      <TextField
        onChange={onIngredientsChange}
        value={ingredients}
        helperText="eg. Vodka,lime,gin etc."
        id="ingredients"
        label="Ingredients"
        variant="outlined"
      />
    </Box>
  );
}
