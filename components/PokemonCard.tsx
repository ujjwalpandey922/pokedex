"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
import ModalComponent from "./Modal";

// PokemonCard component
export interface PokemonProp {
  // Pokemon properties
  id: string;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  order: number;
  kind: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  score: string;
}

// Props for PokemonCard
interface Prop {
  pokemon: PokemonProp;
  index: number;
}

// Framer Motion variants
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// PokemonCard component definition
function PokemonCard({ pokemon, index }: Prop) {
  // State to control the visibility of the modal
  const [show, setShow] = useState(false);
  //********how to disable scroll when modal pops up***********
  show
    ? (window.document.body.style.overflow = "hidden")
    : (window.document.body.style.overflow = "auto");

  // Function to handle click event and show the modal
  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      {/* Pokemon card with Framer Motion animation */}
      <motion.div
        variants={variants}
        initial="hidden"
        viewport={{ amount: 0 }}
        animate="visible"
        transition={{
          delay: 1,
          duration:  1,
          ease: "easeInOut",
        }}
        className={`max-w-sm rounded relative w-full p-2 hover:rotate-3 hover:scale-105 transition-all cursor-pointer focus:scale-0 ${pokemon.types[0].type.name}`}
        onClick={() => handleClick()}
      >
        {/* Pokemon image */}
        <div className="relative w-full h-[20vh]">
          <Image
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon?.name}
            fill
            className="rounded-xl"
          />
        </div>

        {/* Pokemon details */}
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            {/* Pokemon name */}
            <h2 className="font-bold text-black text-xl line-clamp-1 w-full capitalize">
              {pokemon?.name}
            </h2>
            {/* Pokemon ID */}
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <span className="text-white text-sm font-bold capitalize">
                {pokemon?.id}
              </span>
            </div>
          </div>

          {/* Additional Pokemon information */}
          <div className="flex gap-4 items-center">
            {/* Types */}
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              {pokemon?.types.map((singleType) => (
                <p
                  className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#e4e6e6] bg-[#000000b9]  last:mr-0 mr-1"
                  key={singleType.slot}
                >
                  {singleType.type.name}
                </p>
              ))}
            </div>

            {/* Score */}
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {pokemon?.score}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal component */}
      {show && (
        <ModalComponent
          showModal={show}
          setShowModal={setShow}
          pokemonDetails={pokemon}
        />
      )}
    </>
  );
}

export default PokemonCard;
