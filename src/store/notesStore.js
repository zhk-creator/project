import { create } from "zustand";

const useNotesStore = create((set) => ({
  notes: localStorage.getItem("notes") || "",

  setNotes: (notes) => {
    localStorage.setItem("notes", notes);
    set({ notes });
  },
}));

export default useNotesStore;