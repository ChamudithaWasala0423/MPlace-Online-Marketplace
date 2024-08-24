import React, { useState } from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import SearchBar from '@/components/searchbar';
import BrandStatus from '@/components/brandstatus';
import InputArea from '@/components/inputarea';
import DragAndDrop from '@/components/draganddrop';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const EditAddPage: React.FC = () => {
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
            <Navbar />
            <div className="flex-grow px-4 sm:px-6 lg:px-8 ml-2.5 sm:ml-1 lg:ml-15 mr-2.5 sm:mr-1 lg:mr-3.75">
            <div className='flex flex-col w-full justify-start mt-10'>
                <div className='flex w-full justify-start mt-10'>
                    <p className='text-sm text-gray-500'>
                    Home <span className='text-black text-base font-bold font-Poppins'>/Post An Advertisement</span>
                    </p>
                </div>
                <h1 className="text-2xl font-bold text-black mb-8 text-left mt-10">Basic Information</h1>
                </div>

         
                <div className="max-w-7xl mx-auto">
                   

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Title</label>
                            <p className="text-sm text-gray-500">Upload clear, high-quality photos of your item. Showcase all angles to attract buyers.</p>
                            <InputArea customWidth="w-full" customHeight="h-12" />
                            <p className="text-sm text-red-500">Title cannot contain special characters. Please use only letters, numbers, and spaces.</p>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Category</label>
                            <SearchBar onSearch={(value) => console.log(value)} customWidth="w-full" placeholder="Search categories (e.g., Cars, Real estate, Books...)" />
                            <p className="text-sm text-red-500">Category cannot contain special characters. Please use only letters, numbers, and spaces.</p>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Tags</label>
                            <p className="text-sm text-gray-500">Add relevant keywords to help buyers find your ad (e.g., 'electronics,' 'vintage,' 'handmade...')</p>
                            <InputArea customWidth="w-full" customHeight="h-12" />
                            <p className="text-sm text-red-500">Tags cannot contain special characters. Please use only letters, numbers, and spaces.</p>
                        </div>

                        <div className="mt-2">
                            <BrandStatus initialStatus="Brand new" />
                        </div>

                        <h2 className="text-2xl font-bold text-black mb-8">Content</h2>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Add photos</label>
                            <p className="text-sm text-gray-500">Upload clear, high-quality photos of your item. Showcase all angles to attract buyers.</p>
                            <DragAndDrop onDrop={handleFileDrop} />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Thumbnail</label>
                            <p className="text-sm text-gray-500">Select the main image that best represents your item. This will be the thumbnail shown in search results.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-black mb-8">Price Details</h2>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Price details</label>
                            <p className="text-sm text-gray-500">Enter the price you're asking for in your preferred currency.</p>
                            <div className="flex flex-wrap items-center gap-2">
                                <select
                                    className="text-black text-xs font-normal font-['Poppins'] leading-normal bg-white border border-gray-300 rounded-lg p-2"
                                    value={currency}
                                    onChange={handleCurrencyChange}
                                >
                                    <option value="LKR">LKR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                                <InputArea customWidth="w-32" customHeight="h-10" placeholder="Price" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Details</label>
                            <p className="text-sm text-gray-500">Provide a detailed description of your item. Include key features, condition, and any important information buyers should know.</p>
                            <Textarea customWidth="w-full" customHeight="h-32" />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Instructions for buyers</label>
                            <p className="text-sm text-gray-500">Include any special instructions for your buyers, such as payment methods, delivery options, or specific details they should consider before purchasing.</p>
                            <Textarea customWidth="w-full" customHeight="h-24" />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Location</label>
                            <p className="text-sm text-gray-500">Specify the location where the item is available.</p>
                            <div className="flex flex-wrap gap-2">
                                <InputArea customWidth="w-full sm:w-auto flex-grow" customHeight="h-10" placeholder="City" />
                                <InputArea customWidth="w-full sm:w-auto flex-grow" customHeight="h-10" placeholder="Province" />
                                <InputArea customWidth="w-full sm:w-auto flex-grow" customHeight="h-10" placeholder="Country" />
                            </div>
                        </div>

                        <div className="flex justify-end mt-8">
                            <Button title="Save changes" variant="primary" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EditAddPage;