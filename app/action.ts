"use server";

export const fetchPokemons = async (next?:string) => {
  try {
    const res = await fetch(
      next || `https://pokeapi.co/api/v2/pokemon?&limit=8`
    );
    const data = await res.json();
  
    const allInfo = await fetchIndiPokemonData(data.results);
      
    return { pokemons:allInfo, next: data?.next };
  } catch (error) {
    return error;
  }
};

const fetchIndiPokemonData = async (
  pokemons: { name: string; url: string }[]
) => {
  try {
    const individualData = await Promise.all(
      pokemons.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      })
    );

    return individualData;
  } catch (error) {
    console.log(error);
  }
};
