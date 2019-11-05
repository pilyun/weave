import React, {Component} from 'react';
import './App.css';
import './reset.css';
import Information from "./components/Information";
import Login from "./components/Login";


function home(e) {
  // e.preventDefault();
  window.location = './main.js';
}

  class App extends Component{
    render(){
      return(
        <div className="App">
        <Information></Information>
        <Login></Login>
        <label className="test" onClick={home}>Home</label>
        </div> ///App///
      )
    }
  }
   


export default App;
