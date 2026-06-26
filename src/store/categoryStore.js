import { create } from "zustand";

const useCategoryStore = create((set) => ({
  selectedCategories: [],

  toggleCategory: (category) =>
    set((state) => {
      const exists =
        state.selectedCategories.includes(category);

      return {
        selectedCategories: exists
          ? state.selectedCategories.filter(
              (item) => item !== category
            )
          : [...state.selectedCategories, category],
      };
    }),
}));

export default useCategoryStore;