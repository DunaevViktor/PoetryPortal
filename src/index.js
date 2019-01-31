import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Task 2 */
/* Возможно конструкция не работала т.к. первый параметр 
в ReactDOM.render это элемент, а наш элемент функция,
изменив Block на Block() у меня заработало */

const Block = function () {
    return <div> Ky! </div>
}

ReactDOM.render(
    Block(),
    document.querySelector('#root')
)

/* Task 3 */

const styleObj = {
    background: 'red',
    color:'black', 
    fontFamily:'Lobster'
};

const myClassName = "biba";

const Hack = function () {
    const a = "Hackerman";
    return a;
}

ReactDOM.render(
    <div className={myClassName}>
        <label htmlFor="input" type="text"/>
        <button style={styleObj}>Click me!</button>
        <button style={styleObj}>{Block()}</button>
        <button style={styleObj}>{Hack()}</button>
    </div>,
    document.querySelector('#test')
)
