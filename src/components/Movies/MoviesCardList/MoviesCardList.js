import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import cards from "../../../utils/cards"
function MoviesCardList(){
    return(
        <ul className="card-list">
            {cards.map(el=>{
               return  <MoviesCard {...el} />
            })}
        </ul>
    )
}
export default MoviesCardList