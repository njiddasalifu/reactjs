import React, { useState } from 'react';
import Loginform from './components/loginForm';
function App() {
  const adminUser = {
  email:"admin@admin.com",
  password:"admin123"
}


const [user, setUser] = useState({name:"", email: ""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if(details.email==adminUser.email && details.password == adminUser.password) {
  console.log("Logged in");
  }else {
    console.log("Details do not match");
  }
}
const Logout =()=> {
  console.log("Logout");
}
  return (
    <div className="App">
     {(user.email!= "") ? (
      <div className='Welcome'>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>Logout</button> 
        </div>
     ): (
      <Loginform Login={Login} error={error}/>
     )}
    </div>
  );
}

export default App;
