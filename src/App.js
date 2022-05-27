import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Checkout from './components/Checkout';

function App() {

  const [userMessg, setUserMessg] = useState('Login')

  const handleLogIn = () => {
    console.log('login pressed')
    setUserMessg('Profile');
    window.location.replace('/');
  }
  const handlesignup = () => {
    console.log('signup page open')
    
  }



  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
        <Routes>
        <Route exact path="/Signup"element={<Signup handlesignup={handlesignup}/>} />
          <Route exact path="/login" element={<Login handleLogIn={handleLogIn} />} />
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path="/" element={<div><Navbar userMessg = {userMessg}/><Home/></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
