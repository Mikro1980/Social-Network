import React, {useState} from "react";
import classes from './MyPosts.module.css';
import {ActionTypes} from "../../redux/state";
import {addLikeAC} from "../../redux/profile-reducer";


type messageType = {
    id:number
    message: string
    src: string
    likes: number
    dispatch: (action: ActionTypes) => void

}
let myHeart = classes.heart;
let myLikes = classes.myLikes;
const MyPosts = (props: messageType) => {
    // const [likes, setLikes] = useState(props.likes);
    const addLikeHandler = () =>{
        let id = props.id
        props.dispatch(addLikeAC(id))
        // myHeart = classes.active
    }

    // function countLikes() {
    //     myHeart = classes.active
    //     // myLikes = classes.myActiveLikes
    //     setLikes(likes + 1)
    // }

    return (
        <div className={classes.postCon}>
            <div className={classes.messageAva}>
                <img
                    src={props.src} alt='avatar'/>
            </div>
            <div className={classes.messageSection}>{props.message}</div>
            <div onClick={addLikeHandler}
                 className={props.likes>0?classes.active:myHeart}> &#10084; </div>  {/*нужно сделать, чтобы лайки не краснели, если по ним не кликали, даже если их больше 0*/}
            {props.likes > 0 && <span className={classes.myActiveLikes}>{props.likes}</span>} {/*Если лайков 0, то ничего не отрисуется т.к.  в первой части выражения будет False*/}


        </div>
    )
}

export default MyPosts;