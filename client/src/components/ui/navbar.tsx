"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from "./searchbar";
import Button from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface NavbarProps {
  title: string;
  subtitle?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Get the current user from the Redux store
  const user = useSelector((state: any) => state.auth.user);
  const router = useRouter();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-solid border-[#00000080] bg-white dark:bg-white dark:border-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="flex items-center w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <p className="text-3xl font-bold whitespace-nowrap text-black tracking-[0.03em] leading-[24px]">
                {title}
              </p>
              {subtitle && (
                <p className="text-base font-medium whitespace-nowrap text-gray-700 font-title-16px-medium ml-2">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Menu icon */}
            <button
              className="inline-flex items-center justify-center text-purple-600 text-2xl md:hidden ml-auto"
              onClick={toggleDrawer}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation and SearchBar on large screens */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-8">
            <ul className="flex space-x-8 text-base text-text2 font-title-16px-medium">
              <li>
                <Link
                  href="/"
                  className="text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  About
                </Link>
              </li>
            </ul>
            <SearchBar onSearch={(value) => console.log("Search:", value)} />

            <div className="flex space-x-4">
              {user ? (
                <>
                  <Link href="#">
                    <Image
                      src="/images/user.jpg"
                      alt="avatar"
                      className="w-[50px] h-[50px] rounded-full cursor-pointer"
                      width={200}
                      height={200}
                    />
                  </Link>
                </>
              ) : (
                <Link href="/login">
                  <Button title="Login" variant="primary" />
                </Link>
              )}
              {user ? (
                <>
                 <Link href="/dashboard/postAd">
                  <Button title="Post an Ad" variant="secondary" />
                </Link>
               
                </>
              ) : (
                <Link href="/login">
                  <Button title="Post an Ad" variant="secondary" />
                </Link>
              )}
            </div>
          </div>

          {/* Drawer Content on small screens */}
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:hidden mt-4`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/sidnup"
                  className="block py-2 px-3 text-black dark:text-black hover:text-purple-600 font-sans"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Button title="Login" variant="primary" />
              <Button title="Post an Ad" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
