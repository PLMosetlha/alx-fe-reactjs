import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add necessary imports for routing
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails"; // Import RecipeDetails component
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
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} /> {/* Recipe list page */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />{" "}
        {/* Recipe detail page */}
      </Routes>
    </Router>
  );
}

export default App;
