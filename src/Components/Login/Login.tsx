import React from "react";
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {signMeIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        
        props.signMeIn(
            formData.email,
            formData.password,
            formData.rememberMe)

    }
    if (props.isAuth) {
        return <Redirect to={"/content"}/>
    }
    return (
        <div style={{width: '80%', paddingLeft: '10px'}}>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signMeIn})(Login);