"use client";

import React, { useState } from "react";
import InputArea from "@/components/ui/inputarea";
import Image from "next/image";

const ProfileOverview: React.FC = () => {
  // State management for input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

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
          <div className="text-lg lg:text-2xl font-semibold font-sans text-black">Saman Perera</div>
          <div className="text-sm lg:text-base text-gray-500">Wijerama, Colombo</div>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">First Name</label>
          <InputArea 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="Saman" 
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">Last Name</label>
          <InputArea 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Perera" 
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">Email</label>
          <InputArea 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="samanperera@gmail.com" 
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-black text-[16px]">Address</label>
          <InputArea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Wijerama,Colombo" 
          />
        </div>

        {/* Password Change */}
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-2">
            <label className="font-sans text-black text-[16px]">Current Password</label>
            <InputArea 
              type="password" 
              value={currentPassword} 
              onChange={(e) => setCurrentPassword(e.target.value)} 
              placeholder="Current Password" 
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="font-sans text-black text-[16px]">New Password</label>
            <InputArea 
              type="password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              placeholder="New Password" 
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="font-sans text-black text-[16px]">Confirm New Password</label>
            <InputArea 
              type="password" 
              value={confirmNewPassword} 
              onChange={(e) => setConfirmNewPassword(e.target.value)} 
              placeholder="Confirm New Password" 
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="px-6 py-2 text-sm lg:text-base bg-gray-200 rounded-lg">
          Cancel
        </button>
        <button className="px-6 py-2 text-sm lg:text-base bg-purple-600 text-white rounded-lg">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ProfileOverview;
