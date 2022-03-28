import { Text, Link } from '@chakra-ui/react';

export const A5 = () => {
  return (
    <>
      <Text>相關發行內容請見介紹影片</Text>
      <Link
        href="https://www.youtube.com/watch?v=1IPwSAMqUCw"
        color="umi"
        fontWeight="600"
        isExternal
      >
        介紹影片
      </Link>

      <Text>或</Text>
      <Text>相關活動內容請洽台灣基督長老教會淡水教會</Text>
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        mr="20px"
        href="02-26214043"
      >
        02-26214043
      </Link>
      <Text>及其</Text>
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
