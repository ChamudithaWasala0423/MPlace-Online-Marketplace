

import Categorysection from "@/components/sections/Categorysection";
import Herosection from "@/components/sections/Herosection";
import ItemsSection from "@/components/sections/ItemsSection";
import Footer from "@/components/ui/footer";
import React from "react";
//import Navbar from '@/components/Navbar'; // Import your Navbar component

const Home: React.FC = () => {
  return (
    <div className="bg-background-500">
      <section className="navbarsec bg-black h-[100px]"></section>
      <Herosection />

      <Categorysection />

      <ItemsSection title="Featured Advertisments" />

      <ItemsSection title="Recently Added" />
      <Footer />
    </div>
  );
};


export default Home;
