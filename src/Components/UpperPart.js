import React,{useState} from 'react'
import './UpperPart.css';
import LowerPart from './LowerPart';
const UpperPart = (props) => {
    const[val,setval]=useState("");
    function changeHandler(event)
    {
        setval(event.target.value);
    }
    function updateHandler(event)
    {
        event.preventDefault();
        const newarr=[
            {
                id:Math.random(),
                text:val
            }
        ];
        props.func(newarr);
        setval("");
       
    }
  return (
        <div className="card container" >
            <form onSubmit={updateHandler} >
            <div>
                <h1>Course goal</h1>
                <input type="text" onChange={changeHandler} value={val} className="input"></input>
            </div>
            <div>
                <button className='button' type="submit">Add Goal</button>
            </div>
            </form>
        </div>
  )
}

export default UpperPart
