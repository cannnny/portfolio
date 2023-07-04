import "./reset.css";
import "./App.scss";
import { IoIosArrowDown } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-logo">
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
          <IoIosArrowDown
            className="scroll-icon"
            size={"30px"}
            color={"#fff"}
          />
        </div>
      </header>
      <div className="main">
        <div className="about container">
          <h2>About</h2>
          <div className="about-inner">
            <img className="about-photo" src="" alt="" />
            <div className="introduce">
              <div className="about-text">ほげ</div>
              <div className="skills">
                <p>できること</p>
                <p>HTML、CSS、JS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="works container">
          <h2>Works</h2>
          <div className="works-inner">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
          </div>
        </div>
        <div className="contact container">
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
