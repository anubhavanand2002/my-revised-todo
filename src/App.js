import React,{useState} from 'react';
import UpperPart from './Components/UpperPart';
import LowerPart from './Components/LowerPart';
import './App.css';
function App() {
  const array=[
    {
        id:1,
        "text":"Do all Exercise"
    },
    {
        id:2,
        "text":"Finish"
    }
];
  const[initial,setinitial]=useState(array);
  
  function pass(newmade)
  {
    setinitial((previnitial)=>{
      return(
         [...previnitial,...newmade]
      )
    });
  }
  function addDelete(check)
  {
    setinitial(
      initial.filter((current)=>current.id!=check)
    )
  }
  return (
    <div>
      <div>
        <UpperPart func={pass}/>
      </div>
      <div>
        <LowerPart first={initial} ondelete={addDelete}/>
      </div>
      
    </div>
  );
}

export default App;
