
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './component/Details';
import Users from './component/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Users/>} ></Route>
        <Route path='/details/:id' element= {<Details/>} ></Route>
      
      
      
      </Routes>
     
    </div>
  );
}

export default App;
