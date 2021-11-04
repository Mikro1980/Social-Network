import {NewUsersType, UsersPageType, UsersType} from "./redux-store";


export type ActionTypes =
    ReturnType<typeof setAuthUserDataAC>

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}
type initialStateType = {
    userId: any
    email: any
    login: any
    isAuth: boolean
}

export const authReducer = (state: initialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state;
    }
}

const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserDataAC = (userId:number, email:string, login:string) => {
    return {
        type: SET_USER_DATA,
        data:{
            userId,
            email,
            login
        }
    } as const
}
export default authReducer;