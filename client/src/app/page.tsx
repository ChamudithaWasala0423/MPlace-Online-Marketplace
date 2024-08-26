import Image from "next/image";
import Footer from "../components/ui/footer";
import globals from "globals";
import Navbar from "../components/ui/navbar";
import Button from "../components/ui/button";
import SearchBar from "../components/ui/searchbar";
import Contact from "@/pages/contact";
import Textarea from "@/components/ui/textarea"
import ProductDetails from "@/components/ui/productDetails";
import About from "@/pages/about";
import ItemDisplaySmall from "@/components/ui/itemDisplaySmall";
import FeaturedAdvertisement from "@/pages/featuredAdvertisement";
import Category from "@/pages/category";
import RecentlyAdded from "@/pages/recentlyAdded";

export default function Home() {
  return (
    <div >
      <RecentlyAdded />
    </div>
  );
}
