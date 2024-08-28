import React, { useState } from 'react';
import Button from '@/components/button';
import Textarea from '@/components/textarea';
import SearchBar from '@/components/ui/searchbar';
import BrandStatus from '@/components/brandstatus';
import InputArea from '@/components/ui/inputarea';
import DragAndDrop from '@/components/ui/draganddrop';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const EditAddPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [currency, setCurrency] = useState('LKR');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [instructions, setInstructions] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');

    const [titleError, setTitleError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [tagsError, setTagsError] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;

        // Validate title
        if (!title.trim()) {
            setTitleError('Title cannot contain special characters. Please use only letters, numbers, and spaces');
            isValid = false;
        } else {
            setTitleError('');
        }

        // Validate category
        if (!category.trim()) {
            setCategoryError('Category cannot contain special characters. Please use only letters, numbers, and spaces');
            isValid = false;
        } else {
            setCategoryError('');
        }

        // Validate tags
        if (tags.length === 0) {
            setTagsError('Tags cannot contain special characters. Please use only letters, numbers, and spaces');
            isValid = false;
        } else {
            setTagsError('');
        }

        if (isValid) {
            // Handle form submission logic here
            console.log('Form submitted successfully');
        }
    };

    const handleFileDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        // Handle the file uploads here
    };

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(event.target.value);
    };

    const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
            e.preventDefault();
        }
    };

    const removeTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

 

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <div className="flex-grow px-4 sm:px-6 lg:px-8 ml-2.5 sm:ml-1 lg:ml-15 mr-2.5 sm:mr-1 lg:mr-3.75">
                <div className="max-w-7xl mx-auto">
                    <div className='flex flex-col w-full justify-start mt-10'>
                        <div className='flex w-full justify-start mt-10'>
                            <p className='text-sm text-gray-500'>
                                Home <span className='text-black text-base font-bold font-Poppins'>/Post An Advertisement</span>
                            </p>
                        </div>
                        <h1 className="text-2xl font-bold text-black mb-8 text-left mt-10">Basic Information</h1>
                    </div>
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Title</label>
                            <p className="text-sm text-gray-500">Provide a clear, descriptive title for your advertisement.</p>
                            <InputArea
                                customWidth="w-full"
                                customHeight="h-12"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {titleError && <p className="text-sm text-red-500">{titleError}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Category</label>
                            <p className="text-sm text-gray-500">Choose the category that best fits your item or service.</p>
                            <SearchBar
                                onSearch={(value) => setCategory(value)}
                                placeholder="Search categories (e.g., Cars, Real estate, Books...)"
                            />
                            {categoryError && <p className="text-sm text-red-500">{categoryError}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Tags</label>
                            <p className="text-sm text-gray-500">Add relevant keywords to help buyers find your ad (e.g., 'electronics,' 'vintage,' 'handmade...')</p>
                            <InputArea
                                customWidth="w-full"
                                customHeight="h-12"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagInputKeyDown}
                            />
                            {tagsError && <p className="text-sm text-red-500">{tagsError}</p>}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded border w-max h-10 p-2 flex items-center">
                                        {tag}
                                        <button
                                            onClick={() => removeTag(index)}
                                            className="ml-2 text-black-700 hover:text-black-900"
                                        >
                                            &times;
                                        </button>
                                    </span>
                                ))}
                            </div>
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
                                <InputArea
                                    customWidth="w-32"
                                    customHeight="h-10"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Details</label>
                            <p className="text-sm text-gray-500">Provide a detailed description of your item. Include key features, condition, and any important information buyers should know.</p>
                            <Textarea
                                customWidth="w-full"
                                customHeight="h-32"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-black text-base font-bold font-Poppins">Instructions for buyers</label>
                            <p className="text-sm text-gray-500">Include any special instructions for your buyers, such as payment methods, delivery options, or specific details they should consider before purchasing.</p>
                            <Textarea
                                customWidth="w-full"
                                customHeight="h-32"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-black mb-8">Location</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="space-y-2">
    <label className="block text-black text-base font-bold font-Poppins">City</label>
    <p className="text-sm text-gray-500">Enter the city where the item is located.</p>
    <InputArea
      customWidth="w-full"
      customHeight="h-12"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  </div>

  <div className="space-y-2">
    <label className="block text-black text-base font-bold font-Poppins">Province</label>
    <p className="text-sm text-gray-500">Enter the province where the item is located.</p>
    <InputArea
      customWidth="w-full"
      customHeight="h-12"
      value={province}
      onChange={(e) => setProvince(e.target.value)}
    />
  </div>

  <div className="space-y-2">
    <label className="block text-black text-base font-bold font-Poppins">Country</label>
    <p className="text-sm text-gray-500">Enter the country where the item is located.</p>
    <InputArea
      customWidth="w-full"
      customHeight="h-12"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
  </div>
</div>

                       

                        <div className="flex justify-end mt-8">
                        <Button variant="primary" title="Save Changes" onClick={handleFormSubmit} />

                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EditAddPage;
