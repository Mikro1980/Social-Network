import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer, {ActionTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType

}
export type sidebarType = {
    friendsArray: Array<SidebarType>
}
export type SidebarType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newDialog: string

}
export type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}
export type PostType = {
    id: number
    src: string
    message: string
    likes: number

}
export type DialogType = {

    id: number
    name: string
}
export type MessageType = {
    id: number
    msg: string
}
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store:StoreType = createStore(reducers)

export default store;
