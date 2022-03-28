import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import useSpace from '../hooks/useSpace.js';
import Section01Title from '../components/Section01Title.js';
import Section01Item from '../components/Section01Item.js';

const Section01 = () => {
  const { space } = useSpace();
  const variants = {
    visible: custom => ({
      opacity: 1,
      color: '#F9BF2D',
      y: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({
      color: '#549EBE',
      opacity: 0.5,
      y: custom.y || 25,
    }),
  };
  const textVariants = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({
      opacity: 0.5,
      y: custom.y || 25,
    }),
  };

  const transition = { duration: 0.5, type: 'tween' };
  return (
    <>
      <Section01Title />
      <Flex w="100%" justify="center" position="relative">
        <Flex w="100%">
          <Section01Item />
        </Flex>
      </Flex>
    </>
  );
};

export default Section01;
