import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "../styles/recipes.scss";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;
const URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    setRecipes(json.hits);
  };
  return (
    <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          label={recipe.recipe.label}
          image={recipe.recipe.image}
          calories={recipe.recipe.calories}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default Recipes;
