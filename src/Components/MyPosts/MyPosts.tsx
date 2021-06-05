import React, {useState} from "react";
import classes from './MyPosts.module.css';


type messageType = {
    message: string
    src: string
    likes: number

}
let myHeart = classes.heart;
// let myLikes = classes.myLikes;
const MyPosts = (props: messageType) => {
    const [likes, setLikes] = useState(props.likes);

    function countLikes() {
        myHeart = classes.active
        // myLikes = classes.myActiveLikes
        setLikes(likes + 1)


    }

    return (
        <div className={classes.postCon}>
            <div className={classes.messageAva}>
                <img
                    src={props.src} alt='avatar'/>
            </div>
            <div className={classes.messageSection}>{props.message}</div>
            <div onClick={() => countLikes()} className={myHeart}> &#10084; </div>
            {likes > 0 && <span className={classes.myActiveLikes}>{likes}</span>} {/*Если лайков 0, то ничего не отрисуется т.к.  в первой части выражения будет False*/}


        </div>
    )
}

export default MyPosts;