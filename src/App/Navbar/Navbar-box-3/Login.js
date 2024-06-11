import { GoChevronDown } from "react-icons/go";
import "./Login.css";


export default function Login({setAuth, setregister}){

    return (
    
        <div id="login" className="dropdown">
                <img src="https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1734" alt='hello'/>
                <p>dilshod</p>
                <GoChevronDown calss="btn btn-secondary dropdown-toggle Lsvg"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button" onClick={ ()=> setAuth(true)} >Login</button>
                    <button className="dropdown-item" type="button" onClick={ ()=> setregister(true)}>Sign</button>
                    <button className="dropdown-item" type="button" href="login.js"> Log-out</button>
                </div>
      </div>
    )
}