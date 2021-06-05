import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PersonsPropType = {
    id: number
    name: string
}


const DialogItem = (props: PersonsPropType) => {

    return <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
}

export default DialogItem;