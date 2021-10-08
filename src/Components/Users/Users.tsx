import React from "react";
import classes from "./Users.module.css"
import {NewUsersType, UsersType} from "../../redux/redux-store";
import axios from "axios";
import * as faker from "faker";


type UserPropsType = {
    users: Array<UsersType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

class UsersC extends React.Component<any, any> {

    constructor(props: UserPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            props.setUsers(response.data.items)
        });


    }

    render() {

        return (
            <div className={classes.mainCon}>
                <div className={classes.dialogsLeft}>
                    {this.props.users.map((el:UsersType) =>
                        <div key={el.id}>
                            <div className={classes.box}>
                                <div className={classes.avaSec}>
<span>{el.name}
    <div>
                        <img className={classes.ava} src={faker.image.avatar()} alt="ava"/></div>
                        <div>
                            {el.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(el.id)
                                }}>Follow me</button> :
                                <button onClick={() => {
                                    this.props.follow(el.id)
                                }}>Unfollow</button>
                            }
                        </div>
                    </span>
                                </div>
                                <span>{el.status}</span>
                                <span className={classes.location}>{'Russia'} {'Moscow'}</span>

                            </div>
                        </div>)
                    }
                </div>
            </div>

        )
    }
}
export default UsersC;
