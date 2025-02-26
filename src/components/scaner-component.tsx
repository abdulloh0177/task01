"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import PlayMarket from "@/assets/playmarket.svg";
import AppStore from "@/assets/appstore.svg";
import QrPhone from "@/assets/qrphone.png";
import AsaxiyLogo from "@/assets/asaxiySmallLogo.svg";
import Image from "next/image";
import Link from "next/link";
const ScanerComponent = () => {
  return (
    <Box className="mt-[32px] pt-[24px] max-[760px]:grid-cols-1 max-[760px]:text-center  items-center grid grid-cols-2">
      <Box>
        <Box className="flex max-[760px]:justify-center items-center gap-[10px] mb-[8px]">
          <Image src={AsaxiyLogo} alt="asaxiy_logo" />
          <Typography>mobile application</Typography>
        </Box>
        <Typography
          sx={{ fontSize: "40px" }}
          variant="h1"
          className="text-secondaryText"
        >
          Order via mobile app
        </Typography>
        <Box className="mt-[24px] flex max-[760px]:justify-center items-center gap-[10px]">
          <Link href={"https://play.google.com"}>
            <Image
              className="cursor-pointer"
              src={PlayMarket}
              alt="play-market"
            />
          </Link>
          <Link href={"https://play.google.com"}>
            <Image className="cursor-pointer" src={AppStore} alt="app-store" />
          </Link>
        </Box>
      </Box>
      <Box className="flex items-center gap-[15px]">
        <Image src={QrPhone} alt="qrphone" />
        <Box className="text-[20px] max-[530px]:text-[16px]">
          Scan the QR code and install the application
        </Box>
      </Box>
    </Box>
  );
};

export default ScanerComponent;
