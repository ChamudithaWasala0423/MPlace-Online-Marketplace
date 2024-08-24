import Image from 'next/image';
import Navbar from '@/components/ui/navbar';
import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <Navbar title={'Mplace'} />

            <div className='flex flex-col md:flex-row w-full pt-20 h-fit'>
                <div className='basis-full md:basis-1/2 bg-green-600 h-full'>
                    <div className='p-11'>
                        <p className='font-bold text-4xl'>Our Story</p>
                        <p className='mt-5'>
                            Launched in 2024, MPlace has quickly become a leading online marketplace,
                            connecting buyers and sellers across Sri Lanka. With a strong commitment to
                            community and innovation, we’ve created a platform where thousands of users
                            can trade seamlessly, backed by robust marketing, data insights, and exceptional service.
                        </p>
                        <p className='mt-2'>
                            Our platform is designed for seamless transactions, making it easy to buy, sell,
                            and explore. Join us and be part of a growing community where every connection counts.
                        </p>
                    </div>
                </div>

                <div className='basis-full md:basis-1/2 bg-blue-600 h-full flex justify-center items-center'>
                    <Image
                        src="/images/image.jpeg"  // Ensure this path is correct
                        alt="MPlace"
                        layout="intrinsic"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className='bg-slate-100 flex flex-row '>

            </div>


        </div>
    );
};

export default About;
