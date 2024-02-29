import "./Navbar.css";
import CompNav_1 from "./App/Navbar/Navbar-bob-1/CompNav-1";
import CompNav_2 from "./App/Navbar/Nabvar-box-2/CompNav-2";
import CompNav_3 from "./App/Navbar/Navbar-box-3/CompNav-3";



function Navbar(){
    return (
        <div className="navbar">
           <CompNav_1 />
           <CompNav_2 />
           <CompNav_3 />
        </div>
    )
}

export default  Navbar;