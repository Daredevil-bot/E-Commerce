import React from "react";
import TypeWriter from 'typewriter-effect'



const Jumbotron = ({text}) => {
  return (
    <div>
        <TypeWriter
         options={{
             strings:text,
             autoStart:true,
             loop:true
         }}
        />
    </div>
  )
}

export default Jumbotron