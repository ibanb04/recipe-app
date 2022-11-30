import React from 'react'
import img_footer from '../../assets/Grupo-7610.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="textfooter"> <span>Con el patrocinio de</span></div>
            <img className="imgFooter" src={img_footer} />
        </div>
    )
}

export default Footer