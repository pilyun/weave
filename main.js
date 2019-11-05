import React from 'react';
import Head from "./components/Head";
import './main.css';
import './reset.css';

function Main() {
    render(){
        console.log('Main render');
        return(
            <Head></Head>
            <article>
                {/* 그룹만들기 */}
                <div>

                </div>
            </article>
        );
    }///render///
}///Main///

export default Main;