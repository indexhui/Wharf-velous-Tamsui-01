import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Icon,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MonumentCardModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isHistory, themeColor, theme } = props;
  return (
    <>
      <Button
        w="100%"
        onClick={onOpen}
        cursor="pointer"
        // bg="rgba(0,0,0,0)"
        bg={isHistory ? themeColor : '#494949'}
        color="white"
        py="0"
        h="30px"
        m="0"
        borderRadius="0"
        _hover={{ background: 'sun', color: 'white' }}
      >
        {isHistory ? '歷史介紹' : '參觀資訊'}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={theme || 'umi'} color="white">
          <ModalHeader> {isHistory ? '歷史介紹' : '參觀資訊'}</ModalHeader>
          <ModalBody>
            {isHistory && props.history}
            {isHistory || (
              <>
                <Flex justify="space-between" align="center">
                  <Text fontSize="20px" opacity=".9">
                    地址:
                  </Text>
                  <Link
                    href={props.googleMap}
                    isExternal
                    pl="10px"
                    fontSize="20px"
                    textDecoration="underline"
                  >
                    {props.address}
                  </Link>
                </Flex>
                {props.link && (
                  <Flex justify="space-between" align="center" pt="20px">
                    <Text fontSize="18px" flex="1">
                      開放時間:
                    </Text>
                    <Link
                      href={props.link}
                      isExternal
                      pl="10px"
                      textDecoration="underline"
                      textAlign="right"
                      fontSize="18px"
                    >
                      詳見淡水古蹟博物館官網
                    </Link>
                  </Flex>
                )}
                {props.outLink && (
                  <Flex justify="space-between" align="center" pt="20px">
                    <Text fontSize="18px" flex="1">
                      開放時間:
                    </Text>
                    <Link
                      href={props.outLink}
                      isExternal
                      pl="10px"
                      textDecoration="underline"
                      textAlign="right"
                      fontSize="18px"
                    >
                      詳見管理單位公告
                    </Link>
                  </Flex>
                )}

                {props.openInfo && (
                  <Text fontSize="18px" flex="1" pt="20px" textAlign="right">
                    {props.openInfo}
                  </Text>
                )}
              </>
            )}
            {/* {props.location && (
              <HStack pb="10px" color="grey.800">
                <Icon as={FaMapMarkerAlt} color="sun" />{' '}
                <Text>{props.location}</Text>
              </HStack>
            )}
            {props.modal} */}
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button mr={3} onClick={onClose} bg="white" color={theme || 'umi'}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default MonumentCardModal;
