'use client'
import React from "react";
import ItemDetails from "@/components/ui/itemDetails";


const Page = ({params}: any) => {
  return (
    <div>
      <ItemDetails id={params.id} />
  
    </div>
  );
};

export default Page;