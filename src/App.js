import './App.css';
import LoginPage from "./Login/Login";
import React, { useState } from 'react';
import Navbar from './Navbar';
import Category from './App/Category/Category';
import CourseIndex from './CourseIndex';



function App() {
 const [login, setlogin] = useState(false)

  return (
    <div className="App">
      {login? <LoginPage /> : null}
      <Navbar />
      <Category />
      <CourseIndex />
      <CourseIndex />
      <CourseIndex />
    </div>
  );
}

export default App;

