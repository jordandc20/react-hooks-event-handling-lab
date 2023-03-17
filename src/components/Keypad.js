import React from "react"

function Keypad (){

    function handleChange(){
console.log("Entering password...")

    }

    return (
        <div>
            <input type="password" name="password" placeholder="Enter here..." onChange={handleChange}/>
        </div>
    )
}

export default Keypad;