import "./CompNav-3.css";
import Warning from "./Wearning";
import Message from "./Message";
import Login from "./Login";

export default function CompNav_3({setAuth, setregister}){
    return (
        <div className="compnav-3">
            <Warning />
            <Message />
            <Login setAuth={setAuth} setregister={setregister}/>
        </div>
    )
}