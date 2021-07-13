import profileReducer, {addLikeAC, addPostAC, updateNewPostAC} from "./profile-reducer";
import dialogsReducer, {addDialogAC, updateNewDialogAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}
export type MessageType = {
    id: number
    msg: string
}
export type DialogType = {

    id: number
    name: string
}
export type PostType = {
    id: number
    src: string
    message: string
    likes: number

}
export type SidebarType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPost: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newDialog: string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType

}
export type sidebarType = {
    friendsArray: Array<SidebarType>
}
export type ActionTypes =
    ReturnType<typeof addDialogAC> | ReturnType<typeof updateNewDialogAC> |
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addLikeAC>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    src: 'https://w7.pngwing.com/pngs/1001/371/png-transparent-nelson-muntz-barney-gumble-bart-simpson-edna-krabappel-bullying-bart-simpson-springfield-vertebrate-smiley.png',
                    message: 'Haa Haa!',
                    likes: 0
                },
                {
                    id: 2,
                    src: 'https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDc0Nzc3M19zY3JlZW5fMl8xNTE5MzM3ODAwXzA3MA/screen-2.jpg?fakeurl=1&type=.jpg',
                    message: 'Hey, caramba!',
                    likes: 56
                },
                {
                    id: 3,
                    src: 'https://giantbomb1.cbsistatic.com/uploads/square_small/0/5201/229734-ralphnose.jpg',
                    message: 'Hello!',
                    likes: 0
                }, {
                    id: 4,
                    src: 'https://citaty.info/files/characters/636.jpg',
                    message: 'Mmmmm...!',
                    likes: 0
                },

            ], newPost: ''
        },
        dialogsPage: {
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

        },
        sidebar: {
            friendsArray: [
                {id: 1, name: "John"},
                {id: 2, name: "Nick"},
                {id: 3, name: "Max"},
                {id: 4, name: "Rick"},

            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action);//исправить, чтобы работало без ts-ignore
        // @ts-ignore
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);//исправить, чтобы работало без ts-ignore
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        store._callSubscriber()

    }
}

export default store;