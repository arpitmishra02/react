import React from "react";

const Hello = () => {
    return (
        <div id ='hello' className = 'dummyClass'>
        <h1>Hello User Using JSX SYNTAX</h1>
        </div>
    )  
}

// const Hello = () => {
//     return (
//       React.createElement('div',
//       {id: 'hello', className: 'dummyClass'},
//       React.createElement('h1', null, 'Hello User without JSX'))
//     )  
// }

export default Hello