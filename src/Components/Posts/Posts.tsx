import React, {useState} from "react";
import classes from './Posts.module.css'
import MyPosts from "../MyPosts/MyPosts";


const Posts = () => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }
    return (
        <div className={classes.posts}>
            <h3>My posts</h3>


            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Send
            </button>


        </div>
    )
}
export default Posts;

