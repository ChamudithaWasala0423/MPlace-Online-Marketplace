'use client';  // Add this line at the top

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

  return (<>
    <div className="relative w-1/4 h-auto p-2  rounded flex items-center">
      <input
        type="search"
        placeholder="What are you looking for?"
        className="bg-tertiary-500 h-10 px-4 pr-12 w-full rounded text-sm border-2 border-transparent hover:border-primary-500 focus:border-primary-500 focus:outline-none transition-colors duration-200"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <button type="submit" className="absolute right-0 top-0 bottom-2 mt-2 mr-3">
        <FaSearch className="h-4 w-4 text-[#7e2ee7]" />
      </button>
    </div>
    </>
  );
};

export default SearchBar;