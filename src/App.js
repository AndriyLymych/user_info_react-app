import React from 'react';
import './App.css';
import routes from "./router/routes";
import Header from "./Components/basic/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            {routes()}
        </div>
    )
}

export default App;
