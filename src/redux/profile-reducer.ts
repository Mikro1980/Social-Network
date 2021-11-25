import {ProfilePageType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";


export type ActionTypes =
    ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addLikeAC> | ReturnType<typeof setUserProfileAC> | ReturnType<typeof getUserStatusAC>

let initialState = {
    posts: [
        {
            id: 1,
            src: 'https://w7.pngwing.com/pngs/1001/371/png-transparent-nelson-muntz-barney-gumble-bart-simpson-edna-krabappel-bullying-bart-simpson-springfield-vertebrate-smiley.png',
            message: 'Haa Haa!',
            likes: 999
        },
        {
            id: 2,
            src: 'https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjYwNjE0LmFwcDc0Nzc3M19zY3JlZW5fMl8xNTE5MzM3ODAwXzA3MA/screen-2.jpg?fakeurl=1&type=.jpg',
            message: 'Hey, caramba!',
            likes: 56
        },
        {
            id: 3,
            src: 'data:image/jpeg;base64,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',
            message: 'Hello!',
            likes: 0
        },
        {
            id: 4,
            src: 'https://citaty.info/files/characters/636.jpg',
            message: 'Mmmmm...!',
            likes: 0
        },
    ],
    newPost: '',
    profile: null,
    status: ''
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
            return {
                ...state,
                posts: [newPostTxt, ...state.posts],
                newPost: ''
            }
            // stateCopy.posts.push(newPostTxt);
            // stateCopy.newPost = ''
        } else return state;
    } else if (action.type === UPDATE_POST_TEXT) {

        return {
            ...state,
            newPost: action.newText
        }
    } else if (action.type === ADD_LIKE) {
        let copyState = {...state}
        let clickedPost = copyState.posts.filter(el => el.id === action.id);
        clickedPost[0].likes = clickedPost[0].likes + 1

    } else if (action.type === SET_USER_PROFILE) {

        return {...state, profile: action.profile}

    } else if (action.type === SET_STATUS) {
        return {...state, status: action.status}
    }

    return state
}

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


export const setUserProfileAC = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
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
export const getUserStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const getUserIdThunk = (userId: any) => (dispatch: any) =>
    usersAPI.getUserId(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    });
export const getUserStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(getUserStatusAC(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getUserStatusAC(status))
        }
    })
}

export default profileReducer;