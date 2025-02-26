import React from 'react'
import { Box,Typography } from '@mui/material'
import Image from 'next/image';
import IphoneImage from "@/assets/iphone.png";
import MonitorImage from "@/assets/monitor.png";
import PcImage from "@/assets/pc.png";
import WatchImage from "@/assets/watch.png";

const PopularCategories = () => {
  return (
    <Box className="mt-[32px] mb-[64px]">
      <Typography className="text-[24px]" variant="h1">
        Popular categories
      </Typography>
      <Box className="grid grid-cols-4 max-sm:grid-cols-2 max-md:gap-[24px] gap-[32px] mt-[24px]">
        <Box className="p-[16px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image src={IphoneImage} alt="iphone-image" />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "16px",
            }}
            variant="h2"
          >
            Smartphones
          </Typography>
        </Box>
        <Box className="p-[16px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image src={MonitorImage} alt="monitor-image" />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "16px",
            }}
            variant="h2"
          >
            Monitors
          </Typography>
        </Box>
        <Box className="p-[16px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image src={PcImage} alt="pc-image" />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "16px",
            }}
            variant="h2"
          >
            Computers
          </Typography>
        </Box>
        <Box className="p-[16px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image src={WatchImage} alt="watch-image" />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "16px",
            }}
            variant="h2"
          >
            Accessories
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PopularCategories