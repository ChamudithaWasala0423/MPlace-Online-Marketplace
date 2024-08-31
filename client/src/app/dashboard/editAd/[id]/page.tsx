'use client'
import React from "react";
import EditAddPageAd from "@/components/ui/editAd";


const Page = ({params}: any) => {
  return (
    <div>
        <EditAddPageAd id={params.id} />
        {/* <div>{params.id}</div> */}
    </div>
  );
};

export default Page;