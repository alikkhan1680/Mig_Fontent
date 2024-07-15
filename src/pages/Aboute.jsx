import React, { useState, useEffect, createContext, useContext } from 'react';
import '../App.css';
import Navbar from '../Component/Aboute/Navbar/Navbar';
import Direction from '../Component/Aboute/Direction/Direction';
import CourseIndex from '../Component/Aboute/CourseIndex';
import Elon from '../Component/Aboute/Elon/Elon';
import Footer from '../Component/Aboute/Footer/Footer';
import InfoCard from '../Component/Aboute/Information/Card_info';
import { AbouteContext } from '../App';



function Aboute() {
  const { elon, setElon, Data, setData, course, setCourse } = useContext(AbouteContext); // bu o'zgaruvchi app dan kelgan provider orqali malumotlarni oladi coursse api dan va elon api dam malumotlarni oladi 
  const [CourseInfo, setCourseInfo] = useState([])//bu State coursni bosganda shu bosilgan course qiymatlarini saqlaydi va info cardga jo'natish uchun 
  const [cardstate, setcardstate] = useState(false)

  useEffect( () => {
    if(Data.length === 0){
      setData(course)
    }//bu code cours larni refreshdan so'ng default ekranga chiqarish uchun ishlatilinadmi 
  })
 

  const menu  = [...new Set( course.map( (val) => val.direction.directionName))]
 
  


  


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

export default Aboute;
