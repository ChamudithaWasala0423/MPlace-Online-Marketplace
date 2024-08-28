import Categorysection from "@/components/ui/Categorysection";
import Footer from "@/components/ui/Footer";
import Herosection from "@/components/ui/Herosection";
import ItemsSection from "@/components/ui/ItemsSection";
import React from "react";
//import Navbar from '@/components/Navbar'; // Import your Navbar component

const Home: React.FC = () => {
  return (
    <div className="bg-background-500">
      <section className="navbarsec bg-black h-[100px]"></section>
      <Herosection/>
  
      <Categorysection/>
     
      <ItemsSection title="Featured Advertisments"/>
   
      <ItemsSection title="Recently Added"/>
  
    </div>
  );
};

export default Home;


