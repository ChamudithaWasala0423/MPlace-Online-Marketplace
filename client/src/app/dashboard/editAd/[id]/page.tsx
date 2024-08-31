'use client'
import React from "react";
import EditAddPageAd from "@/components/ui/editAd";


const Page = ({params}: any) => {
  return (
    <div>
        <EditAddPageAd id={params.id} />
    </div>
  );
};

export default Page;