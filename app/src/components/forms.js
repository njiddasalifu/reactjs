import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name entered is: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}> 
      <label>Name: <br />
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label> <br />
      <button>Submit</button>
      {/*<input type="submit" label='Submit'/> */}
    </form>
  )
}
export default MyForm;