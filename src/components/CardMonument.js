import { Flex, Text, Image, Box, Button, AspectRatio } from '@chakra-ui/react';
import MonumentCardModal from './MonumentCardModal';

import cornerSubtract from '../assets/images/cornerSubtract.png';
import cornerSubtractSun from '../assets/images/cornerSubtractSun.png';

const CardMonument = props => {
  const { theme, name, image, history, address, googleMap, link } = props;
  return (
    <Flex maxW="300px" w="100%" direction="column" overflow="hidden">
      <Flex
        bg={theme || 'umi'}
        // h="280px"
        borderRadius="20px 0 0 20px"
        position="relative"
      >
        <Image
          position="absolute"
          bottom="0"
          left="42px"
          src={theme ? cornerSubtractSun : cornerSubtract}
          w="30px"
          h="30px"
          zIndex="1"
        />
        <Flex
          align="flex-end"
          borderRadius="0 0 0 20px"
          justify="center"
          pb="20px"
          w="42px"
          h="100%"
          position="absolute"
          left="0"
          top="0"
          bg={theme || 'umi'}
          zIndex="1"
        >
          <Text lineHeight="22px" fontSize="17px" px="15px" color="white">
            {name}
          </Text>
        </Flex>
        <AspectRatio w="100%" ratio={1 / 1}>
          <Image src={image} objectFit="cover" borderRadius="0 0 0 40px" />
        </AspectRatio>
      </Flex>
      <Flex w="100%" mt="10px" borderRadius="20px" overflow="hidden">
        <MonumentCardModal
          isHistory
          themeColor={theme || 'umi'}
          history={history}
          {...props}
        />
        <MonumentCardModal
          address={address}
          googleMap={googleMap}
          link={link}
          {...props}
        />
      </Flex>
    </Flex>
  );
};

export default CardMonument;
