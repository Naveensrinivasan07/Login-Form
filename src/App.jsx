import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginComponent from './LoginComponent/LoginComponent';
import SignupComponent from './SignupComponent/SignupComponent';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
         
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>

        </nav>

        <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;