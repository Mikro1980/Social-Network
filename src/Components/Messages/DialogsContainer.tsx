import React from "react";
import {
    DialogsPageType, AppStateType

} from "../../redux/redux-store";
import {ActionTypes, addDialogAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {LoginHoc} from "../../hoc/hoc";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean

}
type MapDispatchToPropsType = {
    addDialog: (text: string) => void
    // changeDialog: (text: string) => void
}
// export type OwnerProps = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addDialog: (text: string) => {
            dispatch(addDialogAC(text))
        },
        // changeDialog: (text: string) => {
        //     dispatch(updateNewDialogAC(text))
        // }
        // ,
    }
}
const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, any, AppStateType>(
    mapStateToProps, mapDispatchToProps
)(LoginHoc(Dialogs))

export default DialogsContainer;
