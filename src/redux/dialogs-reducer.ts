import {DialogsPageType} from "./redux-store";

let initialState = {
    dialogs: [
        {id: 1, name: "Mihahail"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Kirill"},
        {id: 4, name: "Max"},
    ],
    messages: [
        {id: 1, msg: 'HI'},
        {id: 2, msg: "Hello!"},
        {id: 3, msg: "Hola!"}
    ]
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    if (action.type === ADD_DIALOG) {
        let newDialogMsg = {
            id: new Date().getTime(),
            msg: action.text.trim(),
        }
        if (newDialogMsg.msg) {
            return {
                ...state,
                messages: [...state.messages, newDialogMsg],
            }
        } else return state;
    }
    return state
}
export type ActionTypes =
    ReturnType<typeof addDialogAC> |
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addLikeAC>

const ADD_DIALOG = 'ADD-DIALOG';
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
export const addDialogAC = (text: string) => {
    return {
        type: ADD_DIALOG,
        text
    } as const
}

export default dialogsReducer;