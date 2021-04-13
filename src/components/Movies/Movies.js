import React from "react"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import Header from "./Header/Header"
import SearchForm from "./SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import MoviesApi from "../../utils/MoviesApi"
import Preloader from "../Preloader/Preloader"

function Movies(){
    const [movies, setMovies] = React.useState([])
    const [pagination, setPagination] = React.useState({startCard: 0, rowCard: 0, moreCard: 0})
    const [short, setShort] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const [loader, setLoader] = React.useState(false)


    React.useEffect(()=>{
        setMovies(JSON.parse(localStorage.getItem("movies")))
        selectScreenWidth()
        window.addEventListener("resize", ()=>{
            setTimeout(selectScreenWidth, 1000)
        })
    },[])
    
    function onFindMovie(evt){
        evt.preventDefault()
        selectScreenWidth()
        setLoader(true)
        MoviesApi.getMovies()
            .then(res=>{
                console.log(res)
                const films = res.filter((movie)=>{
                    return movie.nameRU.toLowerCase().includes(evt.target[0].value.toLowerCase())
                })
                if(films.length == 0){
                    setMessage("Ничего не найдено")
                }
                
                localStorage.setItem("movies", JSON.stringify(films));
                setMovies(films)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setLoader(false)
            })
    }
    function selectScreenWidth(){
        if(window.screen.width < 400){
            setPagination({startCard: 5, rowCard: 1, moreCard: 2})
        } else if(window.screen.width < 768){
            setPagination({startCard: 8, rowCard: 2, moreCard: 2})
        } else {
            setPagination({startCard: 12, rowCard: 3, moreCard: 3})
        }
    }
    return(
        <>
            <Header />
            <SearchForm onFindMovie={onFindMovie} setShort={setShort} short={short}/>
            <Preloader loader={loader}/>
            <MoviesCardList movies={
                short? movies.filter(movie=> movie.duration <=40) :movies
            } pagination={pagination} setPagination={setPagination} message={message} loader={loader}/>
            <Footer />
        </>
    )
}
export default Movies