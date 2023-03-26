import './App.css';
import Employee from './components/Employee';

function App(){
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? // this line means if its true
    <>
    
    <Employee name="Salifu" role="IT Specialist" />
    </>
// this line below means if its false
   : <p>You can not see the employees.</p>
      }  
    </div>
  );

}

export default App;
