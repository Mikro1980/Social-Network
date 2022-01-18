import React from "react";
import {Field} from "redux-form";
import {requiredField} from "../Validators";

const LoginForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'email'}
                   style={{marginBottom: '5px'}}
                   component={'input'}
                   name={'email'}

            />
            <Field placeholder={'password'}
                   type={'password'}
                   style={{display: 'block', marginBottom: '5px'}}
                   component={'input'}
                   name={'password'}/>
            <div><Field type={'checkbox'}
                        component={'input'}
                        name={'RememberMe'}/>
                Remember me
            </div>
            <button>Log in</button>


        </form>
    )

}
export default LoginForm;