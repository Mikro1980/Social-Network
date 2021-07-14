import { DialogsPageType} from "./redux-store";

let initialState = {
    dialogs: [
        {id: 1, name: "Mikhail"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Berill"},
    ],
    messages: [
        {id: 1, msg: 'HI'},
        {id: 2, msg: "Hello!"},
        {id: 3, msg: "Hola!"}
    ],
    newDialog: ''
}
const dialogsReducer = (state: DialogsPageType=initialState, action: ActionTypes) => {
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
export type ActionTypes =
    ReturnType<typeof addDialogAC> | ReturnType<typeof updateNewDialogAC> |
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addLikeAC>

const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const addLikeAC = (id: number) => {
    return {
        type: ADD_LIKE,
        id: id
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}
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