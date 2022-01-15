import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import {
    DialogsPageType,
    MessageType,
} from "../../redux/redux-store";
import {AddMessageFormRedux} from "../InputForm/addMessageForm";

type DialogProps = {
    addDialog: (text: string) => void
    changeDialog: (text: string) => void
    dialogsPage: DialogsPageType
    dialogs: any
    messages: any
    isAuth: boolean
}
const Dialogs = (props: DialogProps) => {

    let onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.code === 'Enter') {
            // addDialogHandler()
        } else return
    }

    const addNewMessage = (value: any) => {
        props.addDialog(value.newMessageBody);
    }
    let renderedPerson = props.dialogsPage.dialogs.map((p: any) => (

        <div key={p.id} className={classes.person}><DialogItem id={p.id}
                                                               name={p.name}/>
        </div>//см.коммент ниже
    ));
    console.log(props.isAuth)

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}
export default Dialogs;