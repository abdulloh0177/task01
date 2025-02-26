import React from 'react'
import { Box } from '@mui/material'
import CaruselComponent from './carusel-component'
import PopularCategories from './popular-categories'
import BestsellerComponent from './bestseller-component'
import AppliencesComponent from './appliences-component'
import PopularBrendComponent from './popularbrend-component'
import ScanerComponent from './scaner-component'
const MainComponent = () => {
  return (
    <Box>
      <Box className="container w-full">
        <CaruselComponent />
        <PopularCategories />
        <BestsellerComponent title="Bestsellers" />
        <AppliencesComponent />
        <BestsellerComponent title="Buyers choice" />
        <PopularBrendComponent />
      </Box>
      <Box className="bg-[#E0E8FF]">
        <Box className="container">
          <ScanerComponent />
        </Box>
      </Box>
    </Box>
  );
}

export default MainComponent