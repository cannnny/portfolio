// css
import "./reset.css";
import "./App.scss";

// 制作物データ
import { worksData } from "./worksData";

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

  // 監視対象が一定の場所に到達したらshowクラスを付与
  const doWhenIntersect = (entries) => {
    const entriesArray = Array.prototype.slice.call(entries, 0);
    entriesArray.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  };

  // 監視対象を設定
  const observer = new IntersectionObserver(doWhenIntersect, options);
  contentsArray.forEach((content) => {
    observer.observe(content);
  });

  // スクロール量が300より大きければ上に戻るボタンを表示
  const [buttonIsVisible, setButtonIsVisible] = useState(false);
  const buttonToggleVisibility = () => {
    window.scrollY > 300 ? setButtonIsVisible(true) : setButtonIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonToggleVisibility);
    return () => window.addEventListener("scroll", buttonToggleVisibility);
  }, []);

  // 上に戻る動き
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 画面サイズが1024pxより下ならworksをスライダーで表示
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
            {/* 画面サイズがPCかどうかでカードとスライダーを切り替え */}
            {isPc ? <PcWorks data={worksData} /> : <SpWorks data={worksData} />}
          </div>
        </div>
        <Contact />
        {/* スクロール量が一定以上に到達したら上に戻るボタンを表示 */}
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
      <footer className="footer">
        <p>@2023 YUMI DOTERA</p>
      </footer>
    </div>
  );
}

export default App;
