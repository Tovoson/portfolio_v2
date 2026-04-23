import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import supabase from '../config/supabase'

interface User {
  id: string
  email: string
}

interface AuthState {
    user: User | null
    token: string | null
    isLoading: boolean
    error: string | null

    singIn: (email: string, password: string) => Promise<void>
    signOut: ()  => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      singIn: async(email, password) => {
        set({ isLoading: true, error: null})

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        console.log(data);

        if (error){
            set({error: error.message, isLoading: false})
            return
        }

        //save token + user
        set({
            user: {
                id: data.user.id,
                email: data.user.email
            },
            token: data.session.access_token,
            isLoading: false, 
            error: null
        })
      },

      signOut: async() => {
        await supabase.auth.signOut()
        set({ user: null, token: null})
      }
    }),
    { name: 'admin-storage',//storage key
      partialize: (state) => ({//to avoid storing sensitive state
        user: state.user,
        token: state.token
      })
     },
  ),
)