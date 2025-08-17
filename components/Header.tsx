'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilterType, addSearchTerm } from '@/redux/slices/PokemonSlice';
import { Search } from 'lucide-react';

// Header component
const Header = () => {
  // Redux: Get the dispatch function
  const dispatch = useDispatch();

  // Local state for search input
  const [search, setSearch] = useState('');

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
    <div className="flex fixed gap-4 items-end max-sm:w-full top-0 max-sm:left-0 z-[1000] bg-[#0000005a] p-4">
      {/* Background blur effect */}
      <div className="absolute top-0 left-0 h-full w-full bg-[#0000004f] blur-md">
        .
      </div>

      {/* Search input */}
      <div className="pt-2 relative mx-auto w-full text-gray-600">
        <input
          className="border-2 border-gray-300 bg-gray-600 max-w-3xl max-sm:w-full text-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
          type="text"
          name="search"
          placeholder="Search Pokemons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Search button */}
        <button
          type="button"
          className="absolute right-0 top-4 -translate-x-1/2  bg-inherit hover:scale-105 fill-white text-white"
          onClick={handleSubmit}
        >
          <Search size={20} />
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
