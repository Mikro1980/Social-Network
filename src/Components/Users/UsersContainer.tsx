import React from "react";
import {connect, MapStateToProps} from "react-redux";
import {AppStateType, DialogsPageType, NewUsersType, UsersPageType, UsersType} from "../../redux/redux-store";
import {
    changePage,
    follow, toggleFollowInProgress,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/preloader";
import {usersAPI} from "../../api/api";
import {match} from "react-router-dom";

class UsersAPIComponent extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber)
        this.props.changePage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <>{this.props.isFetching ? <Preloader/> :
            <Users
                {...this.props}
                onPageChanged={this.onPageChanged}
                // totalUsersCount={this.props.totalUsersCount}
                // pageSize={this.props.pageSize}
                // currentPage={this.props.currentPage}
                // users={this.props.users}
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
            />}
        </>
    }
}

type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: Array<number>
}
// type MapDispatchToPropsType = {
//     follow: (id: number) => void
//     unfollow: (id: number) => void
//     setUsers: (users: Array<UsersType>) => void
//     changePage: (page: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

type UserPropsType = {
    users: Array<UsersType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress

    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         changePage: (page: number) => {
//             dispatch(changePageAC(page))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// MDTP записали в виде объекта с современным синтаксисом, в user-reducer заменил Action Creators на обычные свойста (без "АС"), в UsersContainer заменили импорты. MDTP закоментирован
export default connect(mapStateToProps,
    {
        changePage,
        follow,
        unfollow,
        setUsers,
        setUsersCount,
        toggleIsFetching,
        toggleFollowInProgress
    })(UsersAPIComponent);
