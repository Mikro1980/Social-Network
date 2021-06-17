import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import {
    DialogsPageType,
    MessageType,
    DialogType,
    ActionTypes, addPostAC, updateNewPostAC
} from "../../redux/state";

type DialogProps = {
    dialogsPage: DialogsPageType
    // updateNewPostText: (newText: string) => void
    // addPost:()=>void
    dispatch:(action:ActionTypes)=>void
}
const Dialogs = (props: DialogProps) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        // props.addPost()
        // props.dispatch({type:'ADD-POST'})
        props.dispatch(addPostAC())
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.updateNewPostText(text);
            // props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:text})
            props.dispatch(updateNewPostAC(text))
        }
    }
    let onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === 'Enter') {
            addPostHandler()
        } else return
    }
    let renderedPerson = props.dialogsPage.dialogs.map((p: DialogType) => (

        <div className={classes.person}><DialogItem id={p.id} name={p.name}/></div>//см.коммент ниже
    ));
    return (
        <div className={classes.mainCon}>
            <div className={classes.dialogsLeft}>
                {/*// если "div className={classes.person}" будет стоять здесь, то renderedPerson
                отрисуется три раза в одной дивке*/}
                {renderedPerson}
            </div>
            <div className={classes.dialogsRight}>
                {props.dialogsPage.messages.map((d: MessageType) => ( // тут используем МАР напрямую, без переменной
                    <div className={classes.myDialog}>{d.msg}</div>
                ))}
                <textarea ref={newPostElement}
                          value={props.dialogsPage.newPostText}
                          onChange={onPostChange}
                          onKeyPress={onKeyPressHandler}
                />
                <button onClick={addPostHandler}>send</button>
            </div>
        </div>
    )
}
export default Dialogs;