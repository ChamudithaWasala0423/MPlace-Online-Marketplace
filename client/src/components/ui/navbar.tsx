'use client';

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "../ui/searchbar";
import Button from "../ui/button";

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
                <div className="flex flex-col md:flex-row items-center w-full">
                    <div className="flex items-center w-full md:w-auto">
                        {/* Title and Subtitle */}
                        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                            <p className="text-2xl font-semibold whitespace-nowrap dark:text-black font-Inter">
                                {title}
                            </p>
                            {subtitle && (
                                <p className="text-lg font-normal whitespace-nowrap dark:text-gray-700 font-Inter ml-2">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        {/* Search Bar for small screens */}
                        <div className="flex-grow md:hidden mx-4">
                            <SearchBar onSearch={(value) => console.log('Search:', value)} />
                        </div>

                        {/* Drawer Navigation Icon */}
                        <button
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-auto"
                            onClick={toggleDrawer}
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Drawer Content on small screens */}
                    <div
                        className={`${isOpen ? "block" : "hidden"} w-full md:hidden mt-4`}
                        id="navbar-solid-bg"
                    >
                        <ul className="flex flex-col font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                        {/* The two buttons on small screens */}
                        <div className="flex space-x-4 mt-4">
                            <Button title="Login" variant="small" />
                            <Button title="Post an Ad" variant="small" />
                        </div>
                    </div>

                    {/* Navigation and SearchBar on large screens */}
                    <div className="hidden md:flex items-center ml-auto space-x-4">
                        <SearchBar onSearch={(value) => console.log('Search:', value)} />
                        <ul className="flex space-x-8">
                            <li>
                                <a href="#" className="text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black dark:text-black hover:text-blue-700 dark:hover:text-blue-500">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-4">
                            <Button title="Login" variant="primary" />
                            <Button title="Post an Ad" variant="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
