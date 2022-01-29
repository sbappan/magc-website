import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import promise2022 from '../public/Promise_2022.png'
import tamilService from '../public/Tamil_Service.png'
import englishService from '../public/English_Service.png'
import bibleStudy from '../public/Bible_Study.png'

export default function ImageCarousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3500} showThumbs={false}>
      <div>
        <Image src={promise2022} alt="" />
      </div>
      <div>
        <Image src={tamilService} alt="" />
      </div>
      <div>
        <Image src={englishService} alt="" />
      </div>
      <div>
        <Image src={bibleStudy} alt="" />
      </div>
    </Carousel>
  )
}