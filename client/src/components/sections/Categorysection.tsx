import React from "react";
import Categorycard from "../ui/Categorycard";
import Link from "next/link";

type Category = {
  id?: number;
  name?: string;
  icon?: string;
};

type Props = {
  categories?: Category[];
};

const defaultCategories: Category[] = [
  { id: 1, name: "Electronics", icon: "/images/electronics.png" },
  { id: 2, name: "Electronics", icon: "/images/electronics.png" },
  { id: 3, name: "Electronics", icon: "/images/electronics.png" },
];

const Categorysection: React.FC<Props> = ({ categories = defaultCategories }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold font-sans mb-12 text-center text-black">
        Categories
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {categories.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <Link href="/category">
          
          <Categorycard
            key={category.id}
            category={category.name || 'Default Category'}
            icon={category.icon || 'Default Category'}
          />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categorysection;
