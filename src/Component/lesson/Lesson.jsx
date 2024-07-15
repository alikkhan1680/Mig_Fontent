import { AbouteContext } from '../../App';
import './Lesson.css';
import { useContext } from 'react';
import { CgArrowUpR } from "react-icons/cg";
import moment from 'moment';



function Lesson(){
    const {course, setCourse } = useContext(AbouteContext); // bu o'zgaruvchi app dan kelgan provider orqali malumotlarni oladi coursse api dan va elon api dam malumotlarni oladi 

    return (
        <div className="bodyDiv">
                {course.map( (val) => (
                    <div className="courseindex" key={val.id}>                       
                            <div className="courseheader">
                                <div className="img">
                                <img className="picture" src={val.teachers.userPicture}alt="hello "/>
                                </div>
                                <div className="data">
                                    <h5>{val.teachers.firstName}{val.teachers.lastName}</h5>
                                    <p className="cat">{val.category.catName}</p>
                                    <p className="time"> {moment(val.live_time).format("D MMMM , hh:mm A")}</p>
                                </div>
                            </div>
                            <div  className="body">
                            <h4>
                                {val.courseName.charAt(0).toUpperCase() + val.courseName.slice(1)}
                            </h4>
                                <p>
                                    {val.descriptions.length > 50 ? val.descriptions.substring(0, 400) + '...' : val.descriptions}
                                </p>
                            </div>
                            <hr/>
                            <div className="footer">
                                <p>{val.price} Min, So`m</p>
                                <button className="button" >Info <CgArrowUpR className="svg"/></button>
                            </div>
                        </div>

                ))}
        </div>
    )
}

export default Lesson;