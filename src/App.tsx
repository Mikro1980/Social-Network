import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import store from "./redux/redux-store";
import DialogsContainer from "./Components/Messages/DialogsContainer";

import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props: any) => {

    return (
        // <BrowserRouter>
        <div className="App">
            <HeaderContainer/>
            <div className="mainCon">
                {/*<Sidebar friends={props.store.getState().sidebar}/>*/}
                <Sidebar friends={store.getState().sidebar}/>

                <Route path="/Content/:userId?" render={() =>
                    <Content
                        // @ts-ignore
                        profilePage={store.getState().profilePage}
                        dispatch={store.dispatch.bind(props.store)}
                        // @ts-ignore
                        store={store}
                    />}/>
                <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                <Route path="/Users" render={() => <UsersContainer/>}/>

            </div>
            <Footer/>
        </div>
        // </BrowserRouter>
    );
}

export default App;

