import Dashboard from "./Dashboard";
import Lesson from "./Lesson";
import Online from "./Online";
import Paymant from "./Payment"
import "./ComNav.css";


// dashboard lesson online paymane
function CompNav_2(){
    return(
        <div className="compnav-2">
            <Dashboard />
            <Lesson />
            <Online />
            <Paymant />
        </div>
    )
}
export default CompNav_2;