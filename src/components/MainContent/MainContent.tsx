import CardRecipe from '../CardRecipe/CardRecipe';
import CardRecipeMobile from '../CardRecipe/CardRecipeMobile';
import useRecipes from '../../services/useRecipes';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import CardSkeleton from '../CardRecipe/CardSkeleton';
import styles from './MainContent.module.scss';
const MainContent = () => {

    const { nameCategory } = useSelector((state: RootState) => state.categories);

    const { data: recipes, isLoading, isFetching } = useRecipes(nameCategory);
    console.log('recipes', recipes);

    return (
        <>
            <div className={styles.middle}>
                <div className={styles.middleTitle}>Nuevas Recetas</div>
                <div className={styles.conCarrusel}>

                    <ul id={styles.recipesCarousel} className={styles.carrusel}>
                        {
                            isLoading || isFetching ? (
                                <CardSkeleton />
                            ) : (recipes?.map((recipe: any, index: number) => (
                                <CardRecipe key={index} {...recipe} index={index} />
                            )))
                        }
                    </ul>
                    <ul id={styles.recipesCarouselMobile} className={styles.carrusel}>
                        {

                            isLoading || isFetching ? (
                                <CardSkeleton />
                            ) : (
                                recipes?.map((recipe: any, index: number) => (
                                    <CardRecipeMobile key={index} {...recipe} />
                                )))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MainContent