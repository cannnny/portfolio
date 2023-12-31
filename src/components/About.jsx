import "./stylesheets/About.scss";

import { FaStar } from "react-icons/fa";

const ranks = [
  <FaStar />,
  <>
    <FaStar />
    <FaStar />
  </>,
  <>
    <FaStar />
    <FaStar />
    <FaStar />
  </>,
];

const skillList = [
  { name: "HTML&CSS", rank: ranks[1] },
  { name: "JavaScript", rank: ranks[1] },
  { name: "React", rank: ranks[2] },
  { name: "Git", rank: ranks[1] },
  { name: "Photoshop", rank: ranks[0] },
  { name: "Illustrator", rank: ranks[2] },
  { name: "Sketch", rank: ranks[0] },
];

const About = () => {
  return (
    <>
      <h2>About</h2>
      <div className="about-inner border">
        <div className="portrait">
          <img src="./photo.webp" alt="" />
        </div>
        <div className="introduce">
          <div className="introduce-inner career">
            <h3>堂寺ユミ（どうてらゆみ）</h3>
            <p>東京都在住、1996年生まれの27歳です。</p>
            <p>
              2019年から4年ほど、練馬区役所で職員として勤務し、
              <br />
              情報・人事部門の業務に従事しました。
            </p>
            <p>プログラミングは独学です。</p>
            <p>
              Reactを使用したWebアプリを中心に
              <wbr />
              制作しています。
            </p>
          </div>
          <div className="introduce-inner skills">
            <h3>できること</h3>
            <div className="skill-list">
              {skillList.map((item, id) => {
                return (
                  <div key={id} className="skill-item">
                    <div className="skill-name">{item.name}</div>
                    <div className="skill-rank">{item.rank}</div>
                  </div>
                );
              })}
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
