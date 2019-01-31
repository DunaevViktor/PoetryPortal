import React from 'react';
import ReactDOM from 'react-dom';

const Block = function () {
    return <div>Ky!</div>
}

/*class Block extends React.Component {
    render() {
     return <div>Ky!</div>
    }
}*/

ReactDOM.render(
    Block,
    document.querySelector('#root')
)
