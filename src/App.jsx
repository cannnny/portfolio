import "./reset.css";
import "./App.scss";
import MainVisual from "./components/MainVisual";
import About from "./components/About";
import SpWorks from "./components/SpWorks";
import PcWorks from "./components/PcWorks";
import Contact from "./components/Contact";

// icons
import { IoIosArrowDropupCircle } from "react-icons/io";

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
  const [isPc, setisPc] = useState(true);

  const handleResize = () => {
    const breakpoint = 1024;

    if (window.innerWidth > breakpoint) {
      setisPc(true);
    } else {
      setisPc(false);
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
      name: "モンハン弱点教えてあげるくん",
      url: "https://mh-weak-info.vercel.app/",
      img: "thumb-mh.jpg",
      overview:
        "ゲーム「モンスターハンター」に登場するモンスターの弱点を教えてくれるWebアプリです。",
    },
    {
      name: "Hello Pawmo!",
      url: "https://hello-pawmo.vercel.app/",
      img: "thumb-hp.jpg",
      overview: "ポケモン「パモット」がメッセージに答えて挨拶してくれます。",
    },
    {
      name: "らぶぱも",
      url: "https://love-pawmi.vercel.app/",
      img: "thumb-lp.jpg",
      overview: "ポケモン「パモ」のぬいぐるみをひたすら眺めるWebアプリです。",
    },
    {
      name: "Canipture!",
      url: "https://canipture.vercel.app/",
      img: "thumb-ca.jpg",
      overview: "ゲームのスクリーンショットを掲載したギャラリーです。",
    },
    {
      name: "きょう何食べる？",
      url: "https://whats-for-dinner-cannnny.vercel.app/",
      img: "thumb-wd.jpg",
      overview: "気分に合わせて今日のご飯を提案してくれるWebアプリです。",
    },
  ];

  return (
    <div className="App">
      <MainVisual />
      <div className="main">
        <About />
        <div className="contents works">
          <h2>Works</h2>
          <div className="works-inner border">
            {isPc ? <PcWorks data={worksData} /> : <SpWorks data={worksData} />}
          </div>
        </div>
        <Contact />
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
