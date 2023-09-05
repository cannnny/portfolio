import "./reset.css";
import "./App.scss";
import MainVisual from "./components/MainVisual";
import Slider from "./components/Slider";
import Works from "./components/Works";

// icons
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaHtml5, FaSass, FaReact, FaTwitter } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiGithub } from "react-icons/si";

import { useState, useEffect } from "react";

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

  // worksスライダー用
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(true);

  const handleResize = () => {
    const breakpoint = 1024;

    if (window.innerWidth < breakpoint) {
      setIsSwiperEnabled(true);
    } else {
      setIsSwiperEnabled(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const worksData = [
    {
      url: "https://mh-weak-info.vercel.app/",
      img: "thumb-mh.jpg",
    },
    {
      url: "https://hello-pawmo.vercel.app/",
      img: "thumb-hp.jpg",
    },
    {
      url: "https://love-pawmi.vercel.app/",
      img: "thumb-lp.jpg",
    },
    {
      url: "https://canipture.vercel.app/",
      img: "thumb-ca.jpg",
    },
  ];

  return (
    <div className="App">
      <MainVisual />
      <div className="main">
        {/* main-containerをコンポーネント化できるかも */}
        <div className="main-container about">
          <h2>About</h2>
          <div className="about-inner">
            <img className="portrait" src="./photo.jpg" alt="" />
            <div className="introduce">
              <div className="introduce-inner career">
                <h3>堂寺ユミ（どうてらゆみ）</h3>
                <p>2019年から4年ほど、練馬区役所で職員として勤務。</p>
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
              <Slider data={worksData} />
            ) : (
              <Works data={worksData} />
            )}
          </div>
        </div>
        <div className="main-container contact">
          <h2>Contact</h2>
          <div className="contact-inner">
            <div className="icons button contact-icons">
              <a href="https://twitter.com/canypuff" alt="">
                <FaTwitter size={"40px"} />
              </a>
              <a href="https://github.com/cannnny" alt="">
                <SiGithub size={"40px"} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            !isVisible
              ? "button return-top-button"
              : "button return-top-button show"
          }
          onClick={returnTop}
        >
          <IoIosArrowDropupCircle className="button" size={"60px"} />
        </div>
      </div>
      <footer>
        <p>@2023 YUMI DOTERA</p>
      </footer>
    </div>
  );
}

export default App;
