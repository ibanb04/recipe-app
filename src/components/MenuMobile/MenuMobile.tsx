import { cardsData } from "./utils/cardsData";
import styles from "./MenuMobile.module.scss";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/slices/categories/categoriesSlice";
export const MenuMobile: FC = () => {
  const dispatch = useDispatch();
  const handleCategory = (categoryName: string) => {
    dispatch(addCategory(categoryName));
  }

  return (
    <div className={styles.menuHeads}>
      {cardsData.map((element, index) => (
        <div key={element.idnormal + index} className={styles.tarjetMenu} onClick={() => handleCategory(element.path)}>
          <img className={styles.imgMenu} src={element.imgMenu} alt={element.food} />
          <span className={styles.foodMenu}>{element.food}</span>
        </div>
      ))}
    </div>
  );
};
