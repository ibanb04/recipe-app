import React from "react";
import ic_star from "../../assets/icons/ic_star.svg";
import ic_favorite from "../../assets/icons/ic-favorite.svg";
const CardRecipeMobile = ({
  food,
  calification,
  foodDesc,
  imgPlate,
  idnormal,
}) => {
  return (
    <li className="tarjet">
      <div
        className="plate"
        style={{ backgroundImage: `url(${imgPlate})` }}
      ></div>
      <div id={idnormal} className="normalTarjet">
        <div className="textFood">
          <span className="food">{food} </span>
          <span className="foodDesc">{foodDesc}</span>
        </div>
        <div className="score">
          <img className="star" src={ic_star} />
          <span>{calification}</span>
          <img className="heart" src={ic_favorite} />
        </div>
      </div>
    </li>
  );
};

export default CardRecipeMobile;
