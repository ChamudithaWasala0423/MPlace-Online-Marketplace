'use client'
import React from "react";
import ItemDetails from "@/components/ui/itemDetails";
import Footer from "@/components/ui/footer";

const Page = ({params}: any) => {
  return (
    <div>
      <ItemDetails id={params.id} />
      <Footer />
    </div>
  );
};

export default Page;