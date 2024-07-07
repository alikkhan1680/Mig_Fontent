import './App.css';
import Navbar from './Navbar';
import Direction from './App/Direction/Direction';
import CourseIndex from './CourseIndex';
import Elon from './Elon/Elon';
import React, { useState, useEffect } from 'react';
import InfoCard from './Information/Card_info';
import Footer from './Footer/Footer';



function App() {
  const [elon, setelon] = useState([]); // elonlar chqishligi uchun database dan kelgan malumotlarni olishga yordam beruvchi state
  const [course, setcourse] = useState([]);  // Coursedan kelgan malumotlarni saqlashlig uchun ishlatilibgan stat hisoblanadi 
  const [Data, setData] = useState([]) //Direction va courslarni malumotlarini filterlab ajratiishga yordamlashuvchi state
  const [CourseInfo, setCourseInfo] = useState([])//bu State coursni bosganda shu bosilgan course qiymatlarini saqlaydi va info cardga jo'natish uchun 
  const [cardstate, setcardstate] = useState(false)


  useEffect( () => {
    if(Data.length === 0){
      setData(course)
    }//bu code cours larni refreshdan so'ng default ekranga chiqarish uchun ishlatilinadmi 
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
    .then( (response) => {
      setcourse(response);
      setData(response.slice(0, 5))
    } )
    .catch( (err) => console.log("bu course errori hisoblanadi"))
  }, [])


  const HandelInfo = (val) => {
    setCourseInfo(val)
    setcardstate(true)
  }


  const HandelAll = (dir) => {
    if (dir === "All") {
      setData(course);
    } else {
      const newval = course.filter((val) => val.direction.directionName === dir)
      setData(newval);
    }
  }

 
const HandelAn = () =>{
  setcardstate(false)
}
  

 

  return (
    <div className="App" >
      <Navbar />
      <hr />
      <Elon elon={elon}/>
      <Direction   directions={menu} HandelAll={HandelAll} />
      <CourseIndex Data={Data} HandelInfo={HandelInfo}/> 
      {cardstate && <InfoCard HandelAn={HandelAn} CourseInfo={CourseInfo} cardstate={cardstate}/>}
      <Footer/>
    </div>
  );
}

export default App;
