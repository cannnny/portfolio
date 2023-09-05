import "./stylesheets/works.scss";

const Works = (props) => {
  return (
    <div className="works-pc">
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
