import React from "react";
import classes from "./Footer.module.css"

let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)
let year = today.getFullYear();

const Footer = () => {
    return (
        <div className={classes.footer}>
            <p>	Mikhail Romanov &#169; {year} </p></div>
    )
}
export default Footer;