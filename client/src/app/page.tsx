'use client';  // Add this line at the top

import React from 'react';
import Button from '@/components/ui/button';
import SearchBar from '@/components/ui/searchbar';

const Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center p-8 space-y-4">
        <Button title="View All Products" variant="primary" />
        <Button title="Add To Cart" variant="small" />
        <Button title="View All Products" variant="secondary" />
      </div>
      <div className="flex flex-col items-center p-8 space-y-4">
        <SearchBar onSearch={(value) => console.log(value)} />
      </div>
    </>
  );
};

export default Page;
