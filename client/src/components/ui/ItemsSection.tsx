import React from "react";
import Itemcard from "./Itemcard";

type Item = {
  id?: number;
  name?: string;
  description?: string;
  price?: string;
  location?: string;
  daysAdded?: number;
  itemImage?: string;
};

type Props = {
  items?: Item[];
};

const defaultItems: Item[] = [
  {
    id: 1,
    name: "Vintage Chair",
    description:
      "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
    price: "LKR 15,000",
    location: "Colombo, Sri Lanka",
    daysAdded: 5,
    itemImage: "/images/chair.jpg",
  },
];

const ItemsSection: React.FC<Props> = ({ items = defaultItems }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold font-sans mb-12 text-center text-black">
        Categories
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {items.map((item) => (
          <Itemcard
            key={item.id}
            name={item.name || 'Default Category'}
            description={item.description || 'Default description'}
            price={item.price || 'Default price'}
            location={item.location || 'Default location'}
            daysAdded={item.daysAdded || 0}
            itemImage={item.itemImage || '/images/chair.jpg'}
          />
        ))}
      </div>
    </section>
  );
};

export default ItemsSection;
