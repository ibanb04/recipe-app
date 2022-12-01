import { cardsData } from "./utils/cardsData";
import styles from "./MenuMobile.module.scss";
export const MenuMobile = () => {
  return (
    <div id="menuHead2" className={styles.menuHeads}>
      {cardsData.map((element) => (
        <div key={element.idnormal} className={styles.tarjetMenu}>
          <img className={styles.imgMenu} src={element.imgMenu} />
          <span className={styles.foodMenu}>{element.food}</span>
        </div>
      ))}
    </div>
  );
};
