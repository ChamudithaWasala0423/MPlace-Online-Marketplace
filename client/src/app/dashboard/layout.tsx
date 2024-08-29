"use client";

import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const user = useSelector((state: any) => state.auth.user);
  // const router = useRouter();
  // if(!user){
  //   toast.error("Please login to continue");
  //   router.push("../login");
  // }
  return (
    <div className="bg-background-400">
      <div className="flex px-4 align- w-full justify-end bg-background-400 text-black font-sans font-normal lg:my-12 sm:my-6 lg:px-32 ">Welcome </div>
      <div className="flex flex-col lg:grid lg:grid-cols-sidebar-main lg:gap-[74px]  bg-background-400 lg:px-32 px-8">

        <Sidebar />

        {/* Main Content */}
        <main className="lg:col-start-2 lg:col-end-3 flex-1 bg-background-400  shadow-sm font-sans">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
