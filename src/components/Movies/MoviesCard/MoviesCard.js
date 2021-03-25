import './MoviesCard.css';
import like from "../../../images/like.png"
import film from "../../../images/film.png"
function MoviesCard(props) {

return(

<li className="movie">
    <img src = {props.poster} alt="dcdc" className="movie__img" />
    <div className="movie__name-container">
        <h3 className="movie__name">{props.name}</h3>
        <button type="button" className="like" >
            <img src={like} alt="лайк"/>
        </button>

    </div>
    <span className="movie__time">{props.duration}</span>
</li>
)
}

export default MoviesCard