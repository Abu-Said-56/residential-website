import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
        <h2 className='text-4xl from-accent-content text-center py-4'>Inside The Villa</h2>
        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper bg-amber-300"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/zVr14y2/aaron-huber-s95o-B2n9jng-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/BTWB9fw/kenny-eliason-kdwahp-WYf-Qo-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/sq1v1JQ/francesca-tosolini-LL9-V0i-Mp-St-M-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/JHwvVqv/francesca-tosolini-6jap-TIj-UQo-I-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/WtxSL17/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/sy7tC20/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/Hx6xf5P/francesca-tosolini-Xc-Vm8mn7-NUM-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/Jvk0Q8B/slider-007.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/4PsWQvQ/lotus-design-n-print-w-Rz-Barqn3hs-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
        </>
    );
};

export default Slider;