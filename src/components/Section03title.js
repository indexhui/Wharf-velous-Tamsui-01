import { Flex, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSpace from '../hooks/useSpace.js';
import title from '../assets/images/title/title03.svg';
import leaf01 from '../assets/images/leaf01.svg';
import leaf02 from '../assets/images/leaf02.svg';
import leaf03 from '../assets/images/leaf03.svg';
import wave from '../assets/images/wave_03.png';

const MotionImage = motion(Image);
const MotionText = motion(Text);

const Section03Title = () => {
  const titleVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        type: 'tween',
      },
    },
    hidden: {
      opacity: 0.2,
    },
  };
  const textVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'tween',
      },
    },
    hidden: {
      x: 100,
      opacity: 0.2,
    },
  };
  const { space } = useSpace();
  const transition = { duration: 0.5, type: 'tween' };
  return (
    <Flex
      bg="#F3F0E1"
      justify="center"
      py={{ base: '60px', lg: '80px' }}
      position="relative"
      overflow="hidden"
      px="16px"
    >
      <MotionImage
        zIndex="1"
        src={wave}
        position="absolute"
        left="-10px"
        top="0"
        h={{ base: '100%', lg: '100%' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={titleVariants}
        transition={transition}
      />
      <MotionImage
        zIndex="2"
        src={leaf01}
        position="absolute"
        left="-20px"
        margin={{ base: '0 auto', lg: 'unset' }}
        top={{ base: '10%', lg: '20%' }}
        h={{ base: '240px', lg: '280px' }}
        custom={{
          order: 0,
          duration: 0.75,
          y: 25,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={titleVariants}
        transition={transition}
      />
      <MotionImage
        src={leaf02}
        position="absolute"
        margin={{ base: '0 auto', lg: 'unset' }}
        right={{ base: '9%', lg: '10%' }}
        bottom={{ base: '-20px', lg: '-40px' }}
        h={{ base: '80px', lg: '140px' }}
        custom={{
          order: 0,
          duration: 0.75,
          y: 25,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={titleVariants}
        transition={transition}
      />
      <MotionImage
        src={leaf03}
        position="absolute"
        margin={{ base: '0 auto', lg: 'unset' }}
        right={{ base: '-20px', lg: '-50px' }}
        top={{ base: '10%', lg: 'top="20%"' }}
        h={{ base: '80px', lg: '160px' }}
        custom={{
          order: 0,
          duration: 0.75,
          y: 25,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={titleVariants}
        transition={transition}
      />
      <Flex
        w={space}
        justify="center"
        align="center"
        h={{ base: 'auto', lg: '280px' }}
        zIndex="10"
        position="relative"
      >
        <MotionImage
          src={title}
          position="absolute"
          left="0px"
          margin={{ base: '0 auto', lg: 'unset' }}
          right={{ base: '0', lg: 'unset' }}
          top={{ base: '20px', lg: '0' }}
          h={{ base: '140px', lg: '280px' }}
          custom={{
            order: 0,
            duration: 0.75,
            y: 25,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
          transition={transition}
        />
        <MotionText
          letterSpacing="1.5px"
          fontSize={{ base: '14px', lg: '20px' }}
          fontWeight="600"
          color="grey.800"
          pt={{ base: '180px', lg: '0' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
          transition={transition}
        >
          探訪合作夥伴，欣賞淡水人文與歷史迴響的動人篇章。
        </MotionText>
      </Flex>
    </Flex>
  );
};

export default Section03Title;
