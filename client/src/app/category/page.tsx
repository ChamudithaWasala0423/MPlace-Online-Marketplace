'use client'
import React from "react";
import ItemDisplaySmall from "@/components/ui/itemDisplaySmall";
import Footer from "@/components/ui/footer";
import { useGetAllAdsQuery } from "@/redux/features/ads/adsApi";
import Link from "next/link";
import Itemcard from "@/components/ui/itemcard";

const Category: React.FC = () => {
  const { isLoading, data, error } = useGetAllAdsQuery({});
  return (
    <div className="bg-white text-black">
      <div className="bg-white text-black">
        <p className="font-black text-center text-5xl mt-20">Category</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {data &&
            data.ads.map((ad: any) => (
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
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
