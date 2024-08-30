"use client";
import Footer from "@/components/ui/footer";
import Itemcard from "@/components/ui/itemcard";
import ItemDetails from "@/components/ui/itemDetails";
import { useGetUserAdDetailsQuery } from "@/redux/features/ads/adsApi";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const MyAds = () => {
  const user = useSelector((state: any) => state.auth.user);
  const { data, isLoading } = useGetUserAdDetailsQuery(user.id);

  return (
    <div className="w-full relative flex flex-row items-center justify-center flex-wrap content-center py-9 px-0 box-border gap-6">
      {user ? (
        <div className="w-full relative flex flex-row items-center justify-center flex-wrap content-center py-9 px-0 box-border gap-6">
          {data.ads.map((item: any) => (
            <Itemcard
              key={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              location={item.address}
              itemImage={item.ImageOne && item.ImageOne.url}
              daysAdded="2"
            />
          ))}
        </div>
      ) : (
        <div className="text-black flex items-end justify-center font-medium">
          You are not authorized! Please Login
        </div>
      )}
    </div>
  );
};

export default MyAds;
