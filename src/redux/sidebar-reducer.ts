import {sidebarType} from "./redux-store";
import {ActionTypes} from "./dialogs-reducer";

let initialState = {friendsArray: [
    {id: 1, name: "John"},
    {id: 2, name: "Nick"},
    {id: 3, name: "Max"},
    {id: 4, name: "Dick"},

]}
const sidebarReducer = (state: sidebarType=initialState, action: ActionTypes) => {
    return state
}
export default sidebarReducer;