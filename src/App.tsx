import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Messages/Dialogs";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import {StoreType} from "./redux/state";

type AppProps = {
    store: StoreType
}

const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="mainCon">
                    <Sidebar friends={props.store.getState().sidebar}/>

                    <Route path="/Content" render={() =>
                        <Content profilePage={props.store.getState().profilePage}
                                 dispatch={props.store.dispatch.bind(props.store)}


                        />}/>
                    <Route path="/Dialogs" render={() =>
                        <Dialogs
                            dialogsPage={props.store.getState().dialogsPage}
                            dispatch={props.store.dispatch.bind(props.store)}//если не сделать bind, this._state... будет undefined
                            // before dispatch
                            // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                            // addPost={props.store.addPost.bind(props.store)}
                        />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

