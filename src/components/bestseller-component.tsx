"use client";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Image from "next/image";
import SamsungImage from "@/assets/samsung.png";
import VivoImage from "@/assets/vivo.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Checkbox } from "@mui/material";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  SyncAltOutlined,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import { ComponentTitleProps } from "@/typings/utilis";

const BestsellerComponent = (props: ComponentTitleProps) => {
  const isSmallScreen = useMediaQuery("(max-width:1288px)");
  const { title } = props;

  return (
    <Box  className="mt-[32px] mb-[64px]">
      <Typography className="text-[24px]" variant="h1">
        {title}
      </Typography>
      <Box className="grid grid-cols-4 max-[945px]:flex max-[945px]:items-center  max-[945px]:flex-wrap  max-[945px]:justify-between max-[768px]:grid max-[768px]:grid-cols-2 max-[1000px]:gap-[24px]  gap-[32px] mt-[24px]">
        <Box className="max-w-[300px] max-[480px]:p-[16px] rounded-lg max-h-[448px] p-[24px] shadow-md">
          <Image className="mb-[12px]" src={SamsungImage} alt="samsung-image" />
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            Samsung Galaxy A41 Red 64 GB
          </Typography>
          <Typography
            sx={{
              marginBottom: "8px",
              fontSize: {
                sm: "18px",
                xs: "18px",
                md: "20px",
                lg: "20px",
              },
            }}
            color="text.secondary"
            variant="h2"
          >
            3 144 000 сум
          </Typography>
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            From 385 000 sum/12 months
          </Typography>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>

          <Box className="w-full max-[1065px]:mt-[40px] max-[945px]:mt-[20px]  mt-[20px] flex items-center justify-between">
            <Box>
              {isSmallScreen ? (
                <Button variant="contained" size="small" color="primary">
                  <ShoppingCartOutlined />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlined />}
                  color="primary"
                >
                  Add to cart
                </Button>
              )}
            </Box>
            <Box className="flex  items-center max-[1180px]:gap-[0px] gap-[10px]">
              <SyncAltOutlined className="hover:text-primary cursor-pointer" />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className="hover:text-primary"
                sx={{
                  color: "text.primary",
                  "&.Mui-checked": { color: "blue" },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className="max-w-[300px] max-[480px]:p-[16px] rounded-lg max-h-[448px] p-[24px] shadow-md">
          <Image className="mb-[12px]" src={SamsungImage} alt="samsung-image" />
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            Samsung Galaxy A41 Red 64 GB
          </Typography>
          <Typography
            sx={{
              marginBottom: "8px",
              fontSize: {
                sm: "18px",
                xs: "18px",
                md: "20px",
                lg: "20px",
              },
            }}
            color="text.secondary"
            variant="h2"
          >
            3 144 000 сум
          </Typography>
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            From 385 000 sum/12 months
          </Typography>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>

          <Box className="w-full max-[1065px]:mt-[40px] max-[945px]:mt-[20px] mt-[20px] flex items-center justify-between">
            <Box>
              {isSmallScreen ? (
                <Button variant="contained" size="small" color="primary">
                  <ShoppingCartOutlined />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlined />}
                  color="primary"
                >
                  Add to cart
                </Button>
              )}
            </Box>
            <Box className="flex max-[1180px]:gap-[0px] items-center gap-[10px]">
              <SyncAltOutlined className="hover:text-primary cursor-pointer" />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className="hover:text-primary"
                sx={{
                  color: "text.primary",
                  "&.Mui-checked": { color: "blue" },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className="max-w-[300px] max-[480px]:p-[16px] rounded-lg max-h-[448px] p-[24px] shadow-md">
          <Image className="mb-[12px]" src={SamsungImage} alt="samsung-image" />
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            Samsung Galaxy A41 Red 64 GB
          </Typography>
          <Typography
            sx={{
              marginBottom: "8px",
              fontSize: {
                sm: "18px",
                xs: "18px",
                md: "20px",
                lg: "20px",
              },
            }}
            color="text.secondary"
            variant="h2"
          >
            3 144 000 сум
          </Typography>
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            From 385 000 sum/12 months
          </Typography>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>

          <Box className="w-full max-[1065px]:mt-[40px] max-[945px]:mt-[20px] mt-[20px] flex items-center justify-between">
            <Box>
              {isSmallScreen ? (
                <Button variant="contained" size="small" color="primary">
                  <ShoppingCartOutlined />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlined />}
                  color="primary"
                >
                  Add to cart
                </Button>
              )}
            </Box>
            <Box className="flex max-[1180px]:gap-[0px] items-center gap-[10px]">
              <SyncAltOutlined className="hover:text-primary cursor-pointer" />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className="hover:text-primary"
                sx={{
                  color: "text.primary",
                  "&.Mui-checked": { color: "blue" },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className="max-w-[300px] max-[480px]:p-[16px] rounded-lg max-h-[448px] p-[24px] shadow-md">
          <Image className="mb-[12px]" src={VivoImage} alt="vivo-image" />
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            Samsung Galaxy A41 Red 64 GB
          </Typography>
          <Typography
            sx={{
              marginBottom: "8px",
              fontSize: {
                sm: "18px",
                xs: "18px",
                md: "20px",
                lg: "20px",
              },
            }}
            color="text.secondary"
            variant="h2"
          >
            3 144 000 сум
          </Typography>
          <Typography sx={{ marginBottom: "16px" }} variant="body1">
            From 385 000 sum/12 months
          </Typography>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>

          <Box className="w-full max-[1065px]:mt-[40px] max-[945px]:mt-[20px] mt-[20px] flex items-center justify-between">
            <Box>
              {isSmallScreen ? (
                <Button variant="contained" size="small" color="primary">
                  <ShoppingCartOutlined />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartOutlined />}
                  color="primary"
                >
                  Add to cart
                </Button>
              )}
            </Box>
            <Box className="flex max-[1180px]:gap-[0px] items-center gap-[10px]">
              <SyncAltOutlined className="hover:text-primary cursor-pointer" />
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className="hover:text-primary"
                sx={{
                  color: "text.primary",
                  "&.Mui-checked": { color: "blue" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BestsellerComponent;
