/* eslint-disable import/no-anonymous-default-export */
import Carousel from "../Carousel";

export default ({ tittle, data }) => {
  return (
    <div className="section">
      <div>
        <h1 className="tittle">{tittle}</h1>
      </div>
      <Carousel data={data} />
    </div>
  );
};
