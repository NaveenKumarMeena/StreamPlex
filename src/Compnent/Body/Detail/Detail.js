import React from "react";
import Title from "../../../Image/title.png";
import "./detail.css";

function Detail() {
  return (
    <div className="detail-container">
      <div className="detail">
        <div className="title">
          <img src={Title} alt=" Image not found" />
        </div>
        <div className="about">
          <h2 className="name">Spider-Man: Far from Home</h2>
          <div className="movie-detail">
            2019 | <div className="rated"> 13+</div> | 2h 9m | Action &
            Adventure
          </div>
          <p className="movie-desc">
            Even your friendly neighborhood superhero can use a vacation. But a
            new threat forces Peter Parker to swing into action during a school
            trip to Europe
          </p>
          <div className="movie-cast"><div className="starred">Starring:</div>Tom Holland,Zendaya,Samuel L. Jackson</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
