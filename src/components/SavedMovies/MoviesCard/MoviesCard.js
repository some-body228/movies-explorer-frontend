import './MoviesCard.css';
import del from "../../../images/delete.png"
import mainApi from '../../../utils/MainApi';
function MoviesCard(props) {
    function deleteCard(){
        mainApi.deleteMovie(props._id)
        .then(res=>{
            props.setRefresh(!props.refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

return(

<li className="movie">
    <img src = {props.image} alt="dcdc" className="movie__img" />
    <div className="movie__name-container">
        <h3 className="movie__name">{props.nameRU}</h3>
        <button type="button" className="delete" >
            <img src={del} alt="удаление" onClick={deleteCard}/>
        </button>

    </div>
    <span className="movie__time">{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</span>
</li>
)
}

export default MoviesCard