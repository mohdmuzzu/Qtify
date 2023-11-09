/* eslint-disable import/no-anonymous-default-export */
import "./card.css";

export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img className="card-img" src="Group 7495.png" alt="song" />
        </div>
        <div className="card-content">
          <div className="card-content-pill">
            <p className="card-label">New English Songs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
