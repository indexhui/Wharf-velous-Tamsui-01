import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);

const RevealOpacity = props => {
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0.2,
    },
  };
  const transition = { duration: 0.5, type: 'tween' };
  return (
    <MotionImage
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={variants}
      transition={transition}
      {...props}
    />
  );
};

export default RevealOpacity;
