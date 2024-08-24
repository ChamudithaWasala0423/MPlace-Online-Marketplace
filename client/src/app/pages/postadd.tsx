import React, { useState } from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import SearchBar from '@/components/searchbar';
import BrandStatus from '@/components/brandstatus';
import InputArea from '@/components/inputarea';
import DragAndDrop from '@/components/draganddrop';
import Footer from '@/components/footer';

const PostAdPage: React.FC = () => {
    const [currency, setCurrency] = useState('LKR');

    const handleFileDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        // Handle the file uploads here
    };

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-col flex-grow items-center justify-center">
                 <h1 className="text-2xl font-bold text-black mb-8 self-start">Content</h1>

                <form className="flex flex-col gap-4 w-4/5 md:w-3/5 lg:w-2/5">
                
                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Title
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Upload clear, high-quality photos of your item. Showcase all angles to attract buyers.
                    </label>
                    
                    <InputArea customWidth="w-full" customHeight="h-4" />
                    <label className="w-[1123px] opacity-50 text-[#ff0004] text-sm font-normal font-['Poppins'] leading-[21px]">
                        Title cannot contain special characters. Please use only letters, numbers, and spaces.
                    </label>

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Category
                    </label>
                    <SearchBar onSearch={(value) => console.log(value)} customWidth="w-[1123px]" placeholder="Search categories (e.g., Cars, Real estate, Books...)" />
                    <label className="w-[1123px] opacity-50 text-[#ff0004] text-sm font-normal font-['Poppins'] leading-[21px]">
                        Category cannot contain special characters. Please use only letters, numbers, and spaces.
                    </label>

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Tags
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Add relevant keywords to help buyers find your ad (e.g., 'electronics,' 'vintage,' 'handmade...')
                    </label>
                    
                    <InputArea customWidth="w-full" customHeight="h-12" />
                    <label className="w-[1123px] opacity-50 text-[#ff0004] text-sm font-normal font-['Poppins'] leading-[21px]">
                        Tags cannot contain special characters. Please use only letters, numbers, and spaces.
                    </label>

                    <div className="mt-2 flex space-x-4 items-center">
                        <BrandStatus initialStatus="Brand new" />
                    </div>

                    <h1 className="text-2xl font-bold text-black mb-8 self-start">Content</h1>

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Add photos
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Upload clear, high-quality photos of your item. Showcase all angles to attract buyers.
                    </label>
                    <DragAndDrop onDrop={handleFileDrop} />

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Thumbnail
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Select the main image that best represents your item. This will be the thumbnail shown in search results.
                    </label>

                    <h1 className="text-2xl font-bold text-black mb-8 self-start">Price Details</h1>

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Price details
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Enter the price you’re asking for in your preferred currency.
                    </label>

                    {/* Select Currency Section */}
                    <div className="h-[49px] pr-2 justify-start items-center gap-[3px] inline-flex">
                        <div className="w-16 p-2 flex-col justify-start items-start inline-flex">
                            {/* Placeholder for additional content */}
                        </div>
                        <select
                            className="text-black text-xs font-normal font-['Poppins'] leading-normal bg-white border border-gray-300 rounded-lg p-2"
                            value={currency}
                            onChange={handleCurrencyChange}
                        >
                            <option value="LKR">LKR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            {/* Add more currency options as needed */}
                        </select>
                        <InputArea customWidth="w-[100px]" customHeight="h-6" placeholder="Price" />
                    </div>

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Details
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Provide a detailed description of your item. Include key features, condition, and any important information buyers should know.
                    </label>
                    <Textarea customWidth="w-full" customHeight="h-4" />

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Instructions for buyers
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Include any special instructions for your buyers, such as payment methods, delivery options, or specific details they should consider before purchasing.
                    </label>
                    <Textarea customWidth="w-full" customHeight="h-4" />

                    <label className="text-black text-base font-bold font-Poppins leading-normal">
                        Location
                    </label>
                    <label className="w-[1123px] opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]">
                        Specify the location where the item is available.
                    </label>
                    <div className="mt-2 flex space-x-4 items-center">
                        <InputArea customWidth="w-[200px]" customHeight="h-6" placeholder="City" />
                        <InputArea customWidth="w-[200px]" customHeight="h-6" placeholder="Province" />
                        <InputArea customWidth="w-[200px]" customHeight="h-6" placeholder="Country" />
                    </div>

                    {/* Primary Button on the Right Side */}
                    <div className="flex justify-end mt-8">
                        <Button title="Post Ad" variant="primary" />
                    </div>
                </form>
            </div>

            {/* Footer should stay at the bottom */}
            <Footer />
        </div>
    );
};

export default PostAdPage;
