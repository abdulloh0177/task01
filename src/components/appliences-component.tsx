import React from 'react'
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import EmbadedImage from "@/assets/aspirador 1.png";
import VocumImage from "@/assets/vocum.png";
import WashingImage from "@/assets/washing.png";
import RefrigaratorImage from "@/assets/refrigerates.png";
import AirImage from "@/assets/air.png";


const AppliencesComponent = () => {
  return (
    <Box className="mt-[32px] mb-[64px]">
      <Typography className="text-[24px]" variant="h1">
        Home Appliances
      </Typography>
      <Box className="grid  grid-cols-5 max-[980px]:grid-cols-3 max-[473px]:grid max-[473px]:grid-cols-2 max-[580px]:flex  max-[580px]:flex-wrap max-[580px]:justify-between max-md:gap-[24px] gap-[32px] mt-[24px]">
        <Box className="p-[16px] max-w-[235px]  transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image
            className="mr-auto ml-auto"
            src={EmbadedImage}
            alt="embaded-image"
          />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "32px",
            }}
            variant="h2"
          >
            Embedded technique
          </Typography>
        </Box>
        <Box className="p-[16px] max-w-[235px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image
            className="mr-auto ml-auto"
            src={VocumImage}
            alt="vocum-image"
          />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "32px",
            }}
            variant="h2"
          >
            Vacuum cleaners
          </Typography>
        </Box>
        <Box className="p-[16px] max-w-[235px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image
            className="mr-auto ml-auto"
            src={WashingImage}
            alt="washing-image"
          />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "32px",
            }}
            variant="h2"
          >
            Washing cars
          </Typography>
        </Box>
        <Box className="p-[16px] max-w-[235px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image
            className="mr-auto ml-auto"
            src={RefrigaratorImage}
            alt="refrigartor-image"
          />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "32px",
            }}
            variant="h2"
          >
            Refrigerators
          </Typography>
        </Box>
        <Box className="p-[16px] max-w-[235px] transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-[#fff] bg-secondary rounded-lg text-center">
          <Image className="mr-auto ml-auto" src={AirImage} alt="air-image" />
          <Typography
            sx={{
              fontSize: {
                sm: "16px",
                xs: "15px",
                md: "20px",
                lg: "20px",
              },
              marginTop: "32px",
            }}
            variant="h2"
          >
            Air conditioners
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AppliencesComponent