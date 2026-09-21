import React from 'react'


function ClubCard(props) {
    let status;
    let buttontxt;
 
    if(props.joined === true){
    status = "Joined";
    buttontxt = "Leave"
   
    }
    else{
        status = "not Join";
        buttontxt = "Join"
    }



  return (
    <div>
     {props.name}
     
    </div>
  )
}

export default ClubCard