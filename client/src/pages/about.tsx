import Image from 'next/image';
import Navbar from '@/components/ui/navbar';
import React from 'react';
import { FaShippingFast, FaDollarSign, FaUsers, FaWallet } from 'react-icons/fa';

const About: React.FC = () => {
    return (
        <div>
            <Navbar title={'Mplace'} />

            <div className='flex flex-col md:flex-row w-full pt-20 h-fit bg-white'>
                <div className='basis-full md:basis-1/2 h-full'>
                    <div className='p-11'>
                        <p className='font-bold text-4xl text-black'>Our Story</p>
                        <p className='mt-5 text-black'>
                            Launched in 2024, MPlace has quickly become a leading online marketplace,
                            connecting buyers and sellers across Sri Lanka. With a strong commitment to
                            community and innovation, we’ve created a platform where thousands of users
                            can trade seamlessly, backed by robust marketing, data insights, and exceptional service.
                        </p>
                        <p className='mt-2 text-white'>
                            Our platform is designed for seamless transactions, making it easy to buy, sell,
                            and explore. Join us and be part of a growing community where every connection counts.
                        </p>
                    </div>
                </div>

                <div className='basis-full md:basis-1/2 bg-blue-600 h-full flex justify-center items-center'>
                    <Image
                        src="/images/image.jpeg"  // This should work if the image is in the public/images folder
                        alt="Image"
                        layout="intrinsic"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Four White Boxes in a Row */}
            <div className='flex flex-wrap justify-around bg-slate-100 p-8'>
                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-white p-6 rounded-lg flex flex-col items-center text-black'>
                        <div className='text-black border border-black rounded-full p-3'>
                            <FaShippingFast className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>10.5k</p>
                        <p className='mt-6 text-xl font-bold'>Sallers active our site</p>
                    </div>
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-purple-600 p-6 rounded-lg flex flex-col items-center text-white'>
                        <div className='text-white border border-white rounded-full p-3'>
                            <FaDollarSign className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>33k</p>
                        <p className='mt-6 text-xl font-bold'>Customer active in our site</p>
                    </div>
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-white p-6 rounded-lg flex flex-col items-center text-black'>
                        <div className='text-black border border-gray-300 rounded-full p-3'>
                            <FaUsers className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>45.5k</p>
                        <p className='mt-6 text-xl font-bold'>Customer Satisfaction</p>
                    </div>
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-white p-6 rounded-lg flex flex-col items-center text-black'>
                        <div className='text-black border border-gray-300 rounded-full p-3'>
                            <FaWallet className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>25k</p>
                        <p className='mt-6 text-xl font-bold'>Anual gross sale in our site</p>
                    </div>
                </div>
            </div>



            
        </div>
    );
};

export default About;
