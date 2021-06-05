import React, {useState} from 'react';
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
import {RootStateType} from "./redux/state";

type AppProps =  {
    state: RootStateType
}



const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="mainCon">
                    <Sidebar friends={props.state.sidebar}/>

                    <Route path="/Content" render={() => <Content profilePage={props.state.profilePage}/>}/>
                    <Route path="/Dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
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
