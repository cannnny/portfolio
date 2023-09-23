// css
import "./reset.css";
import "./App.scss";

// コンポーネント
import MainVisual from "./components/MainVisual";
import About from "./components/About";
import SpWorks from "./components/SpWorks";
import PcWorks from "./components/PcWorks";
import Contact from "./components/Contact";

// アイコン
import { IoIosArrowDropupCircle } from "react-icons/io";

// フック
import { useState, useEffect } from "react";

function App() {
  // スクロールに応じて各コンテンツを下からフェードイン
  const contents = document.querySelectorAll(".contents");
  const contentsArray = Array.prototype.slice.call(contents, 0);

  const options = {
    root: null,
    rootMargin: "0px 0px -150px",
    threshold: 0,
  };

  const doWhenIntersect = (entries) => {
    const entriesArray = Array.prototype.slice.call(entries, 0);
    entriesArray.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  };

  const observer = new IntersectionObserver(doWhenIntersect, options);
  contentsArray.forEach((content) => {
    observer.observe(content);
  });

  // スクロールに応じて上に戻るボタンを表示
  const [buttonIsVisible, setButtonIsVisible] = useState(false);

  const buttonToggleVisibility = () => {
    window.scrollY > 300 ? setButtonIsVisible(true) : setButtonIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonToggleVisibility);
    return () => window.addEventListener("scroll", buttonToggleVisibility);
  }, []);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 画面サイズが1024以下ならworksをスライダーで表示
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

  // 掲載している制作物一覧
  const worksData = [
    {
      name: "モンハン弱点教えてあげるくん",
      url: "https://mh-weak-info.vercel.app/",
      img: "thumb-mh.webp",
      overview:
        "「モンスターハンター」に登場するモンスターの弱点を検索できるWebアプリです。",
    },
    {
      name: "Hello Pawmo!",
      url: "https://hello-pawmo.vercel.app/",
      img: "thumb-hp.webp",
      overview: "「パモット」がメッセージに答えて挨拶してくれるWebアプリです。",
    },
    {
      name: "らぶぱも",
      url: "https://love-pawmi.vercel.app/",
      img: "thumb-lp.webp",
      overview: "「パモ」のぬいぐるみをひたすら眺めるWebアプリです。",
    },
    // {
    //   name: "Canipture!",
    //   url: "https://canipture.vercel.app/",
    //   img: "thumb-ca.webp",
    //   overview: "ゲームのスクリーンショットを掲載したギャラリーです。",
    // },
    {
      name: "きょう何食べる？",
      url: "https://whats-for-dinner-git-main-cannnny.vercel.app/",
      img: "thumb-wd.webp",
      overview: "気分に合わせて今日のご飯を提案してくれるWebアプリです。",
    },
  ];

  return (
    <div className="App">
      <MainVisual />
      <div className="main">
        <div className="contents about">
          <About />
        </div>
        <div className="contents works">
          <h2>Works</h2>
          <div className="works-inner border">
            {isPc ? <PcWorks data={worksData} /> : <SpWorks data={worksData} />}
          </div>
        </div>
        <Contact />
        <div
          className={
            !buttonIsVisible
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
