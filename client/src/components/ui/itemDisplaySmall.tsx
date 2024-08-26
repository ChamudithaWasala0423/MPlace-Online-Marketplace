import { FunctionComponent } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Itemcard from './itemcard';
import { title } from 'process';

interface ItemDisplaySmallProps {
  title?:string;
  items?: {
    name?: string;
    description?: string;
    price?: string;
    location?: string;
    daysAdded?: number;
    itemImage?: string;
  }[];
}

const defaultItems = [
  {
    name: "Vintage Chair",
    description:
      "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
    price: "LKR 15,000",
    location: "Colombo, Sri Lanka",
    daysAdded: 5,
    itemImage: "/images/chair.jpg",
  },
  {
    name: "Vintage Chair",
    description:
      "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
    price: "LKR 15,000",
    location: "Colombo, Sri Lanka",
    daysAdded: 5,
    itemImage: "/images/chair.jpg",
  },
  {
    name: "Vintage Chair",
    description:
      "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
    price: "LKR 15,000",
    location: "Colombo, Sri Lanka",
    daysAdded: 5,
    itemImage: "/images/chair.jpg",
  }
];

const ItemDisplaySmall: FunctionComponent<ItemDisplaySmallProps> = ({ items = defaultItems, title }) => {
  return (
    <div className="relative w-full h-auto lg:py-12">
      <p className="text-2xl font-bold lg:text-3xl text-black text-center">{title}</p>
      <div className="flex items-center justify-center gap- mt-8 flex-wrap">
      {items.map((item, index) => (
          <Itemcard
            key={index}
            name={item.name || "Default Product Name"}
            description={item.description || "Default description"}
            price={item.price || "$0.00"}
            location={item.location || "Default Location"}
            daysAdded={item.daysAdded || 0}
            itemImage={item.itemImage || "/path-to-your-default-image.jpg"}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 lg:left-4">
        <FaChevronLeft className="text-2xl text-gray-600 cursor-pointer" />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 lg:right-4">
        <FaChevronRight className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default ItemDisplaySmall;