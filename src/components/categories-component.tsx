"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { MyHeaderComponentProps } from "@/typings/utilis";
import { categories } from "@/data/categories";

const CategoriesComponent = (props: MyHeaderComponentProps) => {
  const { isTop } = props;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Box
      className={`bg-[#F8F8F8] ${
        isTop ? "fixed z-50 left-0 right-0 top-[11%] max-[915px]:top-[9%] max-sm:top-[8%]" : ""
      }`}
    >
      <Box className="container  py-[2px] px-[16px] flex overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {categories.map((category, index) => (
          <Link
            key={index}
            onClick={() => setActiveCategory(category)}
            href={`#${category}`}
            className={`px-4 py-2 cursor-pointer flex-shrink-0 
              ${
                activeCategory === category
                  ? "bg-primary text-white font-semibold"
                  : " hover:text-primary"
              }`}
          >
            {category}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CategoriesComponent;
