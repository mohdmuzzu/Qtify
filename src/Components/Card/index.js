/* eslint-disable import/no-anonymous-default-export */
import "./card.css";

export default ({ imgSrc, followersCount, label }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src={imgSrc} alt="songs" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">{followersCount}100 follows</span>
        </div>
        <p className="card-label">{label}</p>
      </div>
    </div>
  );
};
