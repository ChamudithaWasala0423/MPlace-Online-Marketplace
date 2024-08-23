"use client";

import React from "react";
import DashboardLayout from "../layout";

const Page: React.FC = () => {
  return (
    <main className="flex-1 p-4 lg:p-6">
    <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
    <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors mb-6">
      Create New Ad
    </button>
    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Example Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Ad Performance</h3>
        <p className="text-gray-500">
          Detailed analytics of your ads will appear here.
        </p>
      </div>
      {/* Add more cards/components as needed */}
    </div>
  </main>
  );
};

export default Page;
