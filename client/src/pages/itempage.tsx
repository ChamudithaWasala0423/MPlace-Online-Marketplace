"use client"
import { FC } from 'react';
import ProductDetails from '@/components/ui/ProductDetails';
import Button from '@/components/ui/button';
import ItemDisplaySmall from '@/components/ui/ItemDisplaySmall';

const Frame: FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-full max-w-6xl h-auto lg:h-[604px] flex flex-col lg:flex-row p-4 text-left text-5xl font-heading-24px-regular text-text2">
        {/* Image container */}
        <div className="relative w-full lg:w-[700px] h-auto lg:h-auto flex-shrink-0">
          <div className="relative w-full h-full rounded bg-foundation-terirary-terirary-300 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Product"
              src="/images/chair.jpg"
            />
          </div>
        </div>

        
    </section>
  );
};

export default Frame;