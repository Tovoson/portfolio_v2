import supabase from "./config/supabase";

export async function getPosts() {
  const { data, error } = await supabase.auth.signUp({
    email: 'elytovoniaina@gmail.com',
    password: 'MaraGhost2021',
    options: {
      emailRedirectTo: 'http://localhost:3000/admin/dashboard',
    },
  })

  if (error) console.error('Erreur:', error);
  else console.log(data);
}

export async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'elytovoniaina@gmail.com',
    password: 'MaraGhost2021',
  })

   if (error) console.error('Erreur:', error);
   else console.log(data);
}