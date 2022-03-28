import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSpace from '../hooks/useSpace.js';
import CardDepartment from '../components/CardDepartment';
import Section03Title from '../components/Section03title.js';

import c1 from '../assets/images/C-1-1.jpeg';
import c2 from '../assets/images/c-2.jpg';
import c3 from '../assets/images/C-3.png';
import c4 from '../assets/images/C-4.png';

import leafs from '../assets/images/leafs.svg';

const departments = [
  {
    name: '台灣基督長老教會淡水教會',
    fb: 'https://www.facebook.com/mackaychurchevents1/',
    website: 'https://www.mackay.org.tw/ch/',
    image: c1,
  },
  {
    name: '新北市政府教育局',
    fb: 'https://www.facebook.com/ntpcedugov/',
    website: 'https://www.ntpc.edu.tw//',
    image: c2,
  },
  {
    name: '淡水區公所',
    fb: 'https://www.facebook.com/%E6%B7%A1%E6%B0%B4%E5%8D%80%E5%85%AC%E6%89%80%E9%87%91%E8%89%B2%E6%B7%A1%E6%B0%B4-614634901969917/?ref=tn_tnmn',
    website: 'https://www.tamsui.ntpc.gov.tw/',
    image: c3,
  },
  {
    name: '新北市立圖書館淡水分館',
    fb: 'https://www.facebook.com/NewTaipeiCityLibrary/',
    website: 'https://www.library.ntpc.gov.tw//',
    image: c4,
  },
];

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const Section03 = () => {
  const { space } = useSpace();
  return (
    <>
      <Section03Title />
      <Flex
        w="100%"
        justify="center"
        py={{ base: '20px', md: '40px' }}
        px="16px"
        // bgImage={`url('${leafs}')`}
        bgSize="contain"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex
          w={space}
          direction="column"
          align="center"
          position="relative"
          pt="20px"
        >
          {/* <Heading color="sun">港動‧迴響</Heading>
          <Text
            textAlign="center"
            py="12px"
            fontSize="16px"
            fontWeight="600"
            letterSpacing="1.5px"
            color="grey.800"
          >
            探訪鄰近夥伴，欣賞淡水歷史迴響出的動人篇章。
          </Text> */}
          <MotionGrid
            py="20px"
            layout
            w="100%"
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={6}
          >
            {departments.map(department => (
              <MotionGridItem
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={department.name}
              >
                <CardDepartment colSpan={1} {...department} />
              </MotionGridItem>
            ))}
          </MotionGrid>
        </Flex>
      </Flex>
    </>
  );
};

export default Section03;
