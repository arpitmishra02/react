import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Click from Functional Component");
    }

    return (
        <div>
            {/* <button onClick={clickHandler()}>Click from Functional Component</button> */}

            <button onClick={clickHandler}>Click from Functional Component</button>
        </div>
    )
}
export default FunctionClick 