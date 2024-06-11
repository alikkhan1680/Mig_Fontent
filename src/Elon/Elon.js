import './Elon.css'

function Elon({elon}){
    return (
        <div class="E-Box">
               {elon.map( (val) => (
                <div>
                <img src={val.elonImg}/>
                <div class="Elon-box">
                    <h5>{val.elon}</h5>
                    </div>
                </div>
               ))}
        </div>
    )
}

export default Elon
