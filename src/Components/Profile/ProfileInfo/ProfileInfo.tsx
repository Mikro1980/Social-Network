import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return <div className={classes.profile}>
        <div className={classes.profileFace}><img src="https://citaty.info/files/characters/636.jpg"
                                                  alt="Homer Simpson"/></div>
        <div className={classes.description}>
            <p>Name</p>
            <p>City</p>
            <p>Education</p>
            <p>Web Site</p>
        </div>
    </div>
}

export default ProfileInfo;