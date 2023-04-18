import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Main from './Main/Main';
import './App.css';
import { useRef } from 'react';

function App() {

  // useRef



  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <div className='hex'>
            <Main />
          </div>
          <div className='bg'>Useref</div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
