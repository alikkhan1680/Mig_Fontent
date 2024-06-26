import './Card_info.css';
import React, { useState, useEffect } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import moment from 'moment';



function InfoCard( {CourseInfo, cardstate, HandelAn}){
    const [showCard, setShowCard] = useState(false);

   
  useEffect(() => {
    if (cardstate) {
      setShowCard(true);
      document.body.classList.add('blur'); // Add blurred class to body
    } else {
      setTimeout(() => {
        setShowCard(false);
        document.body.classList.remove('blur'); // Remove blurred class from body
      }, 2000); // Wait for 2 seconds before hiding
    }
  }, [cardstate]);
    
      return (
         <div className={`card_had ${cardstate ? 'show' : ''}`}>     
                     <div className='infocard__teacher'>
                              <div className="teacher__img">
                                  <img src={CourseInfo.teachers.userPicture}/>
                              </div>
                              <div className="teacher__info">
                                <ul>
                                  <li><h5><b>Name : </b>{CourseInfo.teachers.first_name.charAt(0).toUpperCase() + CourseInfo.teachers.first_name.slice(1)} {CourseInfo.teachers.last_name.charAt(0).toUpperCase() + CourseInfo.teachers.last_name.slice(1)}</h5></li>
                                  <li><h5><b>Age : </b>{CourseInfo.teachers.userAge}</h5></li>
                                  <li><h5><b>Skils : </b>{CourseInfo.teachers.teacherSkills}</h5></li>
                                  <button class="button-90" role="button" onClick={() => HandelAn()}><IoMdArrowRoundBack />      Back</button>
                                </ul>
                              </div>
                              
                     </div>


                     <div className='infocard__course'>
                         <h5 className="time"><b>Live Time : </b> {moment(CourseInfo.live_time).format("D MMMM , hh:mm A")}</h5>
                         <h5><b>Direction : </b>{CourseInfo.direction.directionName.charAt(0).toUpperCase() + CourseInfo.direction.directionName.slice(1)}</h5>
                         <h5><b>Category : </b>{CourseInfo.category.catName}</h5>
                         <h5><b>Topic Name : </b>{CourseInfo.courseName}</h5>
                         <h5><b>Price : </b>{CourseInfo.price} Min. So'm</h5>
                         <h5><b>Collected Money : </b>{CourseInfo.jamgarma} Min. So'm</h5>
                         {console.log(CourseInfo.jamgarma, 'bu jamgarma ')}
                         <h5><b>Duration : </b>{CourseInfo.duration} <MdOutlineTimer /></h5>
                         <h5><b>MaxStudents Count : </b>{CourseInfo.maxStudentsCount}</h5>
                         <h5><b>Now Students : </b>{CourseInfo.students_count}</h5>
                         <h5><b>Course Link : </b><a href={CourseInfo.course_link}>Link for Avslible</a> </h5>
                         <button class="button-89" role="button"><IoMdArrowRoundBack />     Joining</button>
                     </div>

          </div>
      );
    }


export default InfoCard;




