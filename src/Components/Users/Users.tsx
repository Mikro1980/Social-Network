import React, {useState} from "react";
import classes from "./Users.module.css"
import {UsersType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";

type UserPropsType = {
    users: Array<UsersType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users = (props: any) => {
    return (
        <div className={classes.mainCon}>
            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}

            />
            <div className={classes.dialogsLeft}>
                {props.users.map((el: UsersType) =>
                    <div key={el.id}>
                        <div className={classes.box}>
                            <div className={classes.avaSec}>
<span>{el.name}
    <div>
    <NavLink to={'/content/' + el.id}>

        <img
            className={classes.ava}
            src={el.photos.small ? `${el.photos.small}` : 'https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png'}
            alt="ava"/>
    </NavLink>

    </div>
                        <div>
                            {el.followed ?
                                <button
                                    disabled={props.followInProgress.some((id: number) => id === el.id)}
                                    onClick={() => {
                                        props.unFollowThunkCreator(el.id)
                                    }}>Follow</button> :
                                <button
                                    disabled={props.followInProgress.some((id: number) => id === el.id)}
                                    onClick={() => {
                                        props.followThunkCreator(el.id)
                                    }
                                    }>Unfollow</button>}
                        </div>
                    </span>
                            </div>
                            <span>{el.status}</span>
                            <span
                                className={classes.location}>Russia Moscow</span>

                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}


export default Users;
