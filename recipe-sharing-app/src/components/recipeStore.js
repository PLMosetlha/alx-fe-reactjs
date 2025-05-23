import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',  // To store the search term
  setSearchTerm: (term) => set({ searchTerm: term }),  // Action to set the search term
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) // Filter by title or description
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
}));
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
    setRecipes: (recipes) => set({ recipes }),
}));

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
