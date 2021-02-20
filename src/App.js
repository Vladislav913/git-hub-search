import React from "react";
import HistoryPage from "./component/History/History";
import { Route, Switch} from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/history'>
                    <HistoryPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
