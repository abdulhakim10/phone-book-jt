import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [addForm, setAddForm] = useState(false)
  
  return (
    <div className="flex items-center justify-center">
     <div>
     <ContactList setAddForm={setAddForm}/>
     </div>
     {addForm === true && 
      <div>
      <ContactForm setAddForm={setAddForm}/>
      </div>

     }
     <Toaster/>
    </div>
  );
}

export default App;
