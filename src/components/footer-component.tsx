"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import PaymeSvg from "@/assets/payme.svg"
import HumoSvg from "@/assets/humo.svg"
import UzcardSvg from "@/assets/uzcard.svg"
export default function Footer() {
    const isSmallScreen = useMediaQuery("(max-width:530px)");

  return (
    <Box className="bg-secondary">
      <Box className="container py-[64px]">
        <Box className="grid grid-cols-5 max-[1220px]:grid-cols-3 max-[1220px]:gap-[25px] max-[700px]:grid-cols-2">
          <Box>
            <Typography variant="h2" className="text-secondaryText">
              Company
            </Typography>
            <ul className="text-primaryText space-y-2 mt-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  About company
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Store addresses
                </Link>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h2" className="text-secondaryText">
              Information
            </Typography>
            <ul className="text-primaryTex space-y-2 mt-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  Installment plan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Bonuses
                </Link>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h2" className="text-secondaryText">
              Help for the buyer
            </Typography>
            <ul className="text-primaryText space-y-2 mt-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  Questions and answers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  How to place an order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Exchange and return
                </Link>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h2" className="text-secondaryText">
              Payment method
            </Typography>
            <Box className="flex max-[700px]:flex-col max-[700px]:space-x-0 max-[700px]:gap-[10px] space-x-3 mt-2">
              <Image src={PaymeSvg} alt="Payme" />
              <Image src={HumoSvg} alt="Humo" />
              <Image src={UzcardSvg} alt="Uzcard" />
            </Box>
          </Box>
          <Box>
            <Typography variant="h2" className="text-secondaryText mt-4">
              We are in social networks
            </Typography>
            <Box className="flex space-x-4 mt-2 text-primaryText">
              <Link
                href="https://www.linkedin.com/"
                className="text-2xl hover:text-primary"
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="text-2xl hover:text-primary"
              >
                <Instagram />
              </Link>
              <Link
                href="https://x.com/"
                className="text-2xl hover:text-primary"
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="text-2xl hover:text-primary"
              >
                <Facebook />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="grid grid-cols-2 max-[530px]:grid-cols-1 max-[530px]:text-center gap-[64px] mt-[64px]">
          <Box>
            <Typography
              sx={{ fontSize: isSmallScreen ? "20px" : "24px" }}
              variant="h1"
              className="text-secondaryText"
            >
              Single call center{" "}
            </Typography>
            <Typography
              sx={{
                marginTop: "16px",
                fontSize: isSmallScreen ? "16px" : "20px",
              }}
              variant="body1"
              className="text-primaryText"
            >
              +99871-200-01-05{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: isSmallScreen ? "20px" : "24px" }}
              variant="h1"
              className="text-secondaryText"
            >
              Mail for wishes and suggestions{" "}
            </Typography>
            <Typography
              sx={{
                marginTop: "16px",
                fontSize: isSmallScreen ? "16px" : "20px",
              }}
              variant="body1"
              className="text-primaryText"
            >
              📧 info@asaxiy.uz{" "}
            </Typography>
          </Box>{" "}
        </Box>
      </Box>
      {/* Footer Bottom Section */}
      <Box className="border-t  max-sm:pb-[60px] mt-6 pt-4 text-sm text-center mr-auto ml-auto text-primaryText flex flex-col md:flex-row justify-between items-center">
        <Box className="text-center mt-[12px] mb-[24px] w-full">
          <span className="font-bold text-secondaryText">Asaxiy.uz</span> All
          rights reserved
        </Box>
      </Box>
    </Box>
  );
}
