import {useState} from "react";

export const ProfileStatus = (props: any) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>('some status')
    const localStatusHandler = (e:any) =>{
        setLocalStatus(e.currentTarget.value)
        setEditMode(false)
    }
    return (
        <div>
            {!editMode ?
                <span
                    onDoubleClick={() => setEditMode(true)}>{props.status || localStatus}</span>
                : <input
                    onBlur={localStatusHandler}
                    autoFocus
                />}
        </div>
    )
}

// import React, {useState} from "react";
//
// export class ProfileStatus extends React.Component<any, any> {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//
//     }
//     toggleEditMode = () => {
//
//         this.setState({...this.state, editMode: !this.state.editMode});
//         this.props.updateStatus(this.state.status)
//
//     }
//     setStatus = (e: any) => {
//         this.setState({...this.state, status: e.currentTarget.value})
//     }
//
//     componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         return (<div>
//             {this.state.editMode && (<div><input
//                 onDoubleClick={this.toggleEditMode}
//                 onChange={this.setStatus}
//                 autoFocus={true}
//                 onKeyPress={(e) => {
//                     if (e.charCode === 13) {
//                         this.toggleEditMode()
//                     }
//                 }}
//             />
//                 <button style={{
//                     background: '#2a9d8f', width: '80px', color: 'white'
//                 }}
//                         onClick={this.toggleEditMode}>Submit
//                 </button>
//             </div>)}
//             {!this.state.editMode && <div onDoubleClick={this.toggleEditMode}> {this.state.status || 'No status'}</div>}
//
//         </div>)
//     }
//
// }