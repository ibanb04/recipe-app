import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../store/slices/categories/categoriesSlice'
import { RootState } from '../../store/store'
import { navbarItems } from './utils/navbarItems'
import styles from './NavBar.module.scss'


const NavBar = () => {
    const { nameCategory } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();
    const handleCategory = (categoryName: string) => {
        dispatch(addCategory(categoryName));
    }

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <span className={styles.text1}>Recipe<span className={styles.text2}>App</span></span>
            </div>
            <div className={styles.menuHead}>
                <ul>
                    {
                        navbarItems.map((item, index) => (
                            <li key={index} className={nameCategory === item.path ? "selected" : ""} onClick={() => handleCategory(item.path)}>{item.title}</li>
                        ))
                    }

                </ul>
            </div>
            <div className={styles.icoHome}></div>
        </div>
    )
}

export default NavBar