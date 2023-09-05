import "./reset.css";
import "./App.scss";
import MainVisual from "./components/MainVisual";
import About from "./components/About";
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
        <About />
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
