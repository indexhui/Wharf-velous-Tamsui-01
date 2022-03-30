import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import RevealOpacity from '../components/Reveal/RevealOpacity';
import RevealTextUp from '../components/Reveal/RevealTextUp';

import CardMonument from '../components/CardMonument';
import useSpace from '../hooks/useSpace';

import title from '../assets/images/title/title02.svg';
import ship02 from '../assets/images/hero/ship02.png';
import ship04 from '../assets/images/hero/ship04.png';

import b1 from '../assets/images/monument/B1.JPG';
import b2 from '../assets/images/monument/B2.jpg';
import b3 from '../assets/images/monument/B3.jpg';
import b4 from '../assets/images/monument/B4.jpg';
import b5 from '../assets/images/monument/B5.JPG';
import b6 from '../assets/images/monument/B6.JPG';

import b10 from '../assets/images/monument/B10.JPG';
import b11 from '../assets/images/monument/B11.jpg';
import b12 from '../assets/images/monument/B12.jpg';
import b13 from '../assets/images/monument/B13.jpg';
import b14 from '../assets/images/monument/B14.jpg';
import b15 from '../assets/images/monument/B15.jpg';
import b16 from '../assets/images/monument/B16.JPG';
import b17 from '../assets/images/monument/B17.JPG';
import b18 from '../assets/images/monument/B18.jpg';
import b19 from '../assets/images/monument/B19.JPG';
import b20 from '../assets/images/monument/B20.jpg';

const tamsuiMonuments = [
  {
    name: '淡水紅毛城',
    history:
      '為辦理淡水開港業務，英國租借紅毛城作為英國領事館，負責來臺僑民簽證、管理及權益維護。1877年起於領事館東側增建領事官邸，作為生活居所。',
    address: '新北市淡水區中正路28巷1號',
    googleMap: 'https://goo.gl/maps/zVZcgLe187G2',
    image: b1,
    link: 'https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245643771715011728',
  },
  {
    name: '淡水海關碼頭',
    history:
      '淡水開港通商，設立由外籍稅務司管理的海關，辦理船隻進出口關務及貿易稅收。淡水海關碼頭原為沙岸港埠，1901年起逐漸完工今日所見的石造碼頭區。',
    address: '新北市淡水區中正路259號',
    googleMap: 'https://goo.gl/maps/fH3rGLQnND42',
    image: b2,
    link: 'https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245643771715011728',
  },
  {
    name: '前清淡水關稅務司官邸',
    history:
      '淡水設立新式海關所聘用的外籍稅務人員，多居住建於砲臺埔的三棟宿舍，這三棟洋樓被在地居民稱作「埔頂三塊厝」，目前僅存「小白宮」。',
    address: '新北市淡水區真理街15號',
    googleMap: 'https://goo.gl/maps/ZVGeQ75csgT2',
    image: b3,
    link: 'https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245643771715011728',
  },
  {
    name: '得忌利士洋行',
    history:
      '19世紀末，淡水烽火段前的河水深度尚可停泊大型船隻，得忌利士洋行在此擁有可停泊各種輪船的碼頭，除了進出口貿易，也經營航運事業，曾寡占臺灣航運三十多年。今日僅存第一檢查場及輸入品倉庫。',
    address: '新北市淡水區中正路316、316-1號',
    googleMap: 'https://goo.gl/maps/nkCKvg57mnN2',
    image: b4,
    link: 'https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0G245643771715011728',
  },
  {
    name: '英商嘉士洋行倉庫',
    history:
      '由英商范嘉士(Francis Cass)所建的嘉士洋行倉庫，易主殼牌公司後，在此建立三座油槽存放油類，因氣味濃厚被稱作「臭油棧」。二次世界大戰曾被美軍空襲，引發「火燒臭油棧」事件。',
    address: '新北市淡水區鼻頭街22號',
    googleMap: 'https://goo.gl/maps/HXtf36GLXaCmQSZP9',
    image: b5,
    outLink: 'http://www.tamsui.org.tw/',
  },
  {
    name: '淡水外僑墓園',
    history:
      '淡水成為國際商港，吸引各國商人前來貿易，因疾病等因素客死淡水的外國人，便葬於淡水外僑墓園。第一座墳墓於1867年下葬，1870年起正式由英國領事館管理，直至1972年為止。今由加僑協會和淡江中學共同維護。',
    address: '新北市淡水區真理街26號',
    googleMap: 'https://goo.gl/maps/Tu7G6DZ87Kns8voV9',
    image: b6,
    openInfo: '位於淡江中學校區，無對外開放',
  },
];

