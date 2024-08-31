import Categorysection from "@/components/sections/Categorysection";
import Herosection from "@/components/sections/Herosection";
import ItemsSection from "@/components/sections/ItemsSection";
import Footer from "@/components/ui/footer";



import React from "react";


const Home: React.FC = () => {
  return (

    <div className="bg-background-500">
    
      <Herosection />

      <Categorysection />

      <ItemsSection title="Featured Advertisments" allUrl="/featuresAds" />
     
      <Footer />
    </div>
  );
};


export default Home;
