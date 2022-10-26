import React from 'react'
import './LowerPart.css';
const LowerPart = (props) => {
    function deleted(event)
    {
        
        props.ondelete(event.target.getAttribute('id'));
    }
  return (
    <div className="lower">
      {props.first.map( (currElement) => {
        return (
         <ul>
            <li className="unique" id ={currElement.id} onClick={deleted}>{currElement.text}</li>
         </ul>
        )
      })}
    </div>
  )
}

export default LowerPart;
