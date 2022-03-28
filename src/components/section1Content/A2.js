import { Text, Link } from '@chakra-ui/react';

export const A2 = () => {
  return (
    <>
      <Text>
        淡水開港以來，外國商船接踵而來，經貿文化衝擊使淡水發展出獨樹一格的特色。
      </Text>
      <Text>
        透過本次深入淺出導覽解說，再現19世紀「洋華交會」下的種種記憶，讓參與的朋友擁有一場古蹟藝術的人文饗宴。
      </Text>
      <br />
      <Text>路線一：淡水開港的黃金歲月。</Text>
      <Text>路線二：尋覓馬偕百年足跡。</Text>
      <br />
      <Text>場次時間、集合地點及報名資訊請洽</Text>
      <Link
        fontWeight="600"
        color="umi"
        isExternal
        href="https://www.tshs.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G252620780150430418&sid=0L322422145908368005"
      >
        活動網頁
      </Link>
    </>
  );
};
