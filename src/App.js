import ReactDOM from "react-dom/client";
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext } from "react";
import { useState, useEffect } from "react";
const Aboute = lazy(()=> import ( "./pages/Aboute"))
const Payment = lazy(()=> import( "./pages/Payment"))
const Login = lazy (()=> import('./pages/Login'))
const Registration = lazy(()=> import('./pages/Registration'))
const Lesson = lazy(()=> import ('./Component/lesson/Lesson'))
export const AbouteContext = createContext();//Aboute pagega malumot yuborihlig uchun contex hook 


export default function App(){
  const [elon, setelon] = useState([]); // elonlar chqishligi uchun database dan kelgan malumotlarni olishga yordam beruvchi state
  const [course, setcourse] = useState([]);  // Coursedan kelgan malumotlarni saqlashlig uchun ishlatilibgan stat hisoblanadi 
  const [Data, setData] = useState([]) //Direction va courslarni malumotlarini filterlab ajratiishga yordamlashuvchi state


  useEffect( ()=> {
    fetch('http://127.0.0.1:8000/Elonlar/')
    .then( (res) => res.json())
    .then( (response) => setelon(response))
    .catch( (err) => console.log(err, 'elon errorlari'))
  }, [])

  useEffect( ()=> {
    fetch("http://127.0.0.1:8000/Course/")
    .then( (res) => res.json())
    .then( (response) => {
      setcourse(response);
      setData(response.slice(0, 5))
    } )
    .catch( (err) => console.log("bu course errori hisoblanadi"))
  }, [])

  return (
    <AbouteContext.Provider value={{elon, setelon, Data, setData, course, setcourse}}>
        <Router>
          <Suspense fallback={<span class="loader"></span>}>
              <Routes>
                  <Route path="/" element={<Aboute/>}/>
                  <Route path='payment' element={<Payment/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/registration" element={<Registration/>}/>
                  <Route path="lesson" element={<Lesson/>}/>
              </Routes>
          </Suspense>
        </Router>
    </AbouteContext.Provider> 
    
  )
}
