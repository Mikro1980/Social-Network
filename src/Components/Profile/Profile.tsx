import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "../Posts/Posts";
import {
    PostType, ProfilePageType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/dialogs-reducer";

type ProfilePropsType = {
    profilePage:ProfilePageType
    dispatch:(action:ActionTypes)=>void
}

const Profile = (props: ProfilePropsType) => {

    let renderedItem = props.profilePage.posts.map((p: PostType) => (
        <MyPosts
            key={p.id}
            id={p.id}
            src={p.src}
            message={p.message}
            likes={p.likes}
            dispatch={props.dispatch}
        />
    ));
    return (
        <div className={classes.profileImg}>
            <div className={classes.profileMain}>
                <ProfileInfo/>
                <Posts
                    profilePage={props.profilePage}
                    dispatch={props.dispatch}
                />
                {renderedItem}
            </div>
        </div>
    )
}


export default Profile;