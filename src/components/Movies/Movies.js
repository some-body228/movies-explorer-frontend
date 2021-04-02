import MoviesCardList from "./MoviesCardList/MoviesCardList"
import Header from "./Header/Header"
import SearchForm from "./SearchForm/SearchForm"
import Footer from "../Footer/Footer"
function Movies(){
    return(
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}
export default Movies