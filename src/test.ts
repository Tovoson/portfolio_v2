import supabase from "./config/supabase";

export async function getPosts() {
    const { data, error } = await supabase
      .from('test') // Nom de votre table
      .select('*');

    console.log(data);
    
    if (error) console.error('Erreur:', error);
    else console.log(data);
  }