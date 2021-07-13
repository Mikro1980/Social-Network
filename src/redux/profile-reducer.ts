import {ProfilePageType} from "./state";


export type ActionTypes =

    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addLikeAC>

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

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