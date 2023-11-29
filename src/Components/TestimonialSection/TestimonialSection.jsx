import { LuMoveLeft } from 'react-icons/lu';
import { LuMoveRight } from 'react-icons/lu';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import Card from './../Card/Card';

import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-heading-container">
        <h2>
          What says our <br /> happy Clients
        </h2>
        <div className="swiper-buttons-container">
          <button className="swiper-left-btn">
            <LuMoveLeft />
          </button>
          <button className="swiper-right-btn">
            <LuMoveRight />
          </button>
        </div>
      </div>
      <div className="testimonial-card-container">
        <Swiper
          loop={true}
          slidesPerView={3}
          navigation={{
            nextEl: `.swiper-right-btn`,
            prevEl: `.swiper-left-btn`,
          }}
          modules={[Pagination, Navigation]}
          className="swiper-container"
        >
          <SwiperSlide>
            <Card
              image={'client-1.png'}
              title={'Jane Cooper'}
              post={'Ceo of Hunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={'client-2.png'}
              title={'Devon Lane'}
              post={'Ceo of Hunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={'client-3.png'}
              title={'Robert Fox'}
              post={'Ceo of Hunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={'client-1.png'}
              title={'Jane Cooper'}
              post={'Ceo of Hunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={'client-2.png'}
              title={'Devon Lane'}
              post={'Ceo of Hunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={'client-3.png'}
              title={'Robert Fox'}
              post={'Ceo of Hunt'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
