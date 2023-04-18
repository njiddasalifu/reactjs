import { useState } from "react";
import { ReactDOM } from "react-dom/client";

function MyForm(){
    // we are using the usestate hook to manage the form input.
    const [name, setName] = useState('');

    return(
        <form>
            <label>Enter your name:
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />

            </label>
        </form>
    );
}
export default MyForm;