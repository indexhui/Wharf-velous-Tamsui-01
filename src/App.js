import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme/theme.js';
import Opening from './components/Opening.js';
import Header from './layout/Header.js';
import Hero from './layout/Hero.js';
import SectionIntro from './layout/SectionIntro.js';
import Section01 from './layout/Section01.js';
import Section02 from './layout/Section02.js';
import Section03 from './layout/Section03.js';
import Footer from './layout/Footer.js';
import { Element } from 'react-scroll';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Opening />
      <Header />
      <Box w="100%" overflow="hidden">
        <Element name="hero" id="hero">
          <Hero />
        </Element>
      </Box>
      <SectionIntro />
      <Element name="section01" id="section01">
        <Section01 />
      </Element>
      <Element name="section02" id="section02">
        <Section02 />
      </Element>
      <Element name="section03" id="section03">
        <Section03 />
      </Element>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
