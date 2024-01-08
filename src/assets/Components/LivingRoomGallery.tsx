import React from 'react';
import '../StyleSheets/LivingroomGallery.css';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const LivingRoomGallery: React.FC = () => {

    return (
    <div className='livingroomGalleryContainer'>

    <div className='linkDiv'><Link to='/lux43/' className='linkStyle2'>Back home</Link></div>

    <Swiper
    className='swiperDiv'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='swiperSlideStyleLR1'><div className='textDescDiv'><p>01</p> <p>Livingroom done for Jane Joe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleLR2'><div className='textDescDiv'><p>02</p> <p>Livingroom done for John Doe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleLR3'><div className='textDescDiv'><p>03</p> <p>Livingroom done for Dohn Joe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleLR4'><div className='textDescDiv'><p>04</p> <p>Livingroom done for Dane Doe</p></div></SwiperSlide>
      <SwiperSlide className='swiperSlideStyleLR5'><div className='textDescDiv'><p>05</p> <p>Livingroom done for John Jane</p></div></SwiperSlide>
    </Swiper>
        </div>
      );
    };