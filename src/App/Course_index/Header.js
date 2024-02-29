import "./Header.css";


function Header(){
    return(
        <div className="courseheader">
            <div className="img">
            <img src="./husniddin.jpg" />
            </div>
            <div className="data">
            <h3>Hamid R Mousazade</h3>
            <p className="cat">Paython foundation</p>
            <p>Jan 22,2024 - 02:00 pm</p>
            </div>
        </div>
    )
}

export default Header;