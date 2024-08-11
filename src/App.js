import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactSection from './components/ContactSection/ContactSection';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main className='main_container'>
      <ContactSection/>
      <ContactForm/>
      </main>
    </div>
  );
}

export default App;
