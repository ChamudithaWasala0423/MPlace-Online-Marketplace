import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

interface EmployeeCardProps {
    name: string;
    position: string;
    avatar: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, position, avatar }) => {
    return (
        <div className='bg-white p-6 rounded-lg flex flex-col items-center border-gray-800 text-black w-64'>
            <Image
                src={avatar}
                alt={`${name}'s avatar`}
                width={100}
                height={100}
                className='rounded-full object-cover mb-4'
            />
            <p className='text-xl font-bold'>{name}</p>
            <p className='text-sm text-gray-500 mb-4'>{position}</p>
            <div className='flex space-x-3'>
                <FaTwitter className='text-blue-500 text-xl' />
                <FaInstagram className='text-pink-500 text-xl' />
                <FaLinkedin className='text-blue-700 text-xl' />
            </div>
        </div>
    );
};

export default EmployeeCard;
