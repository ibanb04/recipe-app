import icStar from "../../assets/icons/ic_star.svg";
import icFavorite from "../../assets/icons/ic-favorite.svg";
import icPortion from "../../assets/icons/ic_portion.svg";
import icTime from "../../assets/icons/ic_time.svg";
import icChef from "../../assets/icons/ic_chef.svg";

const CardRecipe = ({
  idnormal,
  imgPlate,
  foodDesc,
  idhover,
  calification,
  food,
}) => {
  function showHover() {
    document.getElementById(idnormal)?.setAttribute("hidden", "true");
    document.getElementById(idhover)?.removeAttribute("hidden");
  }
  function showNormal() {
    document.getElementById(idnormal)?.removeAttribute("hidden");
    document.getElementById(idhover)?.setAttribute("hidden", "true");
  }
  return (
    <li
      key={idnormal}
      className="tarjet"
      onMouseOver={showHover}
      onMouseOut={showNormal}
    >
      <div
        className="plate"
        style={{ backgroundImage: `url(${imgPlate})` }}
      ></div>
      <div id={idnormal} className="normalTarjet">
        <div className="textFood">
          <span className="food">{food}</span>
          <span className="foodDesc">{foodDesc}</span>
        </div>
        <div className="score">
          <img className="star" alt="star" src={icStar} />
          <span>{calification} </span>
          <img className="heart" alt="favoriteIcon" src={icFavorite} />
        </div>
      </div>
      <div id={idhover} className="divhover" hidden>
        <div className="hoverTarjet">
          <div className="descriptionHover">
            <img className="imgHover" alt="portion" src={icPortion} />
            <span className="titTextHover">
              Tama&ntilde;o de la porci&oacute;n
            </span>
            <span className="textHover">4 raciones</span>
          </div>
          <div className="descriptionHover">
            <img className="imgHover" alt="time" src={icTime} />
            <span className="titTextHover">Tiempo de preparaci&oacute;n</span>
            <span className="textHover">10 minutos</span>
          </div>
          <div className="descriptionHover">
            <img className="imgHover" alt={food} src={icChef} />
            <span className="titTextHover">Dificultad</span>
            <span className="textHover">f&aacute;cil</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardRecipe;
