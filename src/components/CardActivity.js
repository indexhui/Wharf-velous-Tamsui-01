import { Flex, AspectRatio, Image, Text } from '@chakra-ui/react';

import ModalCard from './ModalCard';

const CardActivity = props => {
  return (
    <Flex w="100%" direction="column" shadow="md" h="100%">
      <AspectRatio w="100%" ratio={4 / 3}>
        <Image src={props.image} objectFit="cover" />
      </AspectRatio>
      <Flex
        w="100%"
        bg={props.isNotice ? 'sky' : 'sun'}
        direction="column"
        flex="1"
      >
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
            direction="column"
          >
            <Text fontSize="18px" fontWeight="600">
              {props.name}
            </Text>
            <Text fontSize="14px" color="grey.700">
              {props.organizer}
            </Text>
            <Flex justify="space-between">
              <Text color="grey.700" fontSize="13px">
                {props.time}
              </Text>
            </Flex>
          </Flex>
          <Flex
            justify="center"
            flex="1"
            w="100%"
            alignSelf="end"
            align="flex-end"
            fontWeight="700"
          >
            {props.isNotice ? (
              <Text color="grey.600" py="5px" fontWeight="500">
                敬請期待
              </Text>
            ) : (
              <ModalCard modal={props.modal} location={props.location} />
            )}
            {/* <ModalCard modal={props.modal} />
            <Text>敬請期待</Text> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardActivity;
