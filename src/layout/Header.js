import {
  Flex,
  Box,
  Link,
  HStack,
  VStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Icon,
  Fade,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { MdFacebook } from 'react-icons/md';

import { Link as ReachLink, animateScroll as scroll } from 'react-scroll';

import { useState } from 'react';

import logotype from '../assets/images/logo_pure.svg';

export default function Header() {
  const [isActive, setIsActive] = useState(true);
  return (
    <Flex
      w="100%"
      h="62px"
      bg={isActive ? '' : 'sky'}
      shadow={isActive ? 'none' : 'md'}
      color="white"
      align="center"
      px="20px"
      justify="center"
      top="0"
      left="0"
      zIndex="20"
      position="fixed"
    >
      <Flex
        w={{ base: '100%', lg: '80%' }}
        maxW="1080px"
        justify="space-between"
        align="center"
      >
        <Fade in={!isActive}>
          <Link
            offset={60}
            spy={true}
            hashSpy={true}
            as={ReachLink}
            to="hero"
            position="relative"
            smooth={true}
            color="white"
            onSetActive={() => setIsActive(true)}
            onSetInactive={() => setIsActive(false)}
            fontSize={{ base: '18px', md: '16px' }}
          >
            <Image
              opacity={isActive ? '0' : '1'}
              w="50px"
              src={logotype}
              alt="sparkling-tamsui"
            />
          </Link>
        </Fade>
        <MobileNav />
        <DesktopNav />
      </Flex>
    </Flex>
  );
}

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex display={{ base: 'block', md: 'none' }}>
      <HamburgerIcon color="grey.800" onClick={onOpen} w={6} h={6} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        bg="black"
        color="white"
      >
        <DrawerOverlay />
        <DrawerContent bg="#EDEAD9" color="white">
          <DrawerCloseButton color="black" />

          <DrawerBody pt="30%">
            <VStack spacing="20px">
              {navItems.map(item => (
                <NavLink onClick={onClose} key={item.to} {...item} />
              ))}
              <Link
                display="flex"
                href="https://www.facebook.com/tamsuihistoricalmuseum"
                isExternal
              >
                <HStack align="center" spacing="2px">
                  <Text color="umi">淡水古蹟博物館</Text>
                  <Icon color="umi" as={MdFacebook} />
                </HStack>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const DesktopNav = () => {
  return (
    <HStack spacing="20px" display={{ base: 'none', md: 'flex' }}>
      {navItems.map(item => (
        <NavLink key={item.to} {...item} />
      ))}
      <Link
        display="flex"
        href="https://www.facebook.com/tamsuihistoricalmuseum"
        isExternal
      >
        <HStack align="center" spacing="2px" color="umi">
          <Text fontWeight="600">淡水古蹟博物館</Text> <Icon as={MdFacebook} />
        </HStack>
      </Link>
    </HStack>
  );
};

const NavLink = props => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Link
      spy={true}
      hashSpy={true}
      key={props.to}
      as={ReachLink}
      to={props.to}
      onClick={props.onClick}
      position="relative"
      smooth={true}
      color={isActive ? 'sun' : 'grey.700'}
      fontWeight="600"
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
      fontSize={{ base: '18px', md: '16px' }}
    >
      {props.label}
      {/* {isActive && (
        <Box
          bgGradient="linear(to-b,sun, rgba(255,241,0,0))"
          color="sun"
          rounded="full"
          position="absolute"
          zIndex="-1"
          top="0"
          margin="0 auto"
          left="0"
          right="0"
          w="24px"
          h="24px"
        ></Box>
      )} */}
    </Link>
  );
};

const navItems = [
  {
    label: '港動・映現',
    to: 'section01',
  },
  {
    label: '港動・踏訪',
    to: 'section02',
  },
  {
    label: '港動・迴響',
    to: 'section03',
  },
  // {
  //   label: '合作店家',
  //   to: 'store',
  // },
];
