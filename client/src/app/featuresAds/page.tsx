
import React from 'react';
import ItemDisplaySmall from '@/components/ui/itemDisplaySmall';



const FeaturedAdvertisement: React.FC = () => {
    return (
        <div className='bg-white text-black'>

            <div className='bg-white text-black'>
                <p className='font-black text-center text-5xl mt-20'>Featured Advertisement</p>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                    <ItemDisplaySmall />
                    <ItemDisplaySmall />
                    <ItemDisplaySmall />
                </div>
            </div>
            
        </div>
    );
};

export default FeaturedAdvertisement;
