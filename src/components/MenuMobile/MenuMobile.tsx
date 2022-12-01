import { cardsData } from "./utils/cardsData";
import styles from "./MenuMobile.module.scss";
import { FC } from "react";
export const MenuMobile: FC = () => {
  return (
    <div className={styles.menuHeads}>
      {cardsData.map((element) => (
        <div key={element.idnormal} className={styles.tarjetMenu}>
          <img className={styles.imgMenu} src={element.imgMenu} />
          <span className={styles.foodMenu}>{element.food}</span>
        </div>
      ))}
    </div>
  );
};
