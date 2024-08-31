"use client";

import Itemcard from "@/components/ui/itemcard";
import { useGetUserAdDetailsQuery } from "@/redux/features/ads/adsApi";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MyAds = () => {
  const user = useSelector((state: any) => state.auth.user);
  const { data, isLoading, refetch } = useGetUserAdDetailsQuery(user.id, {refetchOnMountOrArgChange: true});

  useEffect(() => {
    refetch();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full relative flex flex-row items-center justify-center flex-wrap content-center py-9 px-0 box-border gap-6">
      {user ? (
        <div className="w-full relative flex flex-row items-center justify-center flex-wrap content-center py-9 px-0 box-border gap-6">
          {data?.ads.map((item: any) => (
            <Link href={`/myAdsSingle/${item._id}`} key={item._id}>
              <Itemcard
                key={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                location={item.address}
                itemImage={item.ImageOne && item.ImageOne.url}
                daysAdded="2"
              />
            </Link>
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
