export type StoreType = {
    _state: RootStateType
    _onChange: () => void
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
export type  ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newPostText: string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType

}
export type sidebarType = {
    friendsArray: Array<SidebarType>
}
// type AddPostActionType = {
//     type: 'ADD-POST'
// }
// type AddPostActionType = ReturnType<typeof addPostAC>
// type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
// type UpdateNewPostActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
export type ActionTypes =
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
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

            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Mikhail"},
                {id: 2, name: "Ivan"},
                {id: 3, name: "Kirill"},
                {id: 4, name: "Zirill"},
            ],
            messages: [
                {id: 1, msg: 'HI'},
                {id: 2, msg: "Hello!"},
                {id: 3, msg: "Hola!"}
            ],
            newPostText: ''

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
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {


        switch (action.type) {
            case ADD_POST: //вынесли в переменную
                let newPost = {
                    id: new Date().getTime(),
                    msg: this._state.dialogsPage.newPostText.trim()
                };
                if (newPost.msg) {
                    this._state.dialogsPage.messages.push(newPost);
                    this._onChange();
                    this._state.dialogsPage.newPostText = ''
                } else return;
                break
            case UPDATE_NEW_POST_TEXT://вынесли в переменную
                this._state.dialogsPage.newPostText = action.newText;
                if (action.newText.length > 100) {
                    return
                }
                store._onChange()
                break

        }
    }
}

export default store;