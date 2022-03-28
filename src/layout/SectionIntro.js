import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSpace from '../hooks/useSpace.js';
import intro01 from '../assets/images/intro01.jpg';
import logo from '../assets/images/logo_pure.svg';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const SectionIntro = () => {
  const variants = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({ opacity: 0.1, y: custom.y || 25 }),
  };

  const headingVariants = {
    visible: custom => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({ opacity: 0.1, x: -40 }),
  };

  const transition = { duration: 0.5, type: 'tween' };
  const { space } = useSpace();
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('${intro01}')`}
      bgSize="cover"
      bgAttachment="fixed"
      py="20px"
      minH="700px"
      position="relative"
    >
      <Box
        position="absolute"
        w="100%"
        h={{ base: '50px', lg: '200px' }}
        top="0"
        bgGradient="linear(to-b, sun 0%, rgba(250,192,45,0))"
      ></Box>
      <Flex w="100%" bg="rgba(237,234,217,.9)" justify="center" zIndex="10">
        <Flex
          w={space}
          position="relative"
          py={{ base: '20px', lg: '20px' }}
          px="16px"
          wrap="wrap"
        >
          <MotionFlex
            w={{ base: '100%', lg: '35%' }}
            justify="center"
            align="center"
            custom={{
              order: 0,
              duration: 0.5,
              y: 25,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            transition={transition}
          >
            <MotionImage
              src={logo}
              h={{ base: '120px', lg: '200px' }}
              objectFit="cover"
            />
          </MotionFlex>
          <Flex
            w={{ base: '100%', lg: '65%' }}
            px={{ base: '0', lg: '50px' }}
            py="24px"
            align="center"
            justify="center"
            direction="column"
          >
            {/* <MotionHeading
              w="100%"
              pb="16px"
              textAlign={{ base: 'center', lg: 'left' }}
              color="grey.800"
              custom={{
                order: 0,
                duration: 0.75,
                x: -30,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={headingVariants}
              transition={transition}
            >
              港動‧淡水
            </MotionHeading> */}
            <MotionText
              textAlign={{ base: 'center', lg: 'left' }}
              fontSize={{ base: '14px', lg: '18px' }}
              color="grey.800"
              letterSpacing="1.5"
              lineHeight="28px"
              custom={{
                order: 0,
                duration: 0.5,
                y: 25,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={variants}
              transition={transition}
            >
              1862年淡水開港設關，1872年馬偕來臺，十年之間，淡水一躍成為國際港口，往來通商船隻絡繹不絕，讓來自西方的商人、貨物、習慣、宗教等一一落地，更帶來新式教育與醫療，大大改變了在地人民生活，讓淡水這片港灣開出無數文化交融的煙花，創造獨一無二的人文風情。
            </MotionText>
            <MotionText
              textAlign={{ base: 'center', lg: 'left' }}
              pt="32px"
              fontSize={{ base: '14px', lg: '18px' }}
              color="grey.800"
              letterSpacing="1.5"
              lineHeight="28px"
              custom={{
                order: 0,
                duration: 0.5,
                y: 25,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={variants}
              transition={transition}
            >
              2022年，新北市政府連結各方資源，與新北市政府文化局在淡水及淡水古蹟博物館管轄的古蹟裡，以導覽、戲劇、展覽、論壇等形式，挖掘過往繁榮興盛的港口人文，帶領大家重回1862年，從淡水開港設關，到馬偕在淡水的貢獻，一路尋訪淡水國際商港的繁華風貌，感動風華．港動淡水！
            </MotionText>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default SectionIntro;
