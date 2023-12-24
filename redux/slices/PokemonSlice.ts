import { createSlice } from "@reduxjs/toolkit";
import { PokemonProp } from "@/components/PokemonCard";
import { store } from "../store";
const initialState: {
  allPokemonData: PokemonProp[];
  searchTerm: string;
  filterType: string;
} = { allPokemonData: [], searchTerm: "", filterType: "" };

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.allPokemonData.push(...action.payload);
    },
    addSearchTerm: (state, action) => {
      state.searchTerm=action.payload
    },
    addFilterType: (state, action) => {
      state.filterType=action.payload
    },
  },
});

// Infer the `RootState` and `PokemonDispatch` types from the store itself
 export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
export const { addPokemon, addSearchTerm, addFilterType } = PokemonSlice.actions;
export default PokemonSlice.reducer;
