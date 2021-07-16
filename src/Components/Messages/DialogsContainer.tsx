import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import {
    DialogsPageType,
    MessageType,
    DialogType, StoreType,

} from "../../redux/redux-store";
import {ActionTypes, addDialogAC, updateNewDialogAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogContainerProps = {
    store: StoreType
}
const DialogsContainer = (props: DialogContainerProps) => {
    const addDialogHandler = () => {
        props.store.dispatch(addDialogAC())
    }
    const onDialogChange = (text:any) => {
        props.store.dispatch(updateNewDialogAC(text))
        }

    let dialogs = props.store.getState().dialogsPage.dialogs
    return (
        <Dialogs
            addDialog={addDialogHandler}
            changeDialog={onDialogChange}
            dialogs={dialogs}
            value={props.store.getState().dialogsPage.newDialog}
            messages={props.store.getState().dialogsPage.messages}

        />

    )
}
export default DialogsContainer;