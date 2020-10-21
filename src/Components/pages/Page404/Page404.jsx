import React from "react";
import style from './Page404.module.css'
import Footer from "../../basic/Footer/Footer";

const Page404 = () => {
    return (
        <div>
            <div className={style.page404Container}>
                <div className={style.page404Error}>
                    Сторінку
                    не знайдено
                </div>
                <div className={style.page404Logo}>
                    <div className={style.page404LogoNumber}>4</div>
                    <div className={style.page404LogoNumber}>0</div>
                    <div className={style.page404LogoNumber}>4</div>
                </div>

            </div>
            <Footer/>
        </div>
    )
};

export default Page404;