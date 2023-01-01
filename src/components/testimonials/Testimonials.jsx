import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"       
          // install Swiper modules
          modules={[ Pagination, Navigation ]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            
          </div>
          <h5 className='client__name'>Name Surname</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officia quos provident iure soluta at dolorem modi doloribus harum atque dolorum ducimus eaque, optio in libero assumenda voluptatibus vitae repellendus.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />

          </div>
            <h5 className='client__name'>Name Surname</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officia quos provident iure soluta at dolorem modi doloribus harum atque dolorum ducimus eaque, optio in libero assumenda voluptatibus vitae repellendus.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />

          </div>            
          <h5 className='client__name'>Name Surname</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem officia quos provident iure soluta at dolorem modi doloribus harum atque dolorum ducimus eaque, optio in libero assumenda voluptatibus vitae repellendus.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials