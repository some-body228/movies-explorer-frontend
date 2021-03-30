import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import cards from "../../../utils/cards"
function MoviesCardList(){
    return(
        <>
        <ul className="card-list">
            {cards.map(el=>{
               return  <MoviesCard {...el} />
            })}
        </ul>
        <div className="card-list__button-container">
            <button className="card-list__button" type="button">Ещё</button>
        </div>
        </>
    )
}
export default MoviesCardList