import React from "react";
import Footer from "../../basic/Footer/Footer";
import style from './UnknownPage.module.css'

const UnknownPage = ()=>{
    return(
        <div className={style.unknownPageContainer}>
        <div className={style.unknownPageInfo}>
            <div className={style.errNumber}>404</div>
            <div className={style.errMsg}>Page is not found</div>
        </div>
           <Footer/>
    </div>
    )
};

export default UnknownPage;