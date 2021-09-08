import React from 'react'

// function Person(props) {
//     const {person} = props
//     return (
//         <div>
//             <h1>I am {person.name} a.k.a {person.heroName}!</h1>
//         </div>
//     )
// }

function Person({person}) {
    return (
        <div>
            <h1>I am {person.name} a.k.a {person.heroName}!</h1>
        </div>
    )
}


export default Person
