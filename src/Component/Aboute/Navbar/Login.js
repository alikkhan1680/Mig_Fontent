import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Navbar.css";
const  logo = "https://www.cleanpng.com/png-computer-icons-person-5874887/"


export default function Login(){

    return (
    
        <div id="login" className="dropdown">
                <img src="https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1734" alt='hello'/>
                <p>dilshod</p>
                <GoChevronDown calss="btn btn-secondary dropdown-toggle Lsvg"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/login'>Login</Link>
                    </button>
                    <button className="dropdown-item" type="button">
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/registration">Sign_in</Link>
                    </button>
                    <button className="dropdown-item" type="button" href="login.js"> Log-out</button>
                </div>
      </div>
    )
}