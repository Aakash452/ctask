// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';





function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
      </Routes>
    </Router>
 
      
    </div>
  );
}

export default App;
