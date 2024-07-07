import './Direction.css';
//import { Button } from 'bootstrap';


function Direction({ HandlerClick, directions, AllCourse}){
   
    return (
    <div className="catspecialcom">
       <button className='btn-all catspecial'>All</button>
        {directions.map( (val) => (
            <p className='catspecial' onClick={ ()=> HandlerClick(val)} key={val.id} > {val}</p>
             
        ))}
    </div>
            
            
    )
}

export default Direction;
