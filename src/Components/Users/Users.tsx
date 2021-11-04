import React from "react";
import classes from "./Users.module.css"
import {NewUsersType, UsersType} from "../../redux/redux-store";
import axios from "axios";
import * as faker from "faker";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {toggleFollowInProgress} from "../../redux/users-reducer";


type UserPropsType = {
    users: Array<UsersType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //Math.ceil округляет в большую сторону// const addedPage = (num: number) => {
    let pages = []
    for (let i = 1; i <= 10; i++) {
        // for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={classes.mainCon}>
            <div>
                {pages.map(el => {
                    return <span
                        onClick={(e) => {
                            props.onPageChanged(el)
                        }
                        }
                        className={props.currentPage === el ? classes.selectedPage : classes.pageNum}>{el}</span>
                })}
                <span onClick={() => alert('next')}>...</span>
            </div>
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
            src={el.photos.small ? `${el.photos.small}` : faker.image.avatar()}
            // src={`${el.photos.small}`}
            alt="ava"/>
    </NavLink>


    </div>
                        <div>
                            {el.followed ?
                                <button
                                    disabled={props.followInProgress.some((id:number)=>id===el.id)}
                                    onClick={() => {
                                        props.toggleFollowInProgress(true,el.id)
                                        usersAPI.unFollowUser(el.id).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(el.id)
                                            }
                                            props.toggleFollowInProgress(false,el.id)
                                        })
                                    }}>Follow</button> :
                                <button
                                    disabled={props.followInProgress.some((id:number)=>id===el.id)}
                                    onClick={() => {
                                        props.toggleFollowInProgress(true,el.id)
                                        usersAPI.followUser(el.id).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(el.id)
                                            }
                                            props.toggleFollowInProgress(false,el.id)
                                        })
                                    }}>Unfollow</button>}
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


export default Users;
