import React from 'react';
import '../StyleSheets/BedroomGallery.css';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const BedroomGallery: React.FC = () => {

    return (
    <div className='bedroomGalleryContainer'>

    <div className='linkDiv'><Link to='/' className='linkStyle2'>Back home</Link></div>

    <Swiper
    className='swiperDiv'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='swiperSlideStyleBR1'><div className='textDescDiv'><p>01</p> <p>Bedroom done for Jane Joe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleBR2'><div className='textDescDiv'><p>02</p> <p>Bedroom  done for John Doe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleBR3'><div className='textDescDiv'><p>03</p> <p>Bedroom done for Dohn Joe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleBR4'><div className='textDescDiv'><p>04</p> <p>Bedroom done for Dane Doe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleBR5'><div className='textDescDiv'><p>05</p> <p>Bedroom  done for John Jane</p></div></SwiperSlide>
    </Swiper>
        </div>
      );
    };