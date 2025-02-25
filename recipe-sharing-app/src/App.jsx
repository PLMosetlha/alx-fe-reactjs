import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
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
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
        <h2>Your Recipes</h2>
        <RecipeList />
        <FavoritesList /> {/* Display user's favorites */}
        <RecommendationsList /> {/* Display personalized recommendations */}
      </div>
    </Router>
  );
}

export default App;
