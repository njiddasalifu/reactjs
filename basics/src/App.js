import './App.css';
import Employee from './components/Employee';

function App(){
  const showEmployees = false;
  return (
    <div className="App">
      {showEmployees ? // this line means if its true
    <>
    
    <Employee />
    </>
// this line below means if its false
   : <p>You can not see the employees.</p>
      }  
    </div>
  );

}

export default App;
