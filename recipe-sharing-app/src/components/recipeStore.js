import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  favorites: [], // Stores the IDs of favorite recipes
  recommendations: [], // Stores recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate personalized recommendations
  generateRecommendations: () =>
    set((state) => {
      // A mock implementation for recommendations
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5 // Randomly generate recommendations
      );
      return { recommendations: recommended };
    }),

  // Action to set the list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
