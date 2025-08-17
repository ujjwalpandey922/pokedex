'use client';

import { PokemonProp } from './PokemonCard';
import { useRef } from 'react';
import Image from 'next/image';
import { Progress } from './ui/progress';

const ModalComponent = ({
  setShowModal,
  pokemonDetails,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonDetails: PokemonProp;
}) => {
  const inner = useRef(null);
  const outer = useRef(null);

  const handleOuterClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === outer.current) {
      setShowModal(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#0000007f] p-4 sm:p-8 flex justify-center items-start z-[2000] overflow-y-auto"
      ref={outer}
      onClick={(e) => handleOuterClick(e)}
    >
      <div
        className={`relative ${pokemonDetails.types[0].type.name} text-black mx-auto p-4 mt-6 rounded-xl w-full max-w-3xl`}
        ref={inner}
      >
        {/* Pokemon header */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-2 uppercase text-center">
            {pokemonDetails.name}
          </h1>

          {/* Pokemon image */}
          <div className="m-4 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] relative">
            <Image
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`}
              alt="Pokemon"
              fill
              className="object-contain"
            />
          </div>

          {/* Pokemon Types */}
          <div className="flex flex-wrap gap-2 my-2 sm:my-4 justify-center">
            {pokemonDetails?.types.map((singleType) => (
              <p
                className="text-xs sm:text-sm font-semibold inline-block py-1 px-3 uppercase rounded-full text-[#e4e6e6] bg-[#000000b9]"
                key={singleType.slot}
              >
                {singleType.type.name}
              </p>
            ))}
          </div>
        </div>

        {/* Pokemon stats */}
        <div className="flex flex-col gap-3 mt-4 w-full">
          {pokemonDetails.stats.map((statObject: any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full"
                key={statName}
              >
                <h3 className="flex justify-between w-full sm:w-1/2 capitalize font-bold text-sm sm:text-base">
                  <span>{statName}:</span>
                  <span>{statValue}</span>
                </h3>
                <Progress className="w-full sm:w-1/2 h-2" value={statValue} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
