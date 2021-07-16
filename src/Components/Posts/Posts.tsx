import React from "react";
import classes from './Posts.module.css'

type PostPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
    newPost: any
}


const Posts = (props: PostPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = props.addPost
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.onPostChange(text)
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
                      value={props.newPost}
                      onChange={onPostChange}
                      onKeyPress={onKeyPressHandler}
            />
            <button onClick={addPostHandler}>Send
            </button>
        </div>
    )
}
export default Posts;

