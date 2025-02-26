"use client";
import React, { useState,useMemo,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneIconSvg from "@/assets/phone.svg";
import LocationIconSvg from "@/assets/location_on.svg";
import UKIconSvg from "@/assets/united-kingdom 1.svg";
import ArrowDownSvg from "@/assets/arrow_drop_down.svg";
import NavbarComponent from "./navbar-component";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { Close,Menu,MenuOutlined } from "@mui/icons-material";
import SearchInput from "./search-input";
import CategoriesComponent from "./categories-component";
const HeaderComponent = () => {
const [menuOpen, setMenuOpen] = useState(false);
 const [isTop, setTop] = useState(false);
 const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 66) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  const handleSc = useMemo(() => handleScroll, []);
  useEffect(() => {
    window.addEventListener("scroll", handleSc);

    return () => {
      window.removeEventListener("scroll", handleSc);
    };
  }, [handleSc]);
  return (
    <>
      <Box className="container">
        <Box className="w-full flex items-center justify-between pt-3 pb-3">
          <Box className="flex max-sm:gap-[20px] text-primaryText gap-[32px]">
            <Link className="hover:text-primary" href={"/"}>
              About
            </Link>
            <Link className="hover:text-primary" href={"/"}>
              Leave feedback
            </Link>
            <Link className="hover:text-primary" href={"/"}>
              Delivery
            </Link>
          </Box>
          <Box className="flex gap-[32px] max-[915px]:hidden">
            <Box className="text-primaryText flex gap-1 items-center">
              <Image src={PhoneIconSvg} alt="phone-icon-svg" />
              <Typography>+998 97 778-17-08</Typography>
            </Box>
            <Box className="text-primaryText flex gap-1 items-center">
              <Image src={LocationIconSvg} alt="location-icon-svg" />
              <Typography>Tashkent</Typography>
            </Box>
            <Box className="text-primaryText flex gap-1 items-center">
              <Image src={UKIconSvg} alt="uk-icon-svg" />
              <Typography>Eng</Typography>
              <Image src={ArrowDownSvg} alt="arrowdown-icon-svg" />
            </Box>
          </Box>
          <Box className="hidden max-[915px]:flex">
            <IconButton
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu />
            </IconButton>
          </Box>
        </Box>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <Box className="w-64 p-4">
            <Box className="flex justify-between items-center mb-4">
              <Typography variant="h2" className="text-lg font-semibold">
                Menu
              </Typography>
              <IconButton
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <Close />
              </IconButton>
            </Box>
            <Box className="w-full mb-6">
              <SearchInput size="small" />
            </Box>
            <Box className="flex  flex-col gap-[20px]">
              <Box className="text-primaryText flex gap-2 items-center">
                <Image src={PhoneIconSvg} alt="phone-icon-svg" />
                <Typography>+998 97 778-17-08</Typography>
              </Box>
              <Box className="text-primaryText flex gap-2 items-center">
                <Image src={LocationIconSvg} alt="location-icon-svg" />
                <Typography>Tashkent</Typography>
              </Box>
              <Box className="text-primaryText flex gap-2 items-center">
                <Image src={UKIconSvg} alt="uk-icon-svg" />
                <Typography>Eng</Typography>
                <Image src={ArrowDownSvg} alt="arrowdown-icon-svg" />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
      <hr />
      <NavbarComponent isTop={isTop} />
      <CategoriesComponent isTop={isTop}/>
    </>
  );
};

export default HeaderComponent;
