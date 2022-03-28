import { Flex, VStack, Box, Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      bg="sky"
      align="center"
      justify="center"
      w="100%"
      mt="20px"
      as="footer"
      direction="column"
    >
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', lg: '1080px', xl: '70%' }}
        wrap="wrap"
        px={{ base: '20px', md: '0' }}
        py="40px"
        color="grey.900"
      >
        <Flex w={{ base: '100%', md: '33.33%' }} direction="column" py="5px">
          <VStack spacing="20px" align="flex-start">
            <Box>
              <Text color="grey.700">｜主辦單位｜</Text>
              <Box pl="12px">
                <Link href="https://www.ntpc.gov.tw/" isExternal>
                  <Text>新北市政府</Text>
                </Link>
              </Box>
            </Box>
            <Box>
              <Text color="grey.700">｜承辦單位｜</Text>
              <VStack pl="12px" spacing="4px" align="flex-start">
                <Link href="https://www.culture.ntpc.gov.tw/" isExternal>
                  <Text>新北市政府文化局</Text>
                </Link>

                <Link href="https://www.tshs.ntpc.gov.tw/" isExternal>
                  <Text>新北市立淡水古蹟博物館</Text>
                </Link>
              </VStack>
            </Box>
          </VStack>
        </Flex>

        <Flex w={{ base: '100%', md: '33.33%' }} direction="column" py="5px">
          <VStack spacing="20px" align="flex-start">
            <Box>
              <Text color="grey.700">｜合辦單位｜</Text>
              <VStack pl="12px" spacing="4px" align="flex-start">
                <Link href="https://www.mackay.org.tw/" isExternal>
                  <Text>台灣基督長老教會淡水教會</Text>
                </Link>
                <Link href="https://www.tamsui.ntpc.gov.tw/" isExternal>
                  <Text>淡水區公所</Text>
                </Link>
                <Link href="https://www.dils.tku.edu.tw/" isExternal>
                  <Text>淡江大學資訊與圖書館學系</Text>
                </Link>
                <Link href="http://www.history.tku.edu.tw/" isExternal>
                  <Text>淡江大學歷史學系</Text>
                </Link>
                <Link href="https://www.library.ntpc.gov.tw/" isExternal>
                  <Text>新北市立圖書館淡水分館</Text>
                </Link>
                <Link href="https://www.ntpc.edu.tw/" isExternal>
                  <Text>新北市政府教育局</Text>
                </Link>
                <Text>新北市各級學校</Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>

        <Flex w={{ base: '100%', md: '33.33%' }} direction="column" py="5px">
          <VStack spacing="20px" align="flex-start">
            <Box>
              <Text color="grey.700">｜協辦單位｜</Text>
              <VStack pl="12px" spacing="4px" align="flex-start">
                <Link
                  href="https://www.international.gc.ca/world-monde/taiwan/taipei.aspx?lang=zho"
                  isExternal
                >
                  <Text>加拿大駐臺北貿易辦事處</Text>
                </Link>
                <Link href="https://ntccf.org/" isExternal>
                  <Text>新北市文化基金會</Text>
                </Link>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Flex>
      <Text color="rgba(0,0,0,.6)" textAlign="center" px="20px" pb="20px">
        © 2022 Tamsui Historical Museum Taiwan All rights reserved.
      </Text>
    </Flex>
  );
}

export default Footer;
