import React from "react";
import classes from './Posts.module.css'
import {AddMessageFormRedux} from "../InputForm/addMessageForm";

type PostPropsType = {
    addPost: (text: string) => void
    newPost: any
}

const Posts = (props: PostPropsType) => {

    const addPostHandler = (value: any) => props.addPost(value.newMessageBody)
    return (
        <div className={classes.posts}>
            <h3>My posts</h3>
            <AddMessageFormRedux onSubmit={addPostHandler}/>

        </div>
    )
}
export default Posts;

