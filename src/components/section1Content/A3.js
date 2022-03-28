import { Text, Link } from '@chakra-ui/react';

export const A3 = () => {
  return (
    <>
      <Text>
        故事牆描繪從「馬偕上陸到淡水」一直至「馬偕日」的在地故事，歡迎搭乘捷運來到淡水，欣賞馬偕在淡水的遺留下的點滴足跡。
      </Text>
      <br />
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.youtube.com/watch?v=oo_cltIiZO8"
      >
        故事牆介紹影片
      </Link>
      <Text>相關詳情請洽辦理單位</Text>
      <Link
        fontWeight="600"
        mr="20px"
        color="umi"
        isExternal
        href="https://www.mackay.org.tw/ch/"
      >
        官方網頁
      </Link>
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.facebook.com/mackaychurchevents1/"
      >
        臉書專頁
      </Link>
    </>
  );
};
