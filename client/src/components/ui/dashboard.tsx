"use client";
import React from "react";
import Sidebar from "./Sidebar"; // Make sure to import the updated Sidebar

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[1161px] lg:h-[806px] bg-background-400 justify-center gap-6 lg:gap-[74px] p-4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex-col lg:w-[870px] w-full bg-background-400 pt-[36px] pr-[72px] pb-[36px] pl-[72px] shadow-md ">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            Create New Ad
          </button>
        </div>
        // Content Grid *
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          //Example Card
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Ad Performance
            </h3>
            <p className="text-gray-500">
              Detailed analytics of your ads will appear here.
            </p>
          </div>
          //Add more cardscomponents as needed
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
