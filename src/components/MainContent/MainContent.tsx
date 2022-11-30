import OjingeoMuchim5 from "../../assets/Ojingeo-muchim-5.png";
import OjingeoMuchim from "../../assets/Ojingeo-muchim.png";
import OjingeoMuchim1 from "../../assets/Ojingeo-muchim-1.png";
import cherry from "../../assets/cherry.png";
import CardRecipe from '../CardRecipe/CardRecipe';
import CardRecipeMobile from '../CardRecipe/CardRecipeMobile';
const MainContent = () => {
    const tarjets = [];
    tarjets.push({
        idnormal: "normal1",
        idhover: "hover1",
        imgPlate: OjingeoMuchim5,
        food: "Ojingeo",
        foodDesc: "Muchim",
        calification: "5.0",
    });
    tarjets.push({
        idnormal: "normal2",
        idhover: "hover2",
        imgPlate: OjingeoMuchim,
        food: "Cola",
        foodDesc: "Chicken",
        calification: "5.0",
    });
    tarjets.push({
        idnormal: "normal3",
        idhover: "hover3",
        imgPlate: OjingeoMuchim1,
        food: "Roasted",
        foodDesc: "Carrot",
        calification: "4.5",
    });
    tarjets.push({
        idnormal: "normal4",
        idhover: "hover4",
        imgPlate: cherry,
        food: "Sweet",
        foodDesc: "Cherries",
        calification: "4.0",
    });
    return (
        <>
            <div className="middle">
                <div className="middleTitle">Nuevas Recetas</div>
                <div className="contCarrusel">

                    <ul id="carruselini" className="carrusel">
                        {
                            tarjets.map((recipe) => (
                                <CardRecipe key={recipe.idnormal} {...recipe} />
                            ))
                        }
                    </ul>
                    <ul id="carruselfin" className="carrusel">
                        {
                            tarjets.map((recipe) => (
                                <CardRecipeMobile key={recipe.idnormal} {...recipe} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainContent