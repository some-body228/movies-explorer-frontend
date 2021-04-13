import './MoviesCard.css';
import React from "react"
import like from "../../../images/like.png"
import dislike from "../../../images/dislike.png"
import MainApi from "../../../utils/MainApi"

function MoviesCard(props) {
    const [liked, setLiked] = React.useState(true)
    const [backId, setBackId] = React.useState('')
    React.useEffect(()=>{
        MainApi.getMovies()
            .then((res)=>{
                const savedId =  res.map(movie => movie.movieId);
        let savedBackId
        res.forEach((el)=>{
            if(el.movieId == props.id){
                 savedBackId = el._id
            }
        })
        setLiked(savedId.includes(`${props.id}`))
        setBackId(savedBackId)
            })
    }, [props])
    function handleMovie(){
        const {country = "неизвестно", director = "неизвестно", duration, year= "неизвестно", description= "неизвестно", nameRU, nameEN} = props
        const movieId = props.id
        const trailer = props.trailerLink
        const image = props.image && props.image.url? `https://api.nomoreparties.co${props.image.url}`: "https://www.startfilm.ru/images/base/film/f_569274/big_startfilmru1302444.jpg"
        const thumbnail = props.image.formats.thumbnail && props.image.formats.thumbnail.url? `https://api.nomoreparties.co${props.image.formats.thumbnail.url}`: "https://www.startfilm.ru/images/base/film/f_569274/big_startfilmru1302444.jpg"
        if(liked){
            MainApi.deleteMovie(backId)
                .then(res=>{
                    setLiked(!liked)
                })
                .catch((err)=>{
                    console.log(err)
                })
        } else {
            MainApi.saveMovie({country, director, duration, year, image, description, trailer, nameRU, nameEN, thumbnail, movieId})
                .then(res=>{
                    setBackId(res._id)
                    setLiked(!liked)
                }) 
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
return(

<li className="movie">
    <img src = {props.image && props.image.url? `https://api.nomoreparties.co${props.image.url}`: "https://www.startfilm.ru/images/base/film/f_569274/big_startfilmru1302444.jpg"} alt="dcdc" className="movie__img" />
    <div className="movie__name-container">
        <h3 className="movie__name">{props.nameRU}</h3>
        <button type="button" className="like" >
            <img src={liked? like: dislike} alt="лайк" onClick={handleMovie}/>
        </button>

    </div>
    <span className="movie__time">{`${Math.floor(props.duration / 60)}ч ${props.duration % 60}м`}</span>
</li>
)
}

export default MoviesCard