import React from "react";
import {reduxForm,Field} from "redux-form";

export const AddMessageForm = (props: any) => {
    return (<form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Type here'/>
            <button
                style={{
                background: '#2a9d8f', width: '80px', color: 'white'
            }}>send</button>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)