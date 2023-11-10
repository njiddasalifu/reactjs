import React, {useState} from 'react'; 
import { Header } from './Header';
import { AddContact } from './AddConstact';
import { ContactList } from './ContactList';
 const App = () => {
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact)=>{
      setContacts([...contacts, contact])
    }
  return(
    <div className='ui container'>
      <Header />
      <AddContact  addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts}/>
      
    </div>
  )
}
export default App;

