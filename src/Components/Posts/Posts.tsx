import React from "react";
import classes from './Posts.module.css'
import {
    ProfilePageType,
    ActionTypes

} from "../../redux/state";
import {addPostAC, updateNewPostAC} from "../../redux/profile-reducer";

type PostProps = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Posts = (props: PostProps) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostAC(text))
        }
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === 'Enter') {
            addPostHandler()
        } else return
    }
    return (
        <div className={classes.posts}>
            <h3>My posts</h3>


            <textarea ref={newPostElement}
                      value={props.profilePage.newPost}
                      onChange={onPostChange}
                      onKeyPress={onKeyPressHandler}
            />
            <button onClick={addPostHandler}>Send
            </button>


        </div>
    )
}
export default Posts;

