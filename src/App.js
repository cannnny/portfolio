import "./reset.css";
import "./App.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaAngleDown, FaHtml5, FaSass, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

function App() {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const swiperParams = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    //   waitForTransition: false,
    // },
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
      600: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  };

  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <h1>Cannnny!</h1>
          <img src="./logo2.png" alt="" />
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <p>about</p>
            </li>
            <li>
              <p>works</p>
            </li>
            <li>
              <p>contact</p>
            </li>
          </ul>
        </div>
        <div className="scroll">
          <p>Scroll</p>
          <FaAngleDown className="scroll-icon" size={"30px"} color={"#fff"} />
        </div>
      </header>
      <div className="main">
        <div className="main-container about">
          <h2>About</h2>
          <div className="about-inner">
            <img className="portrait" src="./photo.jpg" alt="" />
            <div className="introduce">
              <div className="career">
                <h3>堂寺ユミ（どうてらゆみ）</h3>
                <p>2019年から某23区役所で職員として勤務。</p>
                <p>情報・人事部門の業務に従事してきました。</p>
                <p>プログラミングは独学です。</p>
              </div>
              <div className="introduce-inner skills">
                <h3>できること</h3>
                <div className="skill-icons">
                  <FaHtml5 size={"30px"} />
                  <FaSass size={"30px"} />
                  <FaReact size={"30px"} />
                  <SiAdobephotoshop size={"30px"} />
                  <SiAdobeillustrator size={"30px"} />
                </div>
              </div>
              <div className="introduce-inner qualifications">
                <h3>合格歴</h3>
                <p>ITパスポート(2021)</p>
                <p>情報セキュリティマネジメント試験(2022)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container works">
          <h2>Works</h2>
          <div className="works-inner">
            <Swiper {...swiperParams}>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="returntop-button" onClick={returnTop}>
          <p>Page top</p>
          <IoIosArrowDropupCircle size={"50px"} color={"#192f60"} />
        </div>
        <div className="main-container contact">
          <h2>Contact</h2>
          <div className="contact-inner"></div>
        </div>
      </div>
      <footer>
        <p>@2023 YUMI DOTERA</p>
      </footer>
    </div>
  );
}

export default App;
