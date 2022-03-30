import { Text, Link } from '@chakra-ui/react';

export const A1 = () => {
  return (
    <>
      <Text>
        160年前淡水成為國際港岸，許多人隨著商船來到淡水，他們將在三月的某一個瞬間快閃到淡水街頭，帶來160年前的生活故事！
      </Text>
      <Text>更詳盡的快閃資訊請洽</Text>
      <Link
        fontWeight="600"
        color="umi"
        href="https://www.tshs.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G252620780150430418&sid=0M052501085097875375"
        isExternal
      >
        活動網頁
      </Link>
    </>
  );
};
