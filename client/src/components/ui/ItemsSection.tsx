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
const ItemsSection = () => {
  return <div>ItemsSection</div>;
};

export default ItemsSection;
