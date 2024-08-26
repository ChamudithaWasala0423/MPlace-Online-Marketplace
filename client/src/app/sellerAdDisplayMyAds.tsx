"use client"
import { FC } from 'react';
import ProductDetails from '@/components/ui/ProductDetails';
import Button from '@/components/ui/button';
import ItemDisplaySmall from '@/components/ui/ItemDisplaySmall';

const SellerAdDisplayMyAds: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-full max-w-6xl h-auto lg:h-[604px] flex flex-col lg:flex-row p-4 text-left text-5xl font-heading-24px-regular text-text2 mt-16 mb-16">
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

        {/* Product details */}
        <div className="relative flex flex-col lg:ml-8 lg:w-[402px] mt-64 lg:mt-0">
          <ProductDetails />

          <div className="flex flex-row items-center justify-center mt-6 space-x-4 text-base font-title-16px-medium m">
            <Button
              title="Edit Ad"
              variant="primary"
              onClick={() => console.log('Edit Ad clicked')}
            />
            <Button
              title="Save"
              variant="secondary"
              onClick={() => console.log('Save clicked')}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default SellerAdDisplayMyAds;
