import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import {
    DialogsPageType,
    MessageType,
    DialogType,

} from "../../redux/redux-store";
import {ActionTypes, addDialogAC, updateNewDialogAC} from "../../redux/dialogs-reducer";

type DialogProps = {
    addDialog: () => void
    changeDialog: (text: string) => void
    dialogsPage: DialogsPageType
    dialogs:any
    // value:any
    messages:any
}
const Dialogs = (props: DialogProps) => {
    let newDialogElement = React.createRef<HTMLTextAreaElement>();

    const addDialogHandler = () => {
        props.addDialog();
    }
    const onDialogChange = () => {
        if (newDialogElement.current) {
            let text = newDialogElement.current.value
            props.changeDialog(text)
        }
    }
    let onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === 'Enter') {
            addDialogHandler()
        } else return
    }


    console.log(props.dialogsPage.dialogs)
    let renderedPerson = props.dialogsPage.dialogs.map((p: any) => (

        <div key={p.id} className={classes.person}><DialogItem id={p.id} name={p.name}/></div>//см.коммент ниже
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
                    <div key={d.id} className={classes.myDialog}>{d.msg}</div>
                ))}
                <textarea ref={newDialogElement}
                          value={props.dialogsPage.newDialog}
                          onChange={onDialogChange}
                          onKeyPress={onKeyPressHandler}
                />
                <button onClick={addDialogHandler}>send</button>
            </div>
        </div>
    )
}
export default Dialogs;