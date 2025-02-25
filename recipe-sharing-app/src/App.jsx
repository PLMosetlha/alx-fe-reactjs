import React, { useEffect } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import { useRecipeStore } from "./recipeStore";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Sample recipes to initialize the state
  useEffect(() => {
    const initialRecipes = [
      {
        id: 1,
        title: "Spaghetti Bolognese",
        description: "A classic Italian dish.",
      },
      {
        id: 2,
        title: "Chicken Curry",
        description: "A flavorful and spicy curry.",
      },
      {
        id: 3,
        title: "Caesar Salad",
        description: "A light and healthy salad.",
      },
    ];
    setRecipes(initialRecipes);
  }, [setRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
