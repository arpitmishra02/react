import React from 'react'

// function Greet() {
//     return  <h1>Hello User from functional component</h1>
// }

// const Greet = () => <h1>Hello User from functional component</h1>

// export default Greet

// export const Greet = () => <h1>Hello User from functional component</h1>

export const Greet = (props) => {
    console.log(props);
    return (
        <>
        <h1>Hello {props.name} a.k.a {props.heroName} from functional component</h1>
        {props.children}
        </>
    )
} 

