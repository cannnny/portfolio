import "./stylesheets/PcWorks.scss";

const PcWorks = ({ data }) => {
  return (
    <>
      <div className="pc-works">
        {data.map((item, index) => {
          return (
            <div className="works-item" key={index}>
              <a href={item.url}>
                <div className="item-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="item-category">{item.category}</div>
                <div className="item-title">{item.name}</div>
                <div className="item-overview">{item.overview}</div>
                <div className="item-tags">
                  {item.tag.map((element, id) => {
                    return (
                      <div className="tag" key={id}>
                        {element}
                      </div>
                    );
                  })}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PcWorks;
