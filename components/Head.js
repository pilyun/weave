import React from 'react';
import './main.css';
import './reset.css';

function Head() {
    render(){
        console.log('Head render');
        return(
            <header>
                <div className="top">
                    <img src="img/logo_w.png" alt="로고"></img>
                </div>
            </header>
        );
    }///render///
}///Head///

export default Head;