import React from "react"

function EyesOnMe (){

function handleFocus(e){
    e.type==='focus'? console.log('Good!') : console.log("Hey! Eyes on me!")
}


    return (
        <div>
           <button onFocus={handleFocus} onBlur={handleFocus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;// Code EyesOnMe Component Here
