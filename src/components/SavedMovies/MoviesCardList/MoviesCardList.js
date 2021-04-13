import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
function MoviesCardList(props){
    console.log(props.movies)
    if(!props.movies){
        return <></>
    }
    return(
        <>
        <ul className="card-list">
            {props.movies.map(el=>{
               return  <MoviesCard {...el} setRefresh={props.setRefresh} refresh={props.refresh}/>
            })}
        </ul>
        </>
    )
}
export default MoviesCardList