import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Main from './Main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
