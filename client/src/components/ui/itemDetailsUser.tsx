"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import {
  useDeleteAdMutation,
  useGetAdDetailsQuery,
} from "@/redux/features/ads/adsApi";

import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const ItemDetailsUser = ({ id }: Props) => {
  const { data, isLoading } = useGetAdDetailsQuery(id);
  const [adId, setAdId] = useState("");
  const [deleteAd, { isSuccess, error }] = useDeleteAdMutation({});
  const route = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Ad deleted successfully");

      route.push("/");
    }
    if (error) {
      if ("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  if (isLoading) return <div>Loading...</div>;

  const handleDelete = async () => {
    await deleteAd(adId);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
      {data ? (
        <div className="relative w-full max-w-6xl h-auto lg:h-[604px] flex flex-col lg:flex-row p-4 text-left text-5xl font-heading-24px-regular text-text2 mt-16">
          {/* Image container */}
          <div className="relative w-full lg:w-[700px] h-auto lg:h-auto flex-shrink-0">
            <div className="relative w-full h-full rounded bg-foundation-terirary-terirary-300 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                alt="Product"
                src={data.ad.ImageOne && data.ad.ImageOne.url}
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Product details */}
          <div className="relative flex flex-col lg:ml-8 lg:w-[402px] mt-64 lg:mt-0">
            <div className="w-full flex flex-col items-start justify-start p-4 text-left text-black font-sans">
              <div className="flex flex-col items-start justify-start w-full lg:w-[407px] gap-4">
                <div className="w-full flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold tracking-wide">
                    {data.ad.name}
                  </h1>
                  <p className="text-sm leading-6">{data.ad.description}</p>
                  <div className="text-xl font-bold">Rs.{data.ad.price}.00</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-black/50">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>{data.ad.address}, Sri Lanka</span>
                </div>
              </div>

              <div className="w-full lg:w-[407px] mt-6">
                <hr className="opacity-50" />
              </div>

              <div className="flex flex-col w-full lg:w-[407px] mt-6 gap-6">
                <div>
                  <h2 className="text-lg font-medium text-black/50">
                    Instructions to Buyers
                  </h2>
                  <p className="text-sm leading-6">{data.ad.tags}</p>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-black/50">
                    Category
                  </h2>
                  <p className="text-sm leading-6">{data.ad.level}</p>
                </div>
              </div>

              <div className="w-full lg:w-[407px] mt-6">
                <hr className="opacity-50" />
              </div>

              <div className="flex flex-col w-full lg:w-[407px] mt-6 gap-4">
                <h2 className="text-lg font-medium text-black/50">Seller</h2>
                <div className="flex items-center gap-2">
                  <span className="text-[14px]">{data.ad.userId}</span>
                  <div className="border-r border-black/50 h-5 mx-2" />
                  {/* <Rating rating= "5" /> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 ">
              <Link href={`/dashboard/editAd/${data.ad._id}`}>
                <input
                  type="button"
                  value="Edit"
                  className=" bg-purple-600 text-white px-2 py-4 rounded-md w-full cursor-pointer text-lg"
                />
              </Link>

              <button
                type="button"
                className=" bg-red-600 text-white  py-4 rounded-md w-full cursor-pointer text-lg"
                onClick={() => {
                  setAdId(data.ad._id);
                  handleDelete();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-black">Ad not found Please create Ad</div>
      )}
    </section>
  );
};

export default ItemDetailsUser;
