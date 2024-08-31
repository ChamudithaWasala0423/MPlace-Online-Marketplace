import Image from 'next/image';
import React from 'react';
import { FaShippingFast, FaDollarSign, FaUsers, FaWallet, FaHeadset, FaCheckCircle } from 'react-icons/fa';
import EmployeeCard from '@/components/ui/employcard';
import Footer from '@/components/ui/footer';


const About: React.FC = () => {
    return (
        <div>
        

            <div className='flex flex-col md:flex-row w-full pt-20 h-fit bg-white'>
                <div className='basis-full md:basis-1/2 h-full'>
                    <div className='p-11 m-10'>
                        <p className='font-bold text-4xl text-black font-Inter'>Our Story</p>
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

                <div className='basis-full md:basis-1/2 bg-white h-full flex justify-center items-center'>
                    <Image
                        src="/images/image.jpeg"  // Ensure this path is correct
                        alt="Image"
                        layout="intrinsic"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Four White Boxes in a Row */}
            <div className='flex flex-wrap justify-around bg-white p-8'>
                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-white p-6 rounded-lg flex flex-col items-center text-black border border-black'>
                        <div className='text-black border border-black rounded-full p-3'>
                            <FaShippingFast className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>10.5k</p>
                        <p className='mt-6 text-xl font-bold'>Sellers active on our site</p>
                    </div>
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-purple-600 p-6 rounded-lg flex flex-col items-center text-white border border-black'>
                        <div className='text-white border border-white rounded-full p-3'>
                            <FaDollarSign className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>33k</p>
                        <p className='mt-6 text-xl font-bold'>Customers active on our site</p>
                    </div>
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-white p-6 rounded-lg flex flex-col items-center text-black border border-black'>
                        <div className='text-black border border-gray-300 rounded-full p-3'>
                            <FaUsers className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>45.5k</p>
                        <p className='mt-6 text-xl font-bold'>Customer Satisfaction</p>
                    </div>
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <div className='bg-white p-6 rounded-lg flex flex-col items-center text-black border border-black'>
                        <div className='text-black border border-gray-300 rounded-full p-3'>
                            <FaWallet className='text-4xl' />
                        </div>
                        <p className='mt-6 text-4xl font-bold'>25k</p>
                        <p className='mt-6 text-lg font-bold'>Annual gross sales on our site</p>
                    </div>
                </div>
            </div>

            {/* Employee Cards */}
            <div className='flex flex-wrap justify-center bg-white p-8 text-black'>
                <div className='w-full md:w-1/4 p-4'>
                    <EmployeeCard
                        name="Chamuditha Wasala"
                        position="CEO"
                        avatar="/images/1.png"  // Corrected path
                    />
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <EmployeeCard
                        name="Nalina Herath"
                        position="CTO"
                        avatar="/images/2.jpg"  // Corrected path
                    />
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <EmployeeCard
                        name="Thilhara Senadhi"
                        position="COO"
                        avatar="/images/4.png"  // Corrected path
                    />
                </div>

                <div className='w-full md:w-1/4 p-4'>
                    <EmployeeCard
                        name="Tharuka"
                        position="CFO"
                        avatar="/images/3.png"  // Corrected path
                    />
                </div>
            </div>

            {/* Three White Boxes Under Employee Cards */}
            <div className="flex flex-wrap justify-center p-8 bg-white">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center text-center text-black">
                        <FaShippingFast className="text-4xl mb-4 text-black" />
                        <p className="text-xl font-bold">FREE AND EASY AD POSTING</p>
                        <p className="mt-4">Post your ads effortlessly without any fees.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center text-center text-black">
                        <FaHeadset className="text-4xl mb-4 text-black" />
                        <p className="text-xl font-bold">24/7 SUPPORT FOR SELLERS & BUYERS</p>
                        <p className="mt-4">Get friendly assistance whenever you need it.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center text-center text-black">
                        <FaCheckCircle className="text-4xl mb-4 text-black" />
                        <p className="text-xl font-bold">SATISFACTION GUARANTEED</p>
                        <p className="mt-4">If your ad doesn’t work out, we’ve got you covered.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
