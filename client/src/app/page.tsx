import React from 'react';
//import Navbar from '@/components/Navbar'; // Import your Navbar component

const Home: React.FC = () => {
  return (
    <div className='bg-background-500'>
      <section className='navbarsec bg-black h-[100px]'></section>

      //Hero Section 
      <section className="w-full relative flex flex-col items-center justify-center py-0 px-[72px] lg:px-[136px] box-border gap-[65px] text-left text-xl text-black font-title-16px-medium">
        <div className="self-stretch flex flex-col items-center justify-center text-center font-sans font-bold text-[32px] relative leading-normal">
          
          <p className="m-0  sm:text-[36px] lg:text-[48px]">Buy, Sell, and Succeed</p>
        <p className="m-0 sm:text-[36px] lg:text-[48px]">Your All-in-One Ad Solution</p>

        </div>
        <div className="w-full flex flex-row items-center justify-center py-0 px-4 box-border relative max-w-[664px] mt-[65px]">
          <div className="flex-1 flex flex-row items-center justify-center z-[0]">
            <div className="flex-1 relative rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-foundation-terirary-terirary-600 h-[68px]" />
            <div className="w-[95px] flex flex-row items-center justify-end relative">
              <div className="w-[95px] relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-purple-100 h-[68px] z-[0]" />
              <img className="w-[41.8px] absolute !m-[0] top-[14px] left-[26.2px] h-10 z-[1]" alt="" src="/images/chair.jpg" />
            </div>
          </div>
          <div className="!m-[0] absolute top-[21px] left-[39px] flex flex-row items-center justify-center py-0 px-3 z-[1]">
            <div className="relative leading-[26px]">Search by category, item, seller, or location</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat for each category */}
            <div className="category-card p-6 bg-white rounded shadow-lg text-center">
              <h3 className="text-xl font-medium mb-2">Electronics</h3>
              <p className="text-gray-600">Find the latest gadgets and tech products.</p>
            </div>
            {/* Add more categories here */}
          </div>
        </div>
      </section>

      {/* Featured Ad Section */}
      <section className="featured-ad-section py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Ads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Repeat for each ad */}
            <div className="ad-card p-6 bg-white rounded shadow-lg">
              <img src="/path-to-ad-image.jpg" alt="Ad Image" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-xl font-medium mb-2">Ad Title</h3>
              <p className="text-gray-600">Brief description of the ad.</p>
            </div>
            {/* Add more ads here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
