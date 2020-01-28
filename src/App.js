import React from "react";
import "./App.css";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <header>Pepper Recipes</header>
      <Recipes className="recipes" />
    </div>
  );
}

export default App;
