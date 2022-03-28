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
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ModalCard = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        onClick={onOpen}
        bg="rgba(0,0,0,0)"
        color="sun"
        py="0"
        h="30px"
        m="0"
        borderRadius="0"
        _hover={{ background: 'sun', color: 'white' }}
      >
        簡介
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>活動資訊</ModalHeader>

          {/* <ModalCloseButton /> */}
          <ModalBody>
            {props.location && (
              <HStack pb="10px" color="grey.800">
                <Icon as={FaMapMarkerAlt} color="sun" />{' '}
                <Text>{props.location}</Text>
              </HStack>
            )}
            {props.modal}
          </ModalBody>

          <ModalFooter>
            <Button bg="sun" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCard;
