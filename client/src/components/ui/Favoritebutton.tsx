"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Favoritebutton: React.FC = ({}) => {
  const [isFavorited, setFavorited] = useState(false);

  const clickFav = () => {
    setFavorited(!isFavorited);
  };
  return (
    <button onClick={clickFav} className="text-purple-600 text-[20px]">
      {isFavorited ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default Favoritebutton;
