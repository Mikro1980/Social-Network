import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../Preloader/preloader";

const ProfileInfo = (props: any) => {
    // if(!props.profile){
    //     return <Preloader/>
    // }
    return <div className={classes.profile}>
        <div className={classes.profileFace}>
            <img
                src={`https://citaty.info/files/characters/636.jpg`}
                alt="Homer Simpson"/></div>
        <div className={classes.description}>
            <p>Name {props.profile ? props.profile.fullName : "Homer Simpson"}</p>
            <p>City</p>
            <p>Education</p>
            <p>Web Site</p>
            <p>{props.profile ? props.profile.aboutMe : ''}</p>
        </div>
    </div>
}

export default ProfileInfo;