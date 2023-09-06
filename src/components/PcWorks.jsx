import "./stylesheets/PcWorks.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const thumbSwiperParams = {
  slidesPerView: 3,
  spaceBetween: 10,
  watchSlidesProgress: true,
};

const mainSwiperParams = {
  modules: [Autoplay, Navigation],
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
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   type: "bullets",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: { swiper: thumbSwiperParams },
};

const PcWorks = (props) => {
  return (
    <>
      <Swiper {...mainSwiperParams} className="swiper border">
        {props.data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={item.url}>
                <img src={`./${item.img}`} alt="" />
              </a>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
      <Swiper {...thumbSwiperParams} className="swiper swiper-thumb">
        {props.data.map((item, index) => {
          return (
            <SwiperSlide key={item}>
              <a href={item.url}>
                <img src={`./${item.img}`} alt="" />
              </a>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </>
  );
};

export default PcWorks;
