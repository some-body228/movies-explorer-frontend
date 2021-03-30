import './MoviesCard.css';
import del from "../../../images/delete.png"
function MoviesCard(props) {

return(

<li className="movie">
    <img src = {props.poster} alt="dcdc" className="movie__img" />
    <div className="movie__name-container">
        <h3 className="movie__name">{props.name}</h3>
        <button type="button" className="delete" >
            <img src={del} alt="удаление"/>
        </button>

    </div>
    <span className="movie__time">{props.duration}</span>
</li>
)
}

export default MoviesCard