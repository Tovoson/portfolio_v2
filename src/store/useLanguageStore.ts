// store.ts
import { create } from "zustand";
import { languages } from "../data/langues";

// Define types for state & actions
interface languageState {
  langue: languages;

  changeLanguage: (lg: languages) => void;
}

// Create store using the curried form of `create`
export const useLanguageStore = create<languageState>()((set) => ({
  langue: "fr",

  changeLanguage: (lg) => {
    set({ langue: lg });
  },
}));
