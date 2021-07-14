import {ProfilePageType} from "./redux-store";


export type ActionTypes =
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addLikeAC>

let initialState = {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

    if (action.type === ADD_POST) {
        let newPostTxt = {
            id: new Date().getTime(),
            src: 'https://citaty.info/files/characters/636.jpg',
            message: state.newPost.trim(),
            likes: 0
        }
        if (newPostTxt.message) {
            state.posts.push(newPostTxt);
            state.newPost = ''
        } else return;
    } else if (action.type === UPDATE_POST_TEXT) {
        state.newPost = action.newText;
        if (action.newText.length > 30) {
            return
        }
        return state
    } else if (action.type === ADD_LIKE) {
        let clickedPost = state.posts.filter(el => el.id === action.id);
        clickedPost[0].likes = clickedPost[0].likes + 1
    }
    return state

}

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
export default profileReducer;