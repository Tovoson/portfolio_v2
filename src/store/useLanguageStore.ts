// store.ts
import { create } from 'zustand'
import { Visits } from '../Types/Project-type'
import supabase from '../config/supabase'

// Define types for state & actions
interface VisitorState {
  visitor: Visits[] | null
  error: string | null
  isLoading: boolean
  fetchVisitor: () => Promise<void>
}

// Create store using the curried form of `create`
export const useVisitorStore = create<VisitorState>()((set, get) => ({
  visitor: null,
  error: null,
  isLoading: false,

  fetchVisitor: async () => {
    set({ isLoading: true, error: null })

    const { data, error } = await supabase.from("visitors").select();

    if (error) {
      set({ error: error.message, isLoading: false })
      return
    }

    set({
      visitor: data,
      isLoading: false,
      error: null
    })

  },
}))