'use client'
import React from "react";
import Itemcard from "@/components/ui/itemcard";
import Link from "next/link";
import { useGetAllAdsQuery } from "@/redux/features/ads/adsApi";

interface adProps {
  title : string;
  allUrl : string;
}

const ItemsSection  = ( {title} : adProps) => {
  const {isLoading, data, error} = useGetAllAdsQuery({});
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold font-sans mb-12 text-center text-black">
        {title || "Default "} 
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {
          data && data.ads.map((ad : any) => (
            <Link href={`/items/${ad._id}`} key={ad._id}>
              <Itemcard
                key={ad._id}
                name={ad.name}
                description={ad.description}
                price={ad.price}
                location="Colombo, Western Province"
                daysAdded="2"
                itemImage={ad.ImageOne && ad.ImageOne.url}
              />
            </Link>
          ))
        }
        
       
      </div>
      <div className="flex flex-col items-center justify-center py-2 px-auto">
        <Link href="/">
        <button className="bg-purple-600 text-white py-2 px-4 rounded">
            View All
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ItemsSection;
