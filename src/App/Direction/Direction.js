import './Direction.css';
//import { Button } from 'bootstrap';


function Direction({ HandlerClick, directions}){
   
    return (
    <div className="catspecialcom">
        {directions.map( (val) => (
            <p className='catspecial' onClick={ ()=> HandlerClick(val)} key={val.id} > {val}</p>
            
        ))}
    </div>
            
            
    )
}

export default Direction;
