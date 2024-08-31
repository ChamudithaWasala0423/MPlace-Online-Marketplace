"use client"
import { FC } from 'react';
import ProductDetails from '@/components/ui//productDetails';
import Button from '@/components/ui/button';
import ItemDisplaySmall from '@/components/ui/itemDisplaySmall';
import Image from 'next/image';

const Itempage: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-full max-w-6xl h-auto lg:h-[604px] flex flex-col lg:flex-row p-4 text-left text-5xl font-heading-24px-regular text-text2 mt-16">
        {/* Image container */}
        <div className="relative w-full lg:w-[700px] h-auto lg:h-auto flex-shrink-0">
          <div className="relative w-full h-full rounded bg-foundation-terirary-terirary-300 overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              alt="Product"
              src="/images/chair.jpg"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="relative flex flex-col lg:ml-8 lg:w-[402px] mt-64 lg:mt-0">
          <ProductDetails />

          <div className="flex flex-row items-center justify-between mt-6 space-x-4 text-base font-title-16px-medium">
            <Button
              title="Contact Seller"
              variant="primary"  
            />
            <Button
              title="Save Item"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* Horizontal line with specific length and spacing */}
      <hr className="mt-32 w-[1000px] border-t-2 border-gray-400" />

      {/* Add ItemDisplaySmall component below the Frame */}
      <div className="w-full mt-[64px]">
        <ItemDisplaySmall title="You may be interested in"/>
      </div>
      <div className="w-full mt-[64px]">
        <ItemDisplaySmall title="Recently Added"/>
      </div>
    </section>
  );
};

export default Itempage;