import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  
  return (
    <div className="flex items-center justify-center">
      <ContactList/>
      {/* <ContactForm/> */}
    </div>
  );
}

export default App;
