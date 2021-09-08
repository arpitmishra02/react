import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetParent('child1')}>GREET</button>
        </div>
    )
}

export default ChildComponent
