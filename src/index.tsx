import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/state'
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
       <BrowserRouter>
            <App store={store} />
       </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
