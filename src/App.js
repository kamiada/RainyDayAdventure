import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Menu } from "./pages";

class App extends React.Component{
    render(){
        return(
            <Menu />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))