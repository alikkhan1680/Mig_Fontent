import './App.css';
import Navbar from './Navbar';
import Direction from './App/Direction/Direction';
import CourseIndex from './CourseIndex';
import Elon from './Elon/Elon';
import React, { useState, useEffect } from 'react';
import InfoCard from './Information/Card_info';



function App() {
  const [elon, setelon] = useState([]); // elonlar chqishligi uchun database dan kelgan malumotlarni olishga yordam beruvchi state
  const [course, setcourse] = useState([]);  // Coursedan kelgan malumotlarni saqlashlig uchun ishlatilibgan stat hisoblanadi 
  const [Data, setData] = useState([]) //Direction va courslarni malumotlarini filterlab ajratiishga yordamlashuvchi state
  const [CourseInfo, setCourseInfo] = useState([])//bu State coursni bosganda shu bosilgan course qiymatlarini saqlaydi va info cardga jo'natish uchun 
  const [cardstate, setcardstate] = useState(false)


  useEffect( () => {
    if(Data.length === 0){
      setData(course)
    }
  })
 


  
  const menu  = [...new Set( course.map( (val) => val.direction.directionName))]
 
  useEffect( ()=> {
    fetch('http://127.0.0.1:8000/Elonlar/')
    .then( (res) => res.json())
    .then( (response) => setelon(response))
    .catch( (err) => console.log(err, 'elon errorlari'))
  }, [])



  useEffect( ()=> {
    fetch("http://127.0.0.1:8000/Course/")
    .then( (res) => res.json())
    .then( (response) => setcourse(response))
    .catch( (err) => console.log("bu course errori hisoblanadi"))
  }, [])


  const HandelInfo = (val) => {
    setCourseInfo(val)
    setcardstate(true)
  }

  
  const HandlerClick = (dir) => { 
    const newval = course.filter( (val) => val.direction.directionName === dir)
    setData(newval) 
  }

 
 
const HandelAn = () =>{
  setcardstate(false)
}
  

 
// course infoni course ichi ga kirgizish kerak  va stattelarni hammasini app da olib tahslash kerak //

  return (
    <div className="App" >
      <Navbar />
      <hr />
      <Elon elon={elon}/>
      <Direction HandlerClick={HandlerClick}  directions={menu} />
      <CourseIndex Data={Data} HandelInfo={HandelInfo}/> 
      {cardstate && <InfoCard HandelAn={HandelAn} CourseInfo={CourseInfo} cardstate={cardstate}/>}
    </div>
  );
}

export default App;
