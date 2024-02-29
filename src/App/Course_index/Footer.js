import "./Footer.css";
import { CgArrowUpR } from "react-icons/cg";

function Footer(){
    return (
        <div className="footer">
            <p>Minimum: 1$</p>
            <button className="button">Join <CgArrowUpR className="svg"/></button>
        </div>
    )
}


export default Footer;