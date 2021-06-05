import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Sidebar.module.css";
import Friends from "../Friends/Friends";
// NavLink позволяет не перезагружать всю страницу, как "а", но лишь перересовывать название в адресной строке
// в NavLink вместо "href" используем "to"
// в NavLink встроены параметры активного класса activeClassName
const Sidebar = (props:any) => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.item}><NavLink to="/Content" activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/Dialogs" activeClassName={classes.active}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to="/News" activeClassName={classes.active}>News</NavLink></div>
            <div className={classes.item}><NavLink to="/Music" activeClassName={classes.active}>Music</NavLink></div>
            <div className={classes.item}><NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink></div>
            <Friends friends={props.friends}/>

        </div>
    )
}
export default Sidebar;