import icStar from "../../assets/icons/ic_star.svg";
import icFavorite from "../../assets/icons/ic-favorite.svg";
import icPortion from "../../assets/icons/ic_portion.svg";
import icTime from "../../assets/icons/ic_time.svg";
import icChef from "../../assets/icons/ic_chef.svg";
import { useRandomRating } from "./helpers/useRandomRating";
import { useRandomDifficultyLevel } from "./helpers/useRandomDifficultyLevel";
import { useSelector } from "react-redux";

const CardRecipe = ({
  readyInMinutes,
  servings,
  title,
  image,
  sourceUrl,
  index,
}) => {
  const { nameCategory } = useSelector((state) => state.categories);
  const rating = useRandomRating(0.0, 5.0, 1);
  const difficultyLevel = useRandomDifficultyLevel();

  function showHover() {
    document.getElementById(`normal${index}`)?.setAttribute("hidden", "true");
    document.getElementById(`hover${index}`)?.removeAttribute("hidden");
  }
  function showNormal() {
    document.getElementById(`normal${index}`)?.removeAttribute("hidden");
    document.getElementById(`hover${index}`)?.setAttribute("hidden", "true");
  }
  return (
    <li className="tarjet" onMouseOver={showHover} onMouseOut={showNormal}>
      <div className="plate" style={{ backgroundImage: `url(${image})` }}></div>
      <div id={`normal${index}`} className="normalTarjet">
        <div className="textFood">
          <span className="food">{title.substring(0, 8)} </span>
          <span className="foodDesc">{nameCategory} </span>
        </div>
        <div className="score">
          <img className="star" alt="star" src={icStar} />
          <span>{rating}</span>
          <img className="heart" alt="favoriteIcon" src={icFavorite} />
        </div>
      </div>
      <div id={`hover${index}`} className="divhover" hidden>
        <div className="hoverTarjet">
          <div className="descriptionHover">
            <img className="imgHover" alt="portion" src={icPortion} />
            <span className="titTextHover">Tamaño de la porción</span>
            <span className="textHover">{servings} raciones</span>
          </div>
          <div className="descriptionHover">
            <img className="imgHover" alt="time" src={icTime} />
            <span className="titTextHover">Tiempo de preparación</span>
            <span className="textHover">{readyInMinutes} minutos</span>
          </div>
          <div className="descriptionHover">
            <img className="imgHover" alt={title} src={icChef} />
            <span className="titTextHover">Dificultad</span>
            <span className="textHover">{difficultyLevel}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardRecipe;
