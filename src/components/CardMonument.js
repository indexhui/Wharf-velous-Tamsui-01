import { Flex, Text, Image, Box, Button, AspectRatio } from '@chakra-ui/react';
import MonumentCardModal from './MonumentCardModal';

import b1 from '../assets/images/monument/B1.JPG';

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
        <Flex
          align="flex-end"
          borderRadius="0 0 0 20px"
          justify="center"
          pb="20px"
          w="30px"
          h="100%"
          position="absolute"
          left="0"
          top="0"
          bg={theme || 'umi'}
          zIndex="1"
        >
          <Text
            // writingMode="vertical-lr"
            lineHeight="18px"
            // style={{ writingMode: 'vertical-lr' }}
            px="15px"
            // mx="15px"
            // w="50px"
            // textAlign="center"
            color="white"
          >
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
