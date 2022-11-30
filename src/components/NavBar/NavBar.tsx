import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../store/slices/categories/categoriesSlice'
import { RootState } from '../../store/store'
import { navbarItems } from './utils/navbarItems'



const NavBar = () => {
    const { nameCategory } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();
    const handleCategory = (categoryName: string) => {
        dispatch(addCategory(categoryName));
    }

    return (
        <div className="headform">
            <div className="header">
                <div className="title">
                    <span className="text1">Recipe<span className="text2">App</span></span>
                </div>
                <div className="menuHead">
                    <ul>
                        {
                            navbarItems.map((item, index) => (
                                <li key={index} className={nameCategory === item.path ? "selected" : ""} onClick={() => handleCategory(item.path)}>{item.title}</li>
                            ))
                        }

                    </ul>
                </div>
                <div className="icoHome"></div>
            </div>
        </div>
    )
}

export default NavBar