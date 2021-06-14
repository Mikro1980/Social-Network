import {renderEntireTree} from "../render";

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

    newPostText:string

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:sidebarType

}
export type sidebarType = {
    friendsArray: Array<SidebarType>
}

let state: RootStateType = {
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
            {id: 3, msg: "Hasta la vista!"}
        ],
        newPostText:''

    },
    sidebar: {
        friendsArray: [
            {id: 1, name: "John"},
            {id: 2, name: "Nick"},
            {id: 3, name: "Dick"},
            {id: 4, name: "Rick"},

        ]
    }

}
export const addPost = () =>
{let newPost={id:new Date().getTime(), msg:state.dialogsPage.newPostText};state.dialogsPage.messages.push(newPost);
    renderEntireTree(state)
}
export let updateNewPostText = (newText:string) =>{
    state.dialogsPage.newPostText = newText
    renderEntireTree(state)
}
export default state;