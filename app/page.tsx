
import { PokemonProp } from "@/components/PokemonCard";
import LoadMore from "../components/LoadMore";
import { fetchPokemons } from "./action";

async function Home() {
  const { pokemons, next } = (await fetchPokemons()) as {
    pokemons: PokemonProp[];
    next: string;
  };
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Pokemon</h2>
      <LoadMore nextUrl={next} pokemons={pokemons} />
    </main>
  );
}

export default Home;
