"use client";

import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-background-400">
      <Navbar></Navbar>
      <div className="flex px-4 lg:px3-2 align- w-full justify-end bg-background-400 text-black font-sans font-normal lg:my-20 sm:my-10 ">Welcome </div>
      <div className="flex flex-col lg:grid lg:grid-cols-sidebar-main lg:gap-[74px]  bg-background-400 lg:px-32 px-8">

        <Sidebar />

        {/* Main Content */}
        <main className="lg:col-start-2 lg:col-end-3 flex-1 bg-background-400  shadow-md font-sans">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