const mackayMonuments = [
  {
    name: '馬偕上岸處',
    history:
      '喬治‧萊斯里‧馬偕(George Leslie Mackay，漢名偕叡理，1844.03.21-1901.06.02)，加拿大宣教士，1872年搭乘得忌利士洋行所屬的海龍號抵達淡水，於此處上岸，以淡水為宣教的基地，並在此推廣西式醫療及教育。',
    address: '新北市淡水區中正路15巷',
    image: b10,
    googleMap: 'https://goo.gl/maps/tKdYD4udWVN85Cek8',
    openInfo: '公共空間，自由參觀',
  },
  {
    name: '滬尾偕醫館',
    history:
      '馬偕所建的西式醫院，邀請外籍醫師協助主持醫務。1912年，臺北馬偕紀念醫院落成，取代滬尾偕醫館，此後偕醫館曾作為神學院、圖書館、幼稚園和學生宿舍等，目前展示馬偕使用過的文物。',
    address: '新北市淡水區馬偕街6號',
    image: b11,
    googleMap: 'https://goo.gl/maps/MeFcJHa7jTTrGpC69',
    outLink: 'https://www.mackay.org.tw/ch/',
  },
  {
    name: '馬偕租屋處',
    history:
      '1872年馬偕初至淡水，先借住於商人約翰‧陶德處所，後租屋發展傳教事業，同時也替人行醫診療、提供西藥等。此棟屋子今已拆除，原址約位於今日馬偕街24號後方。',
    address: '新北市淡水區馬偕街20-24號',
    image: b12,
    googleMap: 'https://goo.gl/maps/jo1eMwpAJPrA819L7',
    openInfo: '私人住宅區，無對外開放。',
  },
  {
    name: '淡水禮拜堂',
    history:
      '馬偕最早於租屋處傳教行醫，後曾另租民房及改建醫生宿舍做為禮拜堂。今日所見的淡水禮拜堂，為1928年，馬偕兒子偕叡廉向加拿大母會申請補助，重新設計整修而成。',
    address: '新北市淡水區馬偕街8號',
    googleMap: 'https://goo.gl/maps/chhLxr4v15Boexa77',
    openInfo: '無對外開放',
    image: b13,
  },
  {
    name: '理學堂大書院',
    image: b14,
    history:
      '馬偕在臺傳教工作受原鄉加拿大牛津郡肯定，獲得的捐款於1881年建立全臺第一所現代化學校「理學堂大書院(牛津學堂，Oxford College)」，教授神學與聖經、社會科學、自然科學、醫學理論及臨床實習等。',
    address: '新北市淡水區真理街32號',
    googleMap: 'https://goo.gl/maps/KsUZWag5JgZU4RkC6',
    outLink: 'https://www.facebook.com/OxfordCollege1882',
  },
  {
    name: '馬偕故居',
    history:
      '馬偕於1875年親自設計督工的個人居所，為具迴廊設計的西班牙式白堊洋樓。1965年真理大學創校後改為圖書館等校舍使用，目前以「馬偕紀念館」開放參觀。',
    address: '新北市淡水區真理街4巷2號',
    googleMap: 'https://goo.gl/maps/F1LbSnSYK832m3y66',
    outLink: 'https://www.facebook.com/MackayHouse1875/',
    image: b15,
  },
  {
    name: '馬偕墓',
    history:
      '馬偕因為喉癌於1901年6月2日辭世，葬在與淡水外僑墓園一牆分隔的土地。1925年其妻子張聰明逝世，同樣葬於此地，此後逐漸形成馬偕家族、嫡系學生之家族墓園。',
    address: '新北市淡水區真理街26號',
    googleMap: 'https://goo.gl/maps/ENccvfu1Df8Rk6Hz8',
    openInfo: '位於淡江中學校區，無對外開放',
    image: b16,
  },
  {
    name: '姑娘樓與牧師樓',
    history:
      '加拿大宣教士吳威廉設計督工，為二棟迴廊式紅磚洋樓。姑娘樓作為女宣教士宿舍，牧師樓作為吳牧師及後續服務之男宣教士宿舍，至1965年因真理大學創校所需改作校舍使用。',
    address: '新北市淡水區真理街32號',
    googleMap: 'https://goo.gl/maps/KXeMcx2YGW5GLtTu7',
    openInfo: '位於淡江中學校區，無對外開放',
    image: b17,
  },
  {
    name: '淡水中學校',
    history:
      '馬偕兒子偕叡廉原於理學堂大書院所設，1925年遷至現址。1956年與淡水女學堂(當時改制為「純德女子中學」)合併，更名「私立淡江高級中學」。',
    address: '新北市淡水區真理街26號',
    googleMap: 'https://goo.gl/maps/ihBkRn2eUL6C1wvD8',
    openInfo: '位於淡江中學校區，無對外開放',
    image: b18,
  },
  {
    name: '淡水女學堂',
    history:
      '由馬偕創立的免學費女子學校，教授讀寫、算術、歌唱、地理、婦女技能、聖經等，希望女性透過教育擺脫傳統社會束縛。後與淡水中學校合併，其校舍為今日淡江中學附設的純德小學。',
    address: '新北市淡水區真理街26號',
    googleMap: 'https://goo.gl/maps/ihBkRn2eUL6C1wvD8',
    openInfo: '位於淡江中學校區，無對外開放',
    image: b19,
  },
  {
    name: '淡水婦學堂',
    history:
      '吳威廉牧師於1910年創立，作為已婚婦女的學習場域，目的在教育成年婦女並訓練女性傳道人，訓練女性傳教人員，教授中日文讀寫、音樂及聖經，採兩年學制。目前為淡江中學校史館。',
    address: '新北市淡水區真理街26號',
    googleMap: 'https://goo.gl/maps/ihBkRn2eUL6C1wvD8',
    openInfo: '位於淡江中學校區，無對外開放',
    image: b20,
  },
];

