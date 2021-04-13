import React from "react"
import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard"
import MainApi from "../../../utils/MainApi"
import { computeHeadingLevel } from "@testing-library/dom"

function MoviesCardList(props){
    
    if(props.movies.length == 0){
        return <h2 className="card-list__not-found">{props.message}</h2>
    }
    console.log(props.movies)
    return(
        <>
        <ul className="card-list" style={{"display":`${props.loader? "none":"grid"}`}}>
            {props.movies.slice(0, props.pagination.startCard).map(el=>{
               return  <MoviesCard {...el}  />
            })}
        </ul>
        <div className="card-list__button-container" style={{"display":`${props.loader? "none":"grid"}`}}>
            <button className={`card-list__button ${props.pagination.startCard < props.movies.length? "": "card-list__button_hidden"}`} type="button" onClick={()=>{
                props.setPagination({...props.pagination, startCard: props.pagination.startCard + props.pagination.moreCard})
            }}>Ещё</button>
        </div>
        </>
    )
}
export default MoviesCardList