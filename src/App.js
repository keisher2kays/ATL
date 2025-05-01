
import './App.css';
import Banner from './components/HomePage';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  useEffect(() => {
    emailjs.init("YOUR_USER_ID");
  }, []);

  return (
    <div className="App">
      <Banner />
    </div>
  );
}

export default App;
