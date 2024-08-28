import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (

        <div className="bg-white w-full h-[458px] self-center">
            <div className="flex flex-col justify-between h-full text-center p-4 md:p-8 lg:p-12">
                <div>
                    <div className="mt-8 text-black w-full font-Poppins">
                        <p>CONNECT & THRIVE</p>
                    </div>
                    <div className="mt-6 text-5xl md:text-4xl font-bold text-black w-full font-Inter">
                        <p>Buy, Sell and Explore</p>
                    </div>
                    <div className="mt-6 text-sm md:text-base text-black w-full font-Poppins">
                        <p>mplace is your go-to platform for connecting with others whether you're looking to sell</p>
                    </div>
                    <div className="mt-2 text-sm md:text-base text-black w-full font-Poppins">
                        <p>or discover create deals join our community and start trading today</p>
                    </div>
                    <div className="m-8 text-black w-full">
                        <button
                            type="button"
                            className="text-black-70 border border-black-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black-500   dark:focus:ring-black-800 font-Poppins"
                        >
                            Contact us
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-3/4 h-1 bg-black"></div>
                </div>

                <div className="flex flex-wrap items-center justify-between mt-8 px-4 md:px-8 lg:px-12 w-full">
                    <div className="text-black text-sm md:text-base basis-full md:basis-1/3 order-3 md:order-1 font-Poppins">
                        ©2023 All Rights Reserved.
                    </div>

                    <div className="flex justify-center text-black text-sm md:text-base basis-full md:basis-1/3 order-2 font-Poppins">
                        <div className="text-center mx-2">Terms</div>
                        <div className="text-center mx-2">Privacy</div>
                        <div className="text-center mx-2">Cookies</div>
                    </div>

                    <div className="text-black basis-full md:basis-1/3 order-1 md:order-3">
                        <div className="flex justify-center space-x-5">
                            <a href="https://facebook.com" className="text-black-600">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://twitter.com" className="text-black-400">
                                <FaTwitter size={30} />
                            </a>
                            <a href="https://instagram.com" className="text-black-500">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://youtube.com" className="text-black-600">
                                <FaYoutube size={30} />
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
