import React from "react";
import ic_vegetarian from "../../assets/icons/ic_vegetarian.svg";
import ic_main from "../../assets/icons/ic_main.svg";
import ic_cake from "../../assets/icons/ic_cake.svg";
import ic_fastfood from "../../assets/icons/ic_fast-food.svg";
import ic_kids from "../../assets/icons/ic_kids.svg";
import ic_soup from "../../assets/icons/ic_soup.svg";
export const MenuMobile = () => {
  const tarjets2 = [];
  tarjets2.push({
    idnormal: "tarhead1",
    imgMenu: ic_vegetarian,
    food: "Vegetarianos",
  });
  tarjets2.push({
    idnormal: "tarhead2",
    imgMenu: ic_main,
    food: "Principales",
  });
  tarjets2.push({
    idnormal: "tarhead3",
    imgMenu: ic_cake,
    food: "Tortas",
  });
  tarjets2.push({
    idnormal: "tarhead4",
    imgMenu: ic_fastfood,
    food: "Rápida",
  });
  tarjets2.push({
    idnormal: "tarhead5",
    imgMenu: ic_kids,
    food: "Menú Niños",
  });
  tarjets2.push({
    idnormal: "tarhead6",
    imgMenu: ic_soup,
    food: "Sopas",
  });

  return (
    <div id="menuHead2" className="menuHeads">
      {tarjets2.map((element) => (
        <div key={element.idnormal} className="tarjetMenu">
          <img className="imgMenu" src={element.imgMenu} />
          <span className="foodMenu">{element.food}</span>
        </div>
      ))}
    </div>
  );
};
