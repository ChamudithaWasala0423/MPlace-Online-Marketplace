import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <div className="bg-white w-full py-6">
            <div className="flex flex-col justify-between text-center p-4 md:p-8 lg:p-12">
                <div>
                    <div className="mt-4 text-black w-full font-Poppins">
                        <p>CONNECT & THRIVE</p>
                    </div>
                    <div className="mt-4 text-3xl md:text-5xl font-bold text-black w-full font-Inter">
                        <p>Buy, Sell and Explore</p>
                    </div>
                    <div className="mt-4 text-sm md:text-base text-black w-full font-Poppins">
                        <p>mplace is your go-to platform for connecting with others whether you&apos;re looking to sell</p>
                    </div>
                    <div className="mt-2 text-sm md:text-base text-black w-full font-Poppins">
                        <p>or discover great deals. Join our community and start trading today.</p>
                    </div>
                    <div className="m-4 text-black w-full">
                        <Link href="/contact">
                        <button
                            type="button"
                            className="text-black-700 border border-black-700 font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-black dark:text-black-500 dark:focus:ring-black-800 font-Poppins"
                        >
                            Contact us
                        </button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <div className="w-full md:w-3/4 h-1 bg-black"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-6 w-full">
                    <div className="text-black text-sm md:text-base mb-4 md:mb-0 font-Poppins order-3 md:order-1">
                        ©2023 All Rights Reserved.
                    </div>

                    <div className="flex flex-col md:flex-row text-black text-sm md:text-base mb-4 md:mb-0 font-Poppins order-2">
                        <div className="text-center mx-2">Terms</div>
                        <div className="text-center mx-2">Privacy</div>
                        <div className="text-center mx-2">Cookies</div>
                    </div>

                    <div className="text-black flex justify-center space-x-4 order-1 md:order-3 md:ml-8">
                        <a href="https://facebook.com" className="text-black-600">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-black-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-black-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://youtube.com" className="text-black-600">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
