import "./SavedMovies.css"
import React from "react"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import Header from "./Header/Header"
import SearchForm from "./SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import MainApi from "../../utils/MainApi"
function SavedMovies(){
    const [movies, setMovies] = React.useState([])
    const [short, setShort] = React.useState(false)
    const [validFilms, setValidFilms] = React.useState([])
    const [refresh, setRefresh] = React.useState(false)
    React.useEffect(()=>{
        MainApi.getMovies()
            .then(res=>{
                console.log(res)
                setMovies(res)
                setValidFilms(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [refresh])
    
    function onFindMovie(evt){
        evt.preventDefault()
        setValidFilms(movies.filter((movie)=> {
            return movie.nameRU.toLowerCase().includes(evt.target[0].value.toLowerCase())
        }))

    }
    return(
        <>
            <Header />
            <SearchForm onFindMovie={onFindMovie} setShort={setShort} short={short} />
            <MoviesCardList movies={
                short? validFilms.filter(movie=> movie.duration <=40) :validFilms
            } setRefresh={setRefresh} refresh={refresh}/>
            <Footer />
        </>
    )
}
export default SavedMovies 