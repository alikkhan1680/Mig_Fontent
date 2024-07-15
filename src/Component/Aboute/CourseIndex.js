import "./CourseIndex.css";
import { CgArrowUpR } from "react-icons/cg";
import moment from 'moment';




function CourseIndex({ Data, HandelInfo}){
    return (
        <div className="bodyDiv">
                {Data.map( (val) => (
                    <div className="courseindex" key={val.id}>
                    <div>
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
                            <button className="button" onClick={()=> HandelInfo(val)}>Info <CgArrowUpR className="svg"/></button>
                        </div>
                    </div>
                </div>
                ))}
        </div>

        
    )
   
}

export default CourseIndex;
//