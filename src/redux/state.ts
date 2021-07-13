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
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC>|
    ReturnType<typeof addLikeAC>

const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';

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
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const addLikeAC = (id:number) => {
    return {
        type: ADD_LIKE,
        id:id
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText
    } as const
}

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
        switch (action.type) {
            case ADD_DIALOG: //вынесли в переменную
                let newDialogMsg = {
                    id: new Date().getTime(),
                    msg: this._state.dialogsPage.newDialog.trim()
                };
                if (newDialogMsg.msg) {
                    this._state.dialogsPage.messages.push(newDialogMsg);
                    this._callSubscriber();
                    this._state.dialogsPage.newDialog = ''
                } else return;
                break
            case UPDATE_NEW_DIALOG_TEXT://вынесли в переменную
                this._state.dialogsPage.newDialog = action.newText;
                if (action.newText.length > 30) {
                    return
                }
                store._callSubscriber()
                break
            case ADD_POST:
                let newPostTxt = {
                    id: new Date().getTime(),
                    src: 'https://citaty.info/files/characters/636.jpg',
                    message: this._state.profilePage.newPost.trim(),
                    likes: 0
                }
                if (newPostTxt.message) {
                    this._state.profilePage.posts.push(newPostTxt);
                    this._callSubscriber();
                    this._state.profilePage.newPost = ''
                } else return;
                break
            case UPDATE_POST_TEXT://вынесли в переменную
                this._state.profilePage.newPost = action.newText;
                if (action.newText.length > 30) {
                    return
                }
                store._callSubscriber()
                break
            case ADD_LIKE:
                let clickedPost = this._state.profilePage.posts.filter(el=>el.id === action.id);
                clickedPost[0].likes +=1 // понять, почему [0]
                store._callSubscriber()
                break
        }
    }
}

export default store;