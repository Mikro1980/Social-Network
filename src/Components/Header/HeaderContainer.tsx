import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import { usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        usersAPI.loginMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDataAC(id,email,login)
                }
            });
    }

    render() {
        // @ts-ignore
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => (
    {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
)
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);