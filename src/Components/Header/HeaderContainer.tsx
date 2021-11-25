import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {loginThunkCreator, logout, setAuthUserDataAC} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.loginThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)
export default connect(mapStateToProps, {setAuthUserDataAC, loginThunkCreator, logout})(HeaderContainer);