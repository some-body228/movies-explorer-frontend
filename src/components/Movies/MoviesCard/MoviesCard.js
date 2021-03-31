import './MoviesCard.css';
import like from "../../../images/like.png"
import dislike from "../../../images/dislike.png"
function MoviesCard(props) {

return(

<li className="movie">
    <img src = {props.poster} alt="dcdc" className="movie__img" />
    <div className="movie__name-container">
        <h3 className="movie__name">{props.name}</h3>
        <button type="button" className="like" >
            <img src={props.isLiked? like: dislike} alt="лайк"/>
        </button>

    </div>
    <span className="movie__time">{props.duration}</span>
</li>
)
}

export default MoviesCard