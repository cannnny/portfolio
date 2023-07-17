import "./reset.css";
import "./App.scss";
import { useState, useEffect } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { IoIosArrowDropupCircle } from "react-icons/io";
import {
  FaAngleDown,
  FaHtml5,
  FaSass,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiGithub } from "react-icons/si";

function App() {
  // PageTopボタン用
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.addEventListener("scroll", toggleVisibility);
  }, []);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Swiper

  const [isSwiperEnabled, setIsSwiperEnabled] = useState(true);

  const handleResize = () => {
    const breakpoint = 600; //

    if (window.innerWidth < breakpoint) {
      setIsSwiperEnabled(true);
    } else {
      setIsSwiperEnabled(false);
    }
  };

  useEffect(() => {
    handleResize(); // コンポーネントがマウントされた時に初回の判定を行う

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <h1>Cannnny!</h1>
          <img src="./logo2.png" alt="" />
        </div>
        {/* <div className="header-menu">
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
        </div> */}
        <div className="scroll">
          <FaAngleDown className="scroll-icon" size={"40px"} color={"#fff"} />
        </div>
      </header>
      <div className="main">
        <div className="main-container about">
          <h2>About</h2>
          <div className="about-inner">
            <img className="portrait" src="./photo.jpg" alt="" />
            <div className="introduce">
              <div className="introduce-inner career">
                <h3>堂寺ユミ（どうてらゆみ）</h3>
                <p>2019年から某23区役所で職員として勤務。</p>
                <p>情報・人事部門の業務に従事してきました。</p>
                <p>プログラミングは独学です。</p>
              </div>
              <div className="introduce-inner skills">
                <h3>できること</h3>
                <div className="icons skill-icons">
                  <FaHtml5 size={"30px"} />
                  <FaSass size={"30px"} />
                  <FaReact size={"30px"} />
                  <SiAdobephotoshop size={"30px"} />
                  <SiAdobeillustrator size={"30px"} />
                </div>
              </div>
              <div className="introduce-inner qualifications">
                <h3>資格</h3>
                <p>ITパスポート(2021)</p>
                <p>情報セキュリティマネジメント試験(2022)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container works">
          <h2>Works</h2>
          <div className="works-inner">
            {isSwiperEnabled ? (
              <Swiper {...swiperParams} className="swiper">
                <SwiperSlide>
                  <a href="https://mh-weak-info.vercel.app/">
                    <img src="./thumb-mh.png" alt="" />
                  </a>
                  <div class="explanation"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <a href="https://hello-pawmo.vercel.app/">
                    <img src="./thumb-hp.png" alt="" />
                  </a>
                  <div class="explanation"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./thumb-lp.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./thumb-ca.png" alt="" />
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
              </Swiper>
            ) : (
              <div className="works-pc">
                <a href="https://mh-weak-info.vercel.app/">
                  <img src="./thumb-mh.png" alt="" />
                </a>
                <a href="https://hello-pawmo.vercel.app/">
                  <img src="./thumb-hp.png" alt="" />
                </a>
                <a href="https://love-pawmi.vercel.app/">
                  <img src="./thumb-lp.png" alt="" />
                </a>
                <a href="https://">
                  <img src="./thumb-ca.png" alt="" />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="main-container contact">
          <h2>Contact</h2>
          <div className="contact-inner">
            <div className="icons contact-icons">
              <FaTwitter size={"40px"} />
              <SiGithub size={"40px"} />
            </div>
          </div>
        </div>
        <div
          className={isVisible ? "returntop-button-show" : "returntop-button"}
          onClick={returnTop}
        >
          <IoIosArrowDropupCircle
            size={"50px"}
            color={"#192f60"}
            background={"#ffffff"}
          />
        </div>
      </div>
      <footer>
        <p>@2023 YUMI DOTERA</p>
      </footer>
    </div>
  );
}

export default App;
