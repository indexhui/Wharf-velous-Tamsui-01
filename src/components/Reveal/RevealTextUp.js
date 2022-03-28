import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionText = motion(Text);

const RevealTextUp = props => {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0.2,
      y: 20,
    },
  };
  const transition = { duration: 0.5, type: 'tween' };
  return (
    <MotionText
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={variants}
      transition={transition}
      {...props}
    >
      {props.children}
    </MotionText>
  );
};

export default RevealTextUp;
