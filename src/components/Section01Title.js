import { Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import useSpace from '../hooks/useSpace.js';

import title from '../assets/images/title/title01.svg';
import wave from '../assets/images/title01_wave.svg';
import bank from '../assets/images/title01_bank.png';

const MotionImage = motion(Image);
const MotionText = motion(Text);

const Section01Title = () => {
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
      py={{ base: '60px', lg: '80px' }}
      bgGradient="linear(to-b, sun, white 50%)"
      justify="center"
      align="center"
      px="16px"
      position="relative"
      overflow="hidden"
    >
      <Image
        src={bank}
        position="absolute"
        left="0px"
        bottom="0px"
        opacity={{ base: 0.4, lg: 1 }}
        w="30%"
      />
      <Image
        src={wave}
        position="absolute"
        right={{ base: '-50px', lg: '-200px' }}
        top={{ base: '10px', lg: '30px' }}
        h={{ base: 'auto', lg: '280px' }}
      />
      <Flex
        w={space}
        position="relative"
        h={{ base: 'auto', lg: '280px' }}
        zIndex="10"
      >
        <MotionImage
          src={title}
          position="absolute"
          right="0"
          margin={{ base: '0 auto', lg: 'unset' }}
          left={{ base: '0', lg: 'unset' }}
          top={{ base: '20px', lg: '0' }}
          h={{ base: '140px', lg: '280px' }}
          // custom={{
          //   order: 0,
          //   duration: 0.75,
          //   y: 25,
          // }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
          transition={transition}
        />
        <Flex w="100%" justify="center" align="center" direction="column">
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
            3月起，以藝文展演活動，映現叱吒國際的淡水商港年代，
            <br />
            也認識馬偕博士上岸時的點滴故事。
          </MotionText>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Section01Title;
