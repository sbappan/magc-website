import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Image from 'next/image';

import tamilService from '../public/Tamil_Service.jpg'
import englishService from '../public/English_Service.jpg'
import bibleStudy from '../public/Bible_Study.jpg'

export default function PureCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      isPlaying={true}
    >
      <Slider>
        <Slide index={0}>
          <div>
            <Image src={tamilService} alt="" />
          </div>
        </Slide>
        <Slide index={1}>
          <div>
            <Image src={englishService} alt="" />
          </div>
        </Slide>
        <Slide index={2}>
          <div>
            <Image src={bibleStudy} alt="" />
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}