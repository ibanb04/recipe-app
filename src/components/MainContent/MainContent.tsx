import CardRecipe from '../CardRecipe/CardRecipe';
import CardRecipeMobile from '../CardRecipe/CardRecipeMobile';
import useRecipes from '../../services/useRecipes';
const MainContent = () => {
    const { data: recipes, isLoading, error, isFetching } = useRecipes("vegetarian", "vegetarian");
    console.log('recipes', recipes);

    return (
        <>
            <div className="middle">
                <div className="middleTitle">Nuevas Recetas</div>
                <div className="contCarrusel">

                    <ul id="carruselini" className="carrusel">
                        {
                            recipes?.map((recipe: any, index: number) => (
                                <CardRecipe key={recipe.id} {...recipe} index={index} />
                            ))
                        }
                    </ul>
                    <ul id="carruselfin" className="carrusel">
                        {
                            recipes?.map((recipe: any) => (
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