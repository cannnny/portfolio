import "./stylesheets/PcWorks.scss";

const PcWorks = (props) => {
  return (
    <>
      <div className="pc-works">
        {props.data.map((item, index) => {
          return (
            <div className="works-item" key={index}>
              <a href={item.url}>
                <p className="item-img">
                  <img src={item.img} alt="" />
                </p>
                <p className="item-title">{item.name}</p>
                <p className="item-overview">{item.overview}</p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PcWorks;
