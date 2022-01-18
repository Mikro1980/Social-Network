import React from "react";
import {reduxForm,Field} from "redux-form";
import {maxLengthX, requiredField} from "../Validators";
import {TextArea} from "../Preloader/textArea";

const maxLength30 = maxLengthX(10)
export const AddMessageForm = (props: any) => {
    return (<form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name='newMessageBody'
                   placeholder='Type here'
            validate = {[requiredField,maxLength30]}
            />
            <button
                style={{
                background: '#2a9d8f', width: '80px', color: 'white'
            }}>send</button>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)