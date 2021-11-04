import React from "react";
import {
    DialogsPageType,
    MessageType,
    DialogType, StoreType, RootStateType, AppStateType,

} from "../../redux/redux-store";
import {ActionTypes, addDialogAC, updateNewDialogAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    addDialog: () => void
    changeDialog: (text: string) => void
}
// export type OwnerProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addDialog: () => {
            dispatch(addDialogAC())
        },
        changeDialog: (text: string) => {
            dispatch(updateNewDialogAC(text))
        },
    }
}
const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, any, AppStateType>(
    mapStateToProps, mapDispatchToProps
)(Dialogs)

export default DialogsContainer;
