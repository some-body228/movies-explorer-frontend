import "./NavBar.css"
function NavBar(){
    return (
        <nav className="navBar">
            <a className="navBar__link" href="#">О проекте</a>
            <a className="navBar__link" href="#">Технологии</a>
            <a className="navBar__link" href="#">Студент</a>
        </nav>
    )
}
export default NavBar