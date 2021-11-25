import React, {useState} from "react";
import classes from "./Users.module.css"
import {UsersType} from "../../redux/redux-store";
import * as faker from "faker";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UserPropsType = {
    users: Array<UsersType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users = (props: any) => {
    console.log(props.currentPage)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //Math.ceil округляет в большую сторону// const addedPage = (num: number) => {
    let initialPages: Array<number> = []
    for (let i = props.currentPage; i <= props.currentPage + 9; i++) {
        // for (let i = 1; i <= pagesCount; i++) {
        initialPages.push(i)
    }
    const [pages, setPages] = useState(initialPages)

    const nextPages = (arr: any) => {
        setPages(arr.map((el: number) => el + 1))
    }
    const prevPages = (arr: any) => {

        setPages(arr.map((el: number) => el - 1))
    }
    return (
        <div className={classes.mainCon}>
            <div>
                {pages[9] - 10 > 0 && <span onClick={() => prevPages(pages)}>...</span>}
                {pages.map(el => {
                    return <span key={Math.random()}
                                 onClick={(e) => {
                                     props.onPageChanged(el)
                                 }}
                                 className={props.currentPage === el ? classes.selectedPage : classes.pageNum}>
                        {el}</span>
                })}
                <span onClick={() => nextPages(pages)}>...</span>
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
                            <span className={classes.location}>Russia Moscow</span>

                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}


export default Users;
