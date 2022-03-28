import { Text, Link } from '@chakra-ui/react';

export const A4 = () => {
  return (
    <>
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
