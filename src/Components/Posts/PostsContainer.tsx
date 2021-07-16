import React from "react";
import {addPostAC, updateNewPostAC} from "../../redux/profile-reducer";
import {ProfilePageType, StoreType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/dialogs-reducer";
import Posts from "./Posts";

type PostProps = {
    store: StoreType
}

const PostsContainer = (props: PostProps) => {

    const addPostHandler = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: any) => {
        props.store.dispatch(updateNewPostAC(text))
    }
    return (<Posts addPost={addPostHandler} onPostChange={onPostChange}
                   newPost={props.store.getState().profilePage.newPost}/>)
}

export default PostsContainer;

