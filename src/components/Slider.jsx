import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperParams = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
  },
};

const Slider = () => {
  return (
    <>
      <Swiper {...swiperParams} className="swiper">
        <SwiperSlide>
          <a href="https://mh-weak-info.vercel.app/">
            <img src="./thumb-mh.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hello-pawmo.vercel.app/">
            <img src="./thumb-hp.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://love-pawmi.vercel.app/">
            <img src="./thumb-lp.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://canipture.vercel.app/">
            <img src="./thumb-ca.png" alt="" />
          </a>
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default Slider;
