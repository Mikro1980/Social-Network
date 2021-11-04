import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    AppStateType,
    PostType, ProfilePageType, StoreType, UsersType
} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/dialogs-reducer";
import PostsContainer from "../Posts/PostsContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type ProfilePropsType = {
    profilePage: ProfilePageType
    store: StoreType
    dispatch: (type: ActionTypes) => void
    profile: any
}

class ProfileContainer extends React.Component<any, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        usersAPI.getUserId(userId).then(response => {
                this.props.setUserProfileAC(response.data);
            });
    }

    render() {
        // @ts-ignore
        return <Profile
            {...this.props} profile={this.props.profile}
            // profilePage={this.props.profilePage}
            //             store={this.props.store}
            //             dispatch={this.props.dispatch}
            //             profile={this.props.profile}
        />
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})
let withURLDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfileAC})(withURLDataContainerComponent);