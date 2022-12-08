import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Countdown';
import Countdown from './components/Countdown.js';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    document.title = "jowe.ca";  
  }, []);

  return (
    <div className="App">
      <Countdown />
    </div>
  );
}

export default App;
