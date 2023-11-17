/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import "./CardSection.css";
import Card from "../Card";
import Carousel from "../Carousel";
import { useRef, useState } from "react";

export default ({ tittle, data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="section">
      <div className="section-header">
        <h1 className="tittle">{tittle}</h1>
        <h1
          className="section-toggle-btn"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </h1>
      </div>
      {isCollapsed ? (
        <Carousel data={data} />
      ) : (
        <div className="card-container">
          {data.map((cardData) => (
            <Card
              key={cardData.id}
              imgSrc={cardData.image}
              label={cardData.title}
              followersCount={cardData.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};
