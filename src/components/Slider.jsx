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
  // sp-tabletのみでこのコンポーネントを有効にしているので、以下が発動することはない。不要
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
  },
};

const Slider = (props) => {
  return (
    <>
      <Swiper {...swiperParams} className="swiper">
        {/* ここmapにできる */}
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
    </>
  );
};

export default Slider;
