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

class UsersAPIComponent extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=
        ${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    onPageChanged = (pageNumber:number) => {
        this.props.changePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) //Math.ceil округляет в большую сторону// const addedPage = (num: number) => {
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={classes.mainCon}>
                <div>
                    {pages.map(el => {
                        return <span
                            onClick={(e)=>{this.onPageChanged(el)
                           }
                            }
                            className={this.props.currentPage === el ? classes.selectedPage : classes.pageNum}>{el}</span>
                    })}
                </div>
                <div className={classes.dialogsLeft}>
                    {this.props.users.map((el: UsersType) =>
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
                                }}>Follow</button> :
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

export default UsersAPIComponent;
