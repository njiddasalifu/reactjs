import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';


function App(){
  // role and setRole are just variables
  const [role, setRole] = useState();
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? // this line means if its true
    <>
    <input 
    type='text' 
    onChange={(e)=>{
      setRole(e.target.value);
    }}
    />
    
    <Employee name="Salifu" role={role} />
    
    </>
// this line below means if its false
   : <p>You can not see the employees.</p>
      }  
    </div>
  );

}

export default App;
