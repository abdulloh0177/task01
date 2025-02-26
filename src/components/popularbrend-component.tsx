import React from "react";
import { Box, Typography } from "@mui/material";
import NokiaLogo from "@/assets/nokia.svg";
import AppleLogo from "@/assets/apple.svg";
import LgLogo from "@/assets/lg.svg";
import HuaweLogo from "@/assets/huwai.svg";
import SamsungLogo from "@/assets/samsungLogo.svg";
import MiLogo from "@/assets/mi.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const PopularBrendComponent = () => {
  const images = [
    NokiaLogo,
    AppleLogo,
    SamsungLogo,
    SamsungLogo,
    SamsungLogo,
    SamsungLogo,
  ];
  const images2 = [HuaweLogo, LgLogo, MiLogo, MiLogo, MiLogo, MiLogo];
  return (
    <Box className="mt-[32px]">
      <Typography className="text-[24px]" variant="h1">
        Популярные бренды
      </Typography>
      <Box className="mt-[24px] flex items-center overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 gap-[6px]">
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Phones
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Accessories
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Premium
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Sport
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Toys
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Beauty
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Books
        </Box>
        <Box className="py-[8px] cursor-pointer px-[50px] rounded-lg bg-secondary hover:text-primary">
          Shoes
        </Box>
      </Box>
      <Box>
        <Marquee
          className="mt-[24px]  flex items-center gap-[6px] "
          gradient={false}
          speed={70}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              className="py-[12px] cursor-pointer mx-4 rounded-md border-1 border-gray-400 bg-[#EAE9EF] px-[56px]"
            >
              <Image width={92} height={52} src={img} alt="nokia-logo" />
            </Box>
          ))}
        </Marquee>

        <Box className="mt-[24px]">
          <Marquee
            gradient={false}
            speed={70}
            direction="right"
          >
            {images2.map((img, index) => (
              <Box
                key={index}
                className="py-[12px] cursor-pointer mx-4 rounded-md border-1 border-gray-400 bg-[#EAE9EF] px-[56px]"
              >
                <Image width={92} height={52} src={img} alt="nokia-logo" />
              </Box>
            ))}
          </Marquee>
        </Box>
      </Box>
    </Box>
  );
};

export default PopularBrendComponent;
