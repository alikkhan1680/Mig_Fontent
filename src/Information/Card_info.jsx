import './Card_info.css';

function InfoCard( {CourseInfo, cardstate, HandelAn}){
    if(!cardstate){
        return (<div className='card_hard'></div>)
    }{
        return (
            <div className='card_had '>
                <div className='row'>
                     <div className='col-md-6'>
                         <div><img src={CourseInfo.teachers.userPicture}/></div>
                     </div>
                     <div className='col-md-6'>
                         <h3>{CourseInfo.teachers.first_name}</h3>
                     </div>
                     <button onClick={() => HandelAn()}>btn</button>
                </div>
            </div>
         )
    }
    
}


export default InfoCard;