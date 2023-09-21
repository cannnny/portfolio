import "./stylesheets/About.scss";

import { FaHtml5, FaSass, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <div className="about-inner border">
        <img className="portrait" src="./photo.webp" alt="" />
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
              <FaHtml5 size={"35px"} />
              <FaSass size={"35px"} />
              <FaReact size={"35px"} />
              <SiAdobephotoshop size={"35px"} />
              <SiAdobeillustrator size={"35px"} />
            </div>
          </div>
          <div className="introduce-inner qualifications">
            <h3>資格</h3>
            <p>ITパスポート(2021)</p>
            <p>情報セキュリティマネジメント試験(2022)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
