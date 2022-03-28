import {
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Icon,
  HStack,
} from '@chakra-ui/react';

import { MdLaunch, MdFacebook } from 'react-icons/md';
const CardDepartment = props => {
  return (
    <Flex w="100%" direction="column" shadow="md" h="100%">
      <AspectRatio w="100%" ratio={4 / 3}>
        <Image src={props.image} objectFit="cover" />
      </AspectRatio>
      <Flex w="100%" bg="umi" direction="column" flex="1">
        <Flex
          w="100%"
          bg="white"
          flex="1"
          borderRadius="0 0 0 40px"
          direction="column"
        >
          <Flex
            w="100%"
            color="grey.800"
            px="14px"
            py="10px"
            pb="12px"
            direction="column"
          >
            <Text fontSize="18px" fontWeight="600" pb="5px">
              {props.name}
            </Text>
            <Text fontSize="14px" color="grey.700">
              {props.organizer}
            </Text>
            <HStack spacing="10px">
              <Link href={props.website} isExternal>
                <HStack align="center" spacing="4px">
                  <Icon as={MdLaunch} /> <Text>官網</Text>
                </HStack>
              </Link>
              <Link href={props.fb} isExternal>
                <Flex align="center">
                  <Icon as={MdFacebook} /> <Text>臉書專頁</Text>
                </Flex>
              </Link>
              <Text color="grey.700" fontSize="13px">
                {props.time}
              </Text>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardDepartment;
