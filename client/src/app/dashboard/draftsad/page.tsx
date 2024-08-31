
import Itemcard from '@/components/ui/itemcard';
import Link from 'next/link';
import React from 'react'

type DraftAd = {
    id?: number;
    name?: string;
    description?: string;
    price?: string;
    location?: string;
    daysAdded?: number;
    itemImage?: string;
  };

  type Props = {
    drafts?: DraftAd[];
    
    
  };
  const defaultAds: DraftAd[] = [
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
  
    {
      id: 2,
      name: "Vintage Chair",
      description:
        "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
      price: "LKR 15,000",
      location: "Colombo, Sri Lanka",
      daysAdded: 5,
      itemImage: "/images/chair.jpg",
    },
  
    {
      id: 3,
      name: "Vintage Chair",
      description:
        "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
      price: "LKR 15,000",
      location: "Colombo, Sri Lanka",
      daysAdded: 5,
      itemImage: "/images/chair.jpg",
    },
    {
      id: 4,
      name: "Vintage Chair",
      description:
        "A beautifully crafted vintage chair that adds a touch of elegance to any room. This chair features a classic design with intricate woodwork and a comfortable cushioned seat, perfect for both decorative and practical use. The chair has been well-maintained and is in excellent condition, making it a unique addition to your furniture collection.",
      price: "LKR 15,000",
      location: "Colombo, Sri Lanka",
      daysAdded: 5,
      itemImage: "/images/chair.jpg",
    },
  ]; 
const DraftsAd = ({drafts=defaultAds}) => {
  return (
    <div className="w-full relative flex flex-row items-center justify-center flex-wrap content-center py-9 px-0 box-border gap-6">
       {drafts.map((item) => (
        <Link href="./sellerAdDisplayDraftAd" key={item.id}>
          <Itemcard
            name={item.name || "Default Category"}
            description={item.description || "Default description"}
            price={item.price || "Default price"}
            location={item.location || "Default location"}
            daysAdded="2" // Convert number to string
            itemImage={item.itemImage || "/images/chair.jpg"}
          />
        </Link>
      ))}
    </div>
  )
}

export default DraftsAd;