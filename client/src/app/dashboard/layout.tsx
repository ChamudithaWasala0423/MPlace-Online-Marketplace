"use client";

import React from "react";
import Sidebar from "@/components/ui/Sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-sidebar-main lg:gap-[74px] p-4 bg-background-400">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:col-start-2 lg:col-end-3 flex-1 bg-background-400 p-6 shadow-md">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
