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

const defaultCategories: Item[] = [
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
  { id: 2, name: "Electronics", icon: "/images/electronics.png" },
  { id: 3, name: "Electronics", icon: "/images/electronics.png" },
];

const ItemsSection = () => {
  return <div>ItemsSection</div>;
};

export default ItemsSection;
