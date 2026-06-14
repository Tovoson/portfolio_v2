// store.ts
import { create } from "zustand";
import { languages } from "../data/langues";

// Define types for state & actions
interface languageState {
  langue: languages;
  showMenu: boolean;

  changeLanguage: (lg: languages) => void;
  setShowMenu: (isShow: boolean) => void;
}

// Create store using the curried form of `create`
export const useLanguageStore = create<languageState>()((set) => ({
  langue: "fr",
  showMenu: false,

  changeLanguage: (lg) => {
    set({ langue: lg });
  },
  setShowMenu: (isShow) => set({showMenu: isShow})
}));