const Section02 = () => {
  const { space } = useSpace();
  return (
    <>
      <Flex
        w="100%"
        justify="center"
        position="relative"
        bg="#FFFEF6"
        py="80px"
        px="16px"
        minH="400px"
        bgGradient="linear(to-b, sun, #B0DEEA)"
        // bgImage={`url('${coming}')`}
        bgSize="cover"
        direction="column"
        align="center"
        overflow="hidden"
      >
        <Image
          src={ship02}
          w="200px"
          h="auto"
          display={['none', 'none', 'none', 'block']}
          position="absolute"
          bottom="30%"
          left="-30px"
        />
        <RevealOpacity
          src={ship04}
          w={{ base: '80px', lg: '180px' }}
          h="auto"
          position="absolute"
          bottom="3%"
          right="80px"
          display={['none', 'none', 'none', 'block']}
        />
        <RevealOpacity
          src={title}
          h={{ base: '140px', lg: '280px' }}
          pb="30px"
        />
        <RevealTextUp
          maxW="400px"
          textAlign="center"
          color="white"
          fontWeight="700"
          fontSize="20px"
        >
          循著歷史中的印記，踏訪淡水河港人文景致，
          <br />
          尋覓馬偕博士百年足跡。
        </RevealTextUp>
        {/* <Text
        maxW="400px"
        textAlign="center"
        pt="30px"
        color="#649FBD"
        fontSize={{ base: '20px', lg: '40px' }}
        fontWeight="bold"
        lineHeight="40px"
      >
        敬請期待
      </Text>
      <Text textAlign="center" color="#649FBD" fontSize="30px">
        COMING SOON
      </Text> */}
      </Flex>
      <Flex
        w="100%"
        justify="center"
        pb="200px"
        bg="#F5F1D4"
        position="relative"
      >
        <Flex
          w={space}
          position="relative"
          align="flex-start"
          direction="column"
        >
          <Flex
            w="100%"
            mr="50px"
            justify={{ base: 'center', lg: 'flex-start' }}
            // position="sticky"
            top="72px"
            pt="40px"
            rounded="sm"
            my="20px"
          >
            <Box w="5px" bg="umi" mr="10px"></Box>
            <Heading
              // writingMode="vertical-lr"
              // style={{ writingMode: 'vertical-lr' }}
              fontSize="20px"
              top="72px"
              color="gray.700"
            >
              淡水開港的黃金歲月
            </Heading>
          </Flex>
          <Grid
            flex="1"
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
            {tamsuiMonuments.map((monument, index) => (
              <GridItem
                key={monument.name}
                display="flex"
                justifyContent="center"
                w="100%"
              >
                <CardMonument {...monument} />
              </GridItem>
            ))}
          </Grid>
          <Flex
            w="100%"
            mr="50px"
            justify={{ base: 'center', lg: 'flex-start' }}
            // position="sticky"
            top="72px"
            pt="40px"
            rounded="sm"
            my="20px"
          >
            <Box w="5px" bg="sun" mr="10px"></Box>
            <Heading
              // writingMode="vertical-lr"
              // style={{ writingMode: 'vertical-lr' }}
              fontSize="20px"
              top="72px"
              color="gray.700"
            >
              尋覓馬偕百年足跡
            </Heading>
          </Flex>
          <Grid
            flex="1"
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
            {mackayMonuments.map((monument, index) => (
              <GridItem
                key={monument.name}
                display="flex"
                justifyContent="center"
                w="100%"
              >
                <CardMonument {...monument} theme="sun" />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default Section02;
