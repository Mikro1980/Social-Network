import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "../Posts/Posts";


const Profile = (props:any) => {

    let renderedItem = props.profilePage.posts.map((p:any) => (
        <MyPosts
            src={p.src}
            message={p.message}
            likes={p.likes}
        />
    ));
    return (
        <div className={classes.profileImg}>
            <div className={classes.profileMain}>
                <ProfileInfo/>
                <Posts/>
                {renderedItem}
            </div>
        </div>
    )
}


export default Profile;