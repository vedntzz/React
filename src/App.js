import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<div><Navbar/><Home /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
