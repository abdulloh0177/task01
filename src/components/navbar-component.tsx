"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import SearchInput from "./search-input";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  LoginOutlined,
  SyncAltOutlined,
} from "@mui/icons-material";
import { MyHeaderComponentProps, SearchInputProps } from "@/typings/utilis";

const NavbarComponent = (props:MyHeaderComponentProps) => {
    const { isTop } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [shadow, setShadow] = useState(false);

  // let array: number[] = [];
  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;
  //   array.push(currentScrollPos);
  //   if (array.length > 2) {
  //     array = array.slice(array.length - 2);
  //   }
  //   console.log(currentScrollPos, "currentScrollPos");

  //   if (currentScrollPos > 66) {
  //     setTop(true);
  //   } else {
  //     setTop(false);
  //   }
  //   if (currentScrollPos > 25) {
  //     setShadow(true);
  //   } else {
  //     setShadow(false);
  //   }
  //   let result = array[0] - array[1];
  //   if (result > 20) {
  //     setIsVisible(true);
  //   } else if (result < -20) {
  //     setIsVisible(false);
  //   }
  // };
  // const handleSc = useMemo(() => handleScroll, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleSc);

  //   return () => {
  //     window.removeEventListener("scroll", handleSc);
  //   };
  // }, [handleSc]);

  const isSmallScreen = useMediaQuery("(max-width:640px)");
  const size = isSmallScreen ? "small" : "medium";
  return (
    <Box
      className={`pt-[12px] pb-[12px] ${
        isTop ? "fixed  top-0 left-0 right-0 z-50 bg-[#fff]" : " "
      } `}
    >
      <Box className="container  flex items-center justify-between ">
        <Box className="flex-shrink-0">
          <Image className="max-sm:w-[120px]" src={Logo} alt="logo" />
        </Box>
        <Box className="w-full max-w-lg max-[1200px]:w-[200px] max-[915px]:hidden max-sm:flex">
          <SearchInput size={size} />
        </Box>
        <Box className="flex items-center gap-[24px] max-sm:w-full max-sm:bg-[#fff] max-sm:fixed z-50 max-sm:bottom-[-1%] max-sm:left-1/2 max-sm:translate-x-[-50%]  max-sm:justify-between max-sm:py-4 max-sm:px-5 max-sm:shadow-md max-sm:shadow-grey-400 max-sm:border-t max-sm:border-gray-300 max-sm:text-sm ">
          <Box className="flex flex-col items-center cursor-pointer hover:text-primary">
            <ShoppingCartOutlined />
            <Typography
              sx={{
                fontSize: isSmallScreen ? "14px" : "16px",
              }}
            >
              Basket
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer hover:text-primary">
            <FavoriteBorderOutlined />
            <Typography
              sx={{
                fontSize: isSmallScreen ? "14px" : "16px",
              }}
            >
              Favorites
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer hover:text-primary">
            <SyncAltOutlined />
            <Typography
              sx={{
                fontSize: isSmallScreen ? "14px" : "16px",
              }}
            >
              Comparison
            </Typography>
          </Box>
          <Box className="flex flex-col items-center cursor-pointer hover:text-primary">
            <LoginOutlined />
            <Typography
              sx={{
                fontSize: isSmallScreen ? "14px" : "16px",
              }}
            >
              To come in
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarComponent;
