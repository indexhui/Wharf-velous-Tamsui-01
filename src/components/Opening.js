import { useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo_pure.svg';
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const Opening = () => {
  const [display, setDisplay] = useState('flex');
  return (
    <MotionFlex
      zIndex="100"
      bg="sky"
      w="100vw"
      h="100vh"
      position="fixed"
      justify="center"
      align="center"
      display={display}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => setDisplay('none')}
    >
      <MotionImage
        src={logo}
        w="150px"
        opacity="0.5"
        animate={{ opacity: 1, width: '200px' }}
        transition={{ duration: 0.75 }}
      />
    </MotionFlex>
  );
};

export default Opening;
