import Navbar from '@/components/ui/navbar';
import React from 'react';
import ItemDisplaySmall from '@/components/ui/itemDisplaySmall';
import Footer from '@/components/ui/footer';

const Category: React.FC = () => {
    return (
        <div className='bg-white text-black'>
            <Navbar title={'Mplace'} />
            <div className='bg-white text-black'>
                <p className='font-black text-center text-5xl mt-20'>Category</p>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                    <ItemDisplaySmall />
                    <ItemDisplaySmall />
                    <ItemDisplaySmall />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Category;
