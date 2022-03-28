import { Flex, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import heroText from '../assets/images/hero/hero_text.svg';
import heroLeftCorner from '../assets/images/hero/hero_left_corner.svg';
import mountain from '../assets/images/hero/mountain.png';
import ship01 from '../assets/images/hero/ship01.png';
import ship02 from '../assets/images/hero/ship02.png';
import ship03 from '../assets/images/hero/ship03.png';
import ship04 from '../assets/images/hero/ship04.png';
import leaf from '../assets/images/hero/leaf.svg';
import beach from '../assets/images/hero/beach.png';
import heroSun from '../assets/images/hero/hero_sun.png';
import heroSunLight from '../assets/images/hero/hero_sun_light.png';
import logo from '../assets/images/logo_w.svg';

import useSpace from '../hooks/useSpace.js';

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Hero = () => {
  const { space } = useSpace();
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="sky"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" w="100%" h="100%">
        <MotionImage
          src={logo}
          position="absolute"
          left={{ base: 0, lg: '15%' }}
          right={{ base: 0, lg: '' }}
          margin={{ base: '0 auto', lg: 'unset' }}
          top={{ base: '70px', lg: '9vh', xl: '10vh', '2xl': '18vh' }}
          h={{ base: '180px', lg: 'auto' }}
          w={{ base: '280px', lg: '300px', xl: '400px', '2xl': '55vh' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: '1', duration: 1.5 }}
        />
        <MotionImage
          position="absolute"
          left={{ base: 0, lg: 'unset' }}
          right={{ base: 0, lg: '20%' }}
          margin={{ base: '0 auto', lg: 'unset' }}
          top={{ base: '270px', lg: '30vh' }}
          src={heroText}
          w={{ base: '280px', lg: '300px', xl: '23vw' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: '1', duration: 1.5 }}
        />

        <MotionBox
          position="absolute"
          w={{ base: '300px', lg: '500px' }}
          right={{ base: '2%', lg: '10%' }}
          bottom={{ base: '240px', lg: '200px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: '1', duration: 2 }}
        >
          <MotionImage
            position="absolute"
            left="0"
            right="0"
            margin="0 auto"
            bottom="0"
            src={heroSun}
            w={{ base: '200px', lg: '380px' }}
            h="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: '1', duration: 3 }}
          />
          <MotionImage
            position="absolute"
            left="0"
            right="0"
            margin="0 auto"
            bottom="-30px"
            src={heroSunLight}
            w={{ base: '240px', lg: '410px' }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.2, scale: 1.2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              // repeatType: 'reverse',
            }}
          />
        </MotionBox>
        <Box
          position="absolute"
          bottom="0"
          w="100%"
          h={{ base: '250px', lg: '220px' }}
          bgGradient="linear(to-b, sun, umi)"
          zIndex="0"
        />
        <Image
          src={mountain}
          w="800px"
          position="absolute"
          bottom={{ base: '250px', lg: '219px' }}
          right={{ base: '-50px', lg: '-180px' }}
        />
        <MotionImage
          src={leaf}
          w={{ base: '100px', lg: '240px' }}
          position="absolute"
          left={{ base: '-20px', lg: '20%' }}
          bottom="220px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: '1', duration: 0.5 }}
        />
        <Image
          src={beach}
          w={{ base: '200px', lg: '500px' }}
          position="absolute"
          bottom={{ base: '15vh', lg: '10vh' }}
          left="-50px"
        />
        <Image
          src={heroLeftCorner}
          w={{ base: '120px', lg: '20vw' }}
          position="absolute"
          bottom="0"
          left="0"
        />
        <MotionImage
          src={ship01}
          w={{ base: '60px', lg: '100px' }}
          position="absolute"
          left="30%"
          bottom={{ base: '200px', lg: '170px' }}
          opacity={0}
          animate={{ opacity: 1, x: -50, y: -10 }}
          transition={{ delay: '1', duration: 2.5 }}
        />
        <MotionImage
          src={ship02}
          w={{ base: '200px', lg: '250px' }}
          position="absolute"
          right={{ base: '3vw', lg: '40%' }}
          bottom="30px"
          opacity={0}
          animate={{ opacity: 1, x: -100, y: 15 }}
          transition={{ delay: '1', duration: 3 }}
        />
        <MotionImage
          src={ship03}
          w="70px"
          position="absolute"
          // right="45%"
          right={{ base: '10px', lg: '40%' }}
          bottom={{ base: '200px', lg: '100px' }}
          animate={{ opacity: 1, x: '8vw' }}
          transition={{
            delay: '1',
            duration: 3.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <MotionImage
          src={ship04}
          w={{ base: '70px', lg: '170px' }}
          position="absolute"
          right={{ base: '5px', lg: '4%' }}
          bottom={{ base: '100px', lg: '80px' }}
          opacity={0}
          animate={{ opacity: 1, x: '-5vw', y: '40px' }}
          transition={{ delay: '1', duration: 4 }}
        />
      </Box>
      {/* <Flex w={space} zIndex="1">
        <Flex>
          <Image src={heroText} w="300px" />
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export default Hero;
