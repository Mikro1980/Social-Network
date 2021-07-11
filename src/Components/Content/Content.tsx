import React from "react";
import Profile from "../Profile/Profile";
import classes from "./Content.module.css"
import {ActionTypes, ProfilePageType} from "../../redux/state";

type ContentPropType = {
    profilePage:ProfilePageType
    dispatch:(action:ActionTypes)=>void
}
const Content = (props:ContentPropType) => {
    return (
        <div className={classes.content}>
            <div className={classes.imgSection}>
                <img
                    src="https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80"
                    alt=""/>
            </div>
            <Profile profilePage={props.profilePage}
                     dispatch={props.dispatch}

            />

        </div>
    )
}
export default Content;