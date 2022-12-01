import icStar from "../../assets/icons/ic_star.svg";
import icFavorite from "../../assets/icons/ic-favorite.svg";
import { useRandomRating } from "./helpers/useRandomRating";
import styles from "../MainContent/MainContent.module.scss";
import { useSelector } from "react-redux";

const CardRecipeMobile = ({ title, image, index }) => {
  const { nameCategory } = useSelector((state) => state.categories);

  const rating = useRandomRating(0.0, 5.0, 1);
  return (
    <li className={styles.tarjet}>
      <div
        className={styles.plate}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div id={`normal${index}`} className={styles.normalTarjet}>
        <div className={styles.textFood}>
          <span className={styles.food}>{title.substring(0, 8)} </span>
          <span className={styles.foodDesc}>{nameCategory} </span>
        </div>
        <div className={styles.score}>
          <img className={styles.star} alt="star" src={icStar} />
          <span>{rating}</span>
          <img className={styles.heart} alt="favoriteIcon" src={icFavorite} />
        </div>
      </div>
    </li>
  );
};

export default CardRecipeMobile;
