import React from "react";
import ic_star from "../../assets/icons/ic_star.svg";
import ic_favorite from "../../assets/icons/ic-favorite.svg";
const CardRecipeMobile = ({
  readyInMinutes,
  servings,
  title,
  image,
  sourceUrl,
  index,
}) => {
  return (
    <li className="tarjet">
      <div className="plate" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="normalTarjet">
        <div className="textFood">
          <span className="food">{title.substring(0, 8)} </span>
          <span className="foodDesc">holi</span>
        </div>
        <div className="score">
          <img className="star" src={ic_star} />
          <span>5.0</span>
          <img className="heart" src={ic_favorite} />
        </div>
      </div>
    </li>
  );
};

export default CardRecipeMobile;
