'use client'
import React, { useState } from "react";
import Categorycard from "../ui/Categorycard";
import Link from "next/link";
import { MdLaptopMac } from "react-icons/md";
import { IoPhonePortraitOutline, IoHome } from "react-icons/io5";
import { FaDog } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";


type Category = {
  id?: number;
  name?: string;
  icon: React.ReactNode;
};

type Props = {
  categories?: Category[];
};

const defaultCategories: Category[] = [
  { id: 1, name: "Laptops", icon:<MdLaptopMac size={60} color="black" />},
  { id: 2, name: "Smart Phones", icon:<IoPhonePortraitOutline size={60} color="black" /> },
  { id: 3, name: "Animals", icon:<FaDog  size={60} color="black" />},
  { id: 4, name: "Property", icon:<IoHome size={60} color="black" />  },
  { id: 5, name: "Vehicles", icon:<FaCar size={60} color="black" />  },
];

const Categorysection: React.FC<Props> = ({ categories = defaultCategories }) => {
 

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold font-sans mb-12 text-center text-black">
        Categories
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {categories.map((category) => (
          <Link key={category.id} href="/category">
          <Categorycard
            key={category.id}
            category={category.name || 'Default Category'}
            icon={category.icon}
          />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categorysection;
