import React from "react";
import {addPostAC} from "../../redux/profile-reducer";
import {StoreType} from "../../redux/redux-store";
import Posts from "./Posts";

type PostProps = {
    store: StoreType
}

const PostsContainer = (props: PostProps) => {

    const addPostHandler = (text:string) => {
        props.store.dispatch(addPostAC(text))
    }

    return (
        <Posts addPost={addPostHandler}
               newPost={props.store.getState().profilePage.newPost}/>)
}

export default PostsContainer;
