import Categorycard from "@/components/ui/Categorycard";
import Favoritebutton from "@/components/ui/Favoritebutton";
import Itemcard from "@/components/ui/Itemcard";
import Image from "next/image";


export default function Home() {
  return (
    //<Categorycard category="Electronics" icon="/images/icons8-electronics-100.png" >
    <Itemcard 
    name="Vintage chair"
    itemImage="/images/chair.jpg" 
    description="Step back in time with this exquisite Vintage Mid-Century Modern Chair, a true testament to timeless design and unparalleled craftsmanship. This classic piece boasts clean lines and a sleek silhouette, capturing the essence of mid-century elegance."
    location="Brooklyn, NY"
    price="LKR 5999"
    daysAdded={5}
    />
  );
}
