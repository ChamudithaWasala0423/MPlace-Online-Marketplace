"use client";
import React from "react";
import ItemDetailsUser from "@/components/ui/itemDetailsUser";
import { useSelector } from "react-redux";


const Page = ({ params }: any) => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <div>
      {user ? (
        <ItemDetailsUser id={params.id} />
      ) : (
        <div className="text-black flex items-end justify-center font-medium">
          You are not authorized! Please Login
        </div>
      )}
    </div>
  );
};

export default Page;
