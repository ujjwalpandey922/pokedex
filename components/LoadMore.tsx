"use client";
import { fetchPokemons } from "@/app/action";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PokemonCard, { PokemonProp } from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "@/redux/slices/PokemonSlice";

// LoadMore component
function LoadMore({
  nextUrl,
  pokemons,
}: {
  nextUrl: string;
  pokemons: PokemonProp[];
}) {
  // Intersection observer hook to detect when the component comes into view
  const { ref, inView } = useInView();

  // State for new pokemons and the current page
  const [newPokemons, setNewPokemons] = useState<PokemonProp[]>(pokemons);
  const [page, setpage] = useState(nextUrl);

  // Redux state and dispatch function
  const { allPokemonData, searchTerm, filterType } = useSelector(
    (data:any) => data.pokemon
  ) 
  // init dispatch to use actions
  const dispatch = useDispatch();

  // Fetch new pokemons function
  const fetchNewPokemons = useCallback(async () => {
    const { pokemons, next } = (await fetchPokemons(page)) as {
      pokemons: PokemonProp[];
      next: string;
    };
    dispatch(addPokemon(pokemons));
    setNewPokemons([...newPokemons, ...pokemons]);
    setpage(next);
  }, [newPokemons, page, dispatch]);

  // Effect to fetch new pokemons when the component is in view
  useEffect(() => {
    if (inView) {
      fetchNewPokemons();
    }
  }, [inView, fetchNewPokemons]);

  // Effect to initially add pokemons to the Redux store
  useEffect(() => {
    dispatch(addPokemon(pokemons));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filtering logic based on searchTerm and filterType
  if (searchTerm || filterType) {
    let filteredData = allPokemonData;

    if (searchTerm) {
      filteredData = filteredData.filter(
        (pre: any) =>
          pre.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pre.id == searchTerm
      );
    }

    if (filterType) {
      filteredData = filteredData.filter((pre: any) =>
        pre.types.some((type: any) =>
          type.type.name.toLowerCase().includes(filterType)
        )
      );
    }

    // Render filtered pokemons
    return (
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {filteredData.map((item: PokemonProp, index: number) => (
          <PokemonCard key={item.id} pokemon={item} index={index} />
        ))}
      </section>
    );
  }

  // Render the initial and additional pokemons
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {newPokemons?.map((item: PokemonProp, index: number) => (
          <PokemonCard key={item.id} pokemon={item} index={index} />
        ))}
      </section>

      {/* Loading spinner section */}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
