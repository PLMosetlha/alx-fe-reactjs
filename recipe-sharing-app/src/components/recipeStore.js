import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "", // To store the search term
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to set the search term
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase()) // Filter by title or description
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
