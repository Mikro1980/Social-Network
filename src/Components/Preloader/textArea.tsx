import classes from "./FormsControl.module.css";

export const TextArea = ({input, meta, ...props}: any) => {
    const showError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (showError?classes.error:'')}>
            <textarea {...input}{...props}/>
            {showError && <span>{meta.error}</span>}
        </div>
    )


}