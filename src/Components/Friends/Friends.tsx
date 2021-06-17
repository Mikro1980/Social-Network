import React from "react";
import classes from "./Friends.module.css";

const Friends = (props:any) => {

    let renderedFriend = props.friends.friendsArray.map((f: any) => <p>{f.name}</p>)
    return (
        <div className={classes.friends}><h4>Friends</h4>
            {renderedFriend}

        </div>
    )
}
export default Friends;