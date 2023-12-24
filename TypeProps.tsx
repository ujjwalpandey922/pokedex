export interface appInitialState{}
export interface pokemonInitialState{}
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface DetailPokemon {
  id: string;
  name: string;
  types: PokemonType[];
  weight?: number;
  height?: number;
  abilities?: PokemonAbility[];
  sprites?: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats?: PokemonStat[];
  color?: string | null;
}
