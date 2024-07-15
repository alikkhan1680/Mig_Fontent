import ReactDOM from "react-dom/client";
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Aboute = lazy(()=> import ( "./pages/Aboute"))
const Payment = lazy(()=> import( "./pages/Payment"))
const Login = lazy (()=> import('./pages/Login'))
const Registration = lazy(()=> import('./pages/Registration'))
const Lesson = lazy(()=> import ('./Component/lesson/Lesson'))


export default function App(){
  return (
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
  )
}
