import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import './App.scss';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <div className='hex'>
            <Main />
          </div>
          <div className='bg'></div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
