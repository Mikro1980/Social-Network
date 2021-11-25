import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {
    PostType, ProfilePageType, StoreType
} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/dialogs-reducer";
import PostsContainer from "../Posts/PostsContainer";
import {getUserStatus} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    store: StoreType
    dispatch: (type: ActionTypes) => void
    profile:any
    status:string
    updateStatus:(status:string)=>void
}

const Profile = (props: ProfilePropsType) => {

    // @ts-ignore
    let renderedItem = store.getState().profilePage.posts.map((p: PostType) => (
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
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <PostsContainer
                    // profilePage={props.profilePage}
                    store={props.store}
                    // newPost={props.profilePage.newPost}
                />
                {renderedItem}
            </div>
        </div>
    )
}


export default Profile;