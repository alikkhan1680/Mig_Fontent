import { useEffect } from 'react';
import './Direction.css';
//import { Button } from 'bootstrap';


function Direction({ directions, HandelAll}){  
    return (
    <div className="catspecialcom">
      <button className='btn-all catspecial' onClick={() => HandelAll("All")}>All</button>
        {directions.map( (val) => (
            <p className='catspecial' onClick={ ()=> HandelAll(val)} key={val.id} > {val}</p>
        ))}
    </div>
            
            
    )
}

export default Direction;
