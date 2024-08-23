'use client';

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../ui/searchbar";
import Button from "../ui/Button";

// Define the props interface
interface NavbarProps {
    title: string;  // This prop is required
    subtitle?: string;  // This prop is optional
}

const Navbar: React.FC<NavbarProps> = ({ title, subtitle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="border-white-200 bg-white dark:bg-white dark:border-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex flex-col">
                    <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black font-Inter">
                        {title}
                    </p>
                    {subtitle && (
                        <p className="self-center text-lg font-normal whitespace-nowrap dark:text-gray-700 font-Inter">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Conditionally render the search bar for mobile screens */}
                <div className="flex-grow md:flex-grow-0 mx-4 md:mx-0">
                    <div className="md:hidden">
                        <SearchBar onSearch={(value) => console.log('Search:', value)} />
                    </div>
                </div>

                <button
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleDrawer}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div
                    className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                        {/* Navigation items */}
                    </ul>

                    {/* The two buttons aligned to the right */}
                    <div className="flex space-x-4 mt-4 md:mt-0 md:ml-auto">
                        <Button title="Login" variant="primary" />
                        <Button title="Post an Ad" variant="primary" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
