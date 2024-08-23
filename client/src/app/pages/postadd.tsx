import React from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import SearchBar from '@/components/searchbar';
import BrandStatus from '@/components/brandstatus';
import InputArea from '@/components/inputarea';

const PostAdPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        
      <h1 className="text-2xl font-bold text-black mb-8 items-left justify-left">Basic Information</h1>

      <form className="flex flex-col gap-4 w-4/5 md:w-3/5 lg:w-2/5">
        <label className=" text-black text-base font-bold font-Poppins leading-normal">
          Title
        </label>
        
        <InputArea customWidth="w-full" customHeight="h-4" placeholder="Enter ad title here..." />
        <label className="w-[1123px] opacity-50 text-[#ff0004] text-sm font-normal font-['Poppins'] leading-[21px]">
  Title cannot contain special characters. Please use only letters, numbers, and spaces.
        </label>
        <label className=" text-black text-base font-bold font-Poppins leading-normal">
          Category
        </label>
        <SearchBar onSearch={(value) => console.log(value)} customWidth="w-[1123px]" placeholder="Search categories (e.g., Cars, Real estate, Books...)" />
        
        <label className="w-[1123px] opacity-50 text-[#ff0004] text-sm font-normal font-['Poppins'] leading-[21px]">
  Title cannot contain special characters. Please use only letters, numbers, and spaces.
        </label>
        <label className=" text-black text-base font-bold font-Poppins leading-normal">
          Tags
        </label>
        
        <InputArea customWidth="w-full" customHeight="h-12" placeholder="Add relevant keywords to help buyers find your ad (e.g., 'electronics,' 'vintage,' 'handmade')"   />
        <label className="w-[1123px] opacity-50 text-[#ff0004] text-sm font-normal font-['Poppins'] leading-[21px]">
  Title cannot contain special characters. Please use only letters, numbers, and spaces.
        </label>
        <div className="mt-2 flex space-x-4 items-center">
          <BrandStatus initialStatus="Brand new" />
          
        </div>

        <label className="opacity-40 text-black text-base font-normal font-Poppins leading-normal">
          Description
        </label>
        <Textarea customWidth="w-full" customHeight="h-32" placeholder="Enter ad description here..." />

        <label className="opacity-40 text-black text-base font-normal font-Poppins leading-normal">
          Price
        </label>
        <Textarea customWidth="w-full" customHeight="h-12" placeholder="Enter price here..." />

        <Button title="Post Ad" variant="login" />
      </form>
    </div>
  );
};

export default PostAdPage;
