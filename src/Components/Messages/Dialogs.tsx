import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import {DialogsPageType, updateNewPostText, addPost} from "../../redux/state";

type DialogProps = {
    dialogsPage: DialogsPageType
}
const Dialogs = (props: DialogProps) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPostHandle = () => {
        addPost()
        updateNewPostText('');

    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            updateNewPostText(text);
        }
    }
    let onKeyPressHandler = (e:React.KeyboardEvent<HTMLTextAreaElement>) =>{
        if(e.charCode===13){
            addPostHandle()
        }
      else return
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
                          onKeyPress={onKeyPressHandler}
                />
                <button onClick={addPostHandle}>send</button>
            </div>
        </div>
    )
}
export default Dialogs;