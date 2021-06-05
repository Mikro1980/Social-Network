import React from "react";
import classes from "./Friends.module.css";
import {SidebarType} from "../../redux/state";

// type FriendsPropsType = {
//     friendsArray:SidebarType
// }
const Friends = (props:any) => {

    let renderedFriend = props.friends.friendsArray.map((f: any) => <a>{f.name}</a>)
    return (
        <div className={classes.friends}><h4>Friends</h4>
            {renderedFriend}

        </div>
    )
}
export default Friends;