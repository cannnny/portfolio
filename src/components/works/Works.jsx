import "./works.scss";

// 内容はsp,pcと同じなので親からデータを渡す。
const Works = (props) => {
  return (
    <div className="works-pc">
      {/* ここmapにできる */}
      {props.data.map((item, index) => {
        return (
          <a href={item.url} key={index}>
            <img src={`./${item.img}`} alt="" />
          </a>
        );
      })}
    </div>
  );
};

export default Works;
