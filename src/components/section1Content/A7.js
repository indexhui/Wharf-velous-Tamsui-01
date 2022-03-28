import { Text, Link } from '@chakra-ui/react';

export const A7 = () => {
  return (
    <>
      <Text>
        淡江大學資訊與圖書館學系辦理之重點研究暨USR計畫成果展示開幕暨音樂會。後續展示將移至淡江大學海事博物館展出。
        相關活動及後續展覽資訊請洽
      </Text>
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.facebook.com/wikitamsui/"
      >
        淡水維基館臉書專頁
      </Link>
      <span px="10px"> 或 </span>
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://enroll.tku.edu.tw/course.aspx?cid=TABX20220307"
      >
        活動網頁
      </Link>
    </>
  );
};
