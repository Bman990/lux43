import React from 'react';
import '../StyleSheets/KitchenGallery.css';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const KitchenGallery: React.FC = () => {

    return (
    <div className='kitchenGalleryContainer'>

    <div className='linkDiv'><Link to='/' className='linkStyle2'>Back home</Link></div>

    <Swiper
    className='swiperDiv'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='swiperSlideStyleK1'><div className='textDescDiv'><p>01</p> <p>Kitchen done for Jane Joe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleK2'><div className='textDescDiv'><p>02</p> <p>Kitchen done for John Doe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleK3'><div className='textDescDiv'><p>03</p> <p>Kitchen done for Dohn Joe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleK4'><div className='textDescDiv'><p>04</p> <p>Kitchen done for Dane Doe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleK5'><div className='textDescDiv'><p>05</p> <p>Kitchen done for John Jane</p></div></SwiperSlide>
    </Swiper>
        </div>
      );
    };



