"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonProp } from "./PokemonCard";
import { addFilterType, addSearchTerm } from "@/redux/slices/PokemonSlice";

// Header component
const Header = () => {
  // Redux: Get data from the store
  const data = useSelector((data) => data) as { pokemon: PokemonProp[] };

  // Redux: Get the dispatch function
  const dispatch = useDispatch();

  // Local state for search input
  const [search, setSearch] = useState("");

  // Function to handle search form submission
  const handleSubmit = () => {
    dispatch(addSearchTerm(search));
  };

  // Function to handle selection of filter type
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value.toLowerCase();
    dispatch(addFilterType(selectedValue));
  };

  return (
    <div className="flex gap-4 items-end fixed top-0 z-[1000] bg-[#0000005a] p-4">
      {/* Background blur effect */}
      <div className="absolute inset-0 blur-md"></div>

      {/* Search input */}
      <div className="pt-2 relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-gray-600 text-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          name="search"
          placeholder="Search Pokemons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Search button */}
        <button
          type="button"
          className="absolute right-0 top-0 mt-5 mr-4 bg-inherit hover:scale-105 fill-white text-white"
          onClick={handleSubmit}
        >
          🔎
        </button>
      </div>

      {/* Filter type selection */}
      <div className="relative flex w-full">
        <select
          className="block w-full p-1 h-10 rounded-lg border border-gray-900 cursor-pointer focus:outline-none"
          onChange={onSelect}
        >
          {/* Options for filter type */}
          <option value="">TYPE</option>
          <option value="rock">rock</option>
          <option value="ghost">ghost</option>
          <option value="electric">electric</option>
          <option value="bug">bug</option>
          <option value="poison">poison</option>
          <option value="normal">normal</option>
          <option value="fairy">fairy</option>
          <option value="fire">fire</option>
          <option value="grass">grass</option>
          <option value="water">water</option>
          <option value="flying">flying</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
