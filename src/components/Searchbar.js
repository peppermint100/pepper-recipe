import React, { useState } from "react";

function Serachbar({ handleSearchBar, searchRecipes, recipes }) {
  const [value, setValue] = useState("");

  const onChange = e => {
    handleSearchBar(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const filteredRecipes = recipes.filter(
      recipe => (recipe.label = value.toLowerCase())
    );
    searchRecipes(filteredRecipes);
  };
  return (
    <form className="searchbar">
      <input onChange={onChange} />
      <button onSubmit={onSubmit}>Find</button>
    </form>
  );
}

export default Serachbar;
