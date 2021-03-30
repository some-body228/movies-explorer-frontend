import "./SavedMovies.css"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import Header from "./Header/Header"
import SearchForm from "./SearchForm/SearchForm"
import Footer from "../Footer/Footer"
function SavedMovies(){
    return(
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}
export default SavedMovies 