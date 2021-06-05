import React, {useState} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import {DialogsPageType} from "../../redux/state";

type DialogProps = {
    dialogsPage: DialogsPageType
}
const Dialogs = (props: DialogProps) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        props.dialogsPage.addPost()
        props.dialogsPage.updateNewPostText('');

    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            props.dialogsPage.updateNewPostText(text);
        }
    }
    let renderedPerson = props.dialogsPage.dialogs.map((p: any) => (

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
                {props.dialogsPage.messages.map((d: any) => ( // тут используем МАР напрямую, без переменной
                    <div className={classes.myDialog}>{d.msg}</div>
                ))}
                <textarea ref={newPostElement}
                          value={props.dialogsPage.newPostText}
                          onChange={onPostChange}
                ></textarea>
                <button onClick={addPost}>send</button>
            </div>
        </div>
    )
}
export default Dialogs;