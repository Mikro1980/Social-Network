import React from "react";
import {ProfilePageType, StoreType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/dialogs-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserIdThunk, getUserStatus, setUserProfileAC, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {LoginHoc} from "../../hoc/hoc";

type ProfilePropsType = {
    profilePage: ProfilePageType
    store: StoreType
    dispatch: (type: ActionTypes) => void
    profile: any
}

class ProfileContainer extends React.Component<any, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserIdThunk(userId)
        this.props.getUserStatus(userId)
        // usersAPI.getUserId(userId).then(response => {
        //         this.props.setUserProfileAC(response.data);
        //     });
    }

    render() {
        // @ts-ignore
        return <Profile
            {...this.props} profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            // profilePage={this.props.profilePage}
            //             store={this.props.store}
            //             dispatch={this.props.dispatch}
            //             profile={this.props.profile}
        />
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
})
let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserIdThunk, getUserStatus, updateStatus})(withURLDataContainerComponent);
