import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state, {RootStateType, updateNewPostText} from './redux/state'

export let renderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
