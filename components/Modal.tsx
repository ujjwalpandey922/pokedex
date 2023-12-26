"use client";

import { PokemonProp } from "./PokemonCard";
import { useRef } from "react";
import Image from "next/image";
import { Progress } from "./ui/progress";

// Modal component
const ModalComponent = ({
  setShowModal,
  pokemonDetails,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonDetails: PokemonProp;
}) => {
  // Refs for inner and outer elements
  const inner = useRef(null);
  const outer = useRef(null);

  // Function to handle clicks outside the modal
  const handleOuterClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === outer.current) {
      setShowModal(false);
    }
  };
  return (
    <div
      // Modal backdrop styling
      className={`fixed inset-0 bg-[#0000007f] p-12 flex justify-center z-[2000] bg-opacity-50 duration-300 overflow-y-auto `}
      ref={outer}
      onClick={(e) => handleOuterClick(e)}
    >
      <div
        // Modal content styling with dynamic color based on Pokemon type
        className={`relative ${pokemonDetails.types[0].type.name} text-black sm:mx-auto p-4 mt-4 rounded-xl h-max`}
        ref={inner}
      >
        {/* Modal content */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl text-bold pt-4 uppercase">
            {pokemonDetails.name}
          </h1>
          {/* Pokemon image */}
          <div
            className="m-4"
            style={{ position: "relative", width: "300px", height: "300px" }}
          >
            <Image
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
              alt="Pokemon"
              width="250"
              height="250"
            />
          </div>
          {/* Pokemon Types */}
          <div className="flex gap-2 my-4">
            {pokemonDetails?.types.map((singleType) => (
              <p
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#e4e6e6] bg-[#000000b9]  last:mr-0 mr-1"
                key={singleType.slot}
              >
                {singleType.type.name}
              </p>
            ))}
          </div>
        </div>

        {/* Pokemon stats */}
        <div className="flex-col">
          {pokemonDetails.stats.map((statObject: any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
              <div
                className="flex items-stretch"
                style={{ width: "500px" }}
                key={statName}
              >
                {/* Displaying stat name and value */}
                <h3 className="p-3 w-1/2 flex gap-1 justify-between capitalize font-bold ">
                  <strong className="">{statName}:</strong>
                  <span className="font-2xl "> {statValue} </span>
                </h3>
                {/* Progress bar for the stat */}
                <Progress className="w-1/2 m-auto " value={statValue} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
