import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // return (
    //     <div>
    //      {
    //          names.map((name) => <h1>{name}</h1>)
    //      }   
    //     </div>
    // )

    // const names = ['Bruce', 'Clark', 'Diana']
    // const namesList = names.map((name) => <h1>{name}</h1>)
    // return (
    //     <div>
    //      { namesList }   
    //     </div>
    // )

    // const persons = [{id: 1, name: 'Bruce', heroName: 'Batman'}, {id: 2, name: 'Clark', heroName: 'Superman'}, { id: 3, name: 'Diana', heroName: 'WonderWoman'}]
    // const personsList = persons.map((person) => <h1 key={person.id}>{person.name}</h1>)
    //     return (
    //         <div>
    //         { personsList }   
    //         </div>
    //     )

    const persons = [{id: 1, name: 'Bruce', heroName: 'Batman'}, {id: 2, name: 'Clark', heroName: 'Superman'}, { id: 3, name: 'Diana', heroName: 'WonderWoman'}]
    const personsList = persons.map((person) => <Person key={person.id} person={person}></Person>)
        return (
            <div>
            { personsList }   
            </div>
        )
}

export default NameList
