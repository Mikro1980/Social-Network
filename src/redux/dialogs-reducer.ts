import {ActionTypes, DialogsPageType} from "./state";


const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    if (action.type === ADD_DIALOG) {
        let newDialogMsg = {
            id: new Date().getTime(),
            msg: state.newDialog.trim()
        };
        if (newDialogMsg.msg) {
            state.messages.push(newDialogMsg);
            state.newDialog = ''
        } else return;
    } else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
        state.newDialog = action.newText;
        if (action.newText.length > 30) {
            return
        }
    }
    return state
}

const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

export const addDialogAC = () => {
    return {
        type: ADD_DIALOG
    } as const
}
export const updateNewDialogAC = (newText: string) => {
    return {
        type: UPDATE_NEW_DIALOG_TEXT,
        newText: newText
    } as const
}

export default dialogsReducer;