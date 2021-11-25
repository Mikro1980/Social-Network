import React from "react";
import {Redirect} from "react-router-dom";
import Login from "../Components/Login/Login";

export const LoginHoc = (WrappedComponent: any) => {
    return (props: any) => {
        // if(!props.isAuth) return <Login/>
        if(!props.isAuth) return <Redirect to={'/Login'}/>
        else return <><WrappedComponent {...props}/></>

    }
}