'use client';

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { FaSearch } from 'react-icons/fa'; 

type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState('');

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <div className="relative flex items-center w-3/4 md:w-1/4 p-2 rounded-full bg-gray-200">
      <input
        type="search"
        placeholder="What are you looking for?"
        className="w-full h-10 px-4 pr-10 text-sm text-black placeholder-gray-500 bg-gray-200 rounded-full border-2 border-transparent focus:outline-none hover:border-primary-500 focus:border-primary-500 transition-colors duration-200"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <button type="submit" className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <FaSearch className="h-4 w-4 text-[#0b0513]" />
      </button>
    </div>
  );
};

export default SearchBar;
