'use client';  // Add this line at the top

import React from 'react';
import Button from '@/components/ui/button';
import SearchBar from '@/components/ui/searchbar';
import Textarea from '@/components/ui/textarea';

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
      <div className="p-4">
      <Textarea customWidth="w-[1123px]" customHeight="h-[50px]" /*placeholder="Write something here..."*/ />
      {/* Adjust width and height as needed */}
      
    </div>
    </>
  );
};

export default Page;
