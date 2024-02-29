import CatSkils from "./CatSkils";
import CatSpecil from "./CatSpecial";
import "./Category.css";



function Category(){
    return (
        <div>
            <hr/>
            <div  className="catspecialcom">
                <CatSpecil />
                <CatSpecil />
                <CatSpecil />
                <CatSpecil />
                <CatSpecil />
            </div>
            <div className="catskilscom">
                    <CatSkils />
                    <CatSkils />
                    <CatSkils />
                    <CatSkils />
                    <CatSkils />
                    <CatSkils />
                    <CatSkils />
            </div>
            </div>


       
    )
}

export default Category;