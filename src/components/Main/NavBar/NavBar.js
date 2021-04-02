import "./NavBar.css"
function NavBar(){
    return (
        <nav className="navBar">
            <a className="navBar__link" href="#aboutProject">О проекте</a>
            <a className="navBar__link" href="#tech">Технологии</a>
            <a className="navBar__link" href="#aboutMe">Студент</a>
        </nav>
    )
}
export default NavBar