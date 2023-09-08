import "./stylesheets/MainVisual.scss";
import { FaAngleDown } from "react-icons/fa";

const MainVisual = () => {
  return (
    <div className="main-visual">
      <div className="logo">
        <h1>Cannnny!</h1>
        <img src="./logo2.png" alt="" />
      </div>
      <div className="scroll">
        <FaAngleDown className="scroll-icon" size={"40px"} />
      </div>
    </div>
  );
};

export default MainVisual;
