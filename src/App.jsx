import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import MyComponent from "./MyComponent";
import img1 from './assets/tranding-food-1.png';
import img2 from './assets/tranding-food-2.png';
import img3 from './assets/tranding-food-3.png';
import img4 from './assets/tranding-food-4.png';
import img5 from './assets/tranding-food-5.png';
import img6 from './assets/tranding-food-6.png';

export default function App() {
  return (
    <>
    <div className="container">
   <div className="swiper__container">
   <Swiper
      loop={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination,Navigation]}
        pagination={{ clickable: true, el: '.swiper-pagination' }}

        
navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true}}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>

      
       
      </Swiper>
      <div className="swiper-controler">
          <div className="swiper-button-next next__button-swiper">
           <span className="controller__icon"> <BsArrowRightCircleFill/></span>
          </div>
          <div className="swiper-button-prev prev__button-swiper">
          <span className="controller__icon">     <BsArrowLeftCircleFill/> </span>
          </div>
        <div className="swiper-pagination pagination_cutom" />
     
        </div>

   </div>
    </div>

    <MyComponent/>
    </>
  );
}
