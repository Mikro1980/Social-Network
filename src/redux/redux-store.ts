import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer, {ActionTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

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
export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: Array<number>

}
export type NewUsersType = {
    users: Array<UsersType>
}
export type UsersType = {
    photos: string;
    id: number
    followed: boolean
    src: string
    name: string
    status: string
    // location: { country: string, city: string }

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
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store: Store<AppStateType> = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;
export default store;
