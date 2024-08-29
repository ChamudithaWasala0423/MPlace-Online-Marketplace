"use client";

import React, { useState, useEffect } from "react";
import InputArea from "@/components/ui/inputarea";
import Image from "next/image";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useUpdateUserMutation } from "@/redux/features/user/userapi";

const ProfileOverview: React.FC = () => {
  // Initialize mutation hook
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  // State management for input values
  const [name, setName] = useState("");

  // Get the current user from the Redux store
  const user = useSelector((state: any) => state.auth.user);

  // Load current user data into state
  useEffect(() => {
    if (user) {
      setName(user.name || "");
     
    }
  }, [user]);

  const handleSaveChanges = async () => {
    try {
      const updatedData: any = { name};
      await updateUser(updatedData).unwrap();
      toast.error("Profile Can not update");
    } catch (error) {
      toast.success("Profile updated successfully");
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="w-full bg-background-400 shadow-md p-6 lg:p-9 rounded-lg">
      <div className="flex items-center gap-6 mb-8">
        <Image
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
          src="/images/user.jpg"
          alt="User Profile"
          width={100}
          height={100}
        />
        <div>
          <div className="text-lg lg:text-2xl font-semibold font-sans text-black">
            {name}
          </div>
          <div className="text-sm lg:text-base text-gray-500">Colombo</div>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">Name</label>
          <InputArea
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Saman"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">Email</label>
          <InputArea
            type="email"
            value={user.email}
            placeholder="samanperera@gmail.com"
            disabled
          />
        </div>

        {/* Address */}
        {/* <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">Address</label>
          <InputArea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Wijerama,Colombo" 
          />
        </div> */}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-8">
        {/* <button 
          className="px-6 py-2 text-sm lg:text-base bg-gray-200 rounded-lg"
          onClick={() => {
            setName(user.name || '');
            setEmail(user.email || '');
            setAddress(user.address || '');
          }}
        >
          Cancel
        </button> */}
        <button
          className="px-6 py-2 text-sm lg:text-base bg-purple-600 text-white rounded-lg"
          onClick={handleSaveChanges}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
};

export default ProfileOverview;
