import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Menu } from "./pages";

export default class App extends React.Component{
    render(){
        return(
            <div><Menu /> </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))