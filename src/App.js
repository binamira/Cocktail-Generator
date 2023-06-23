import React, { useState } from "react";
import "./styles.css";
import $ from "jquery";
import Input from "./components/Input";
import Search from "./components/Search";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalBarTwoToneIcon from "@mui/icons-material/LocalBarTwoTone";
import cocktail from "./images/cocktail.png";

export default function App() {
  // State variables
  const [name, setName] = useState(""); // Stores the cocktail name
  const [ingredients, setIngredients] = useState(""); // Stores the cocktail ingredients
  const [resultData, setResultData] = useState(""); // Stores the result data from the API

  // Event handler for name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Event handler for ingredients input change
  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  // Event handler for search button click
  const handleSearch = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    // Make an AJAX request to the API endpoint
    $.ajax({
      method: "GET",
      url:
        "https://api.api-ninjas.com/v1/cocktail?name=" +
        name +
        "&ingredients=" +
        ingredients,
      headers: { "X-Api-Key": apiKey },
      contentType: "application/json",
      success: function (result) {
        console.log(result);
        setResultData(result); // Update the resultData state with the received data
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      }
    });
  };

  return (
    <div className="App">
      <div className="formContainer">
        <h1 className="title">Cocktail Recipes Generator</h1>

        {/* Input component */}
        <Input
          name={name}
          ingredients={ingredients}
          onNameChange={handleNameChange}
          onIngredientsChange={handleIngredientsChange}
        />

        {/* Search component */}
        <Search onSearch={handleSearch} />
      </div>

      {/* Render resultData if it has data */}
      {resultData.length > 0 && (
        <div className="cardContainer">
          {/* Map through the resultData array and render individual cards */}
          {resultData.map((item, index) => (
            <Card className="card" sx={{ minWidth: 200, maxWidth: 320 }} key={index}>
              <CardContent>
                {/* Display cocktail name */}
                <Typography
                  sx={{ fontSize: 28 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.name}
                </Typography>

                {/* Display cocktail ingredients */}
                <Typography variant="body2">
                  {item.ingredients.map((ingredient, index) => (
                    <ul key={index}>
                      <li>{ingredient}</li>
                    </ul>
                  ))}
                </Typography>

                {/* Display cocktail instructions */}
                <Typography sx={{ fontSize: 15 }}>
                  {item.instructions}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
