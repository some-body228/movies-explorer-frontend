import "./Header.css";
import React from "react"
import logo from "../../../images/logo.png";
import { useHistory } from "react-router-dom";

function Header(props) {
    const [burger, setburger] = React.useState(false)
  const history = useHistory();
  if (props.loggedIn) {
    return (
      <>
        <header className="header header_type_main">
          <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="logo" />
          </div>
          <div
            className="header__popup-shadow"
            style={{ display: `${burger ? "block" : "none"}` }}
          ></div>
          <div className="header__button-container header__button-container_movies">
            <button
              className="header__button-films header__button-films_main"
              onClick={() => {
                history.push("/movies");
              }}
            >
              Фильмы
            </button>
            <button
              className="header__button-films header__button-films_main"
              onClick={() => {
                history.push("/saved-movies");
              }}
            >
              Сохраненые фильмы
            </button>
            <button
              className="header__button-account header__button-account_main"
              onClick={() => {
                history.push("/profile");
              }}
            >
              Аккаунт
            </button>
          </div>
          <button
            type="button"
            className="header__guard header__guard_main"
            onClick={() => {
              setburger(!burger);
            }}
          ></button>
        </header>
        <div
          className="header__button-container-popup"
          style={{ display: `${burger ? "block" : "none"}` }}
        >
          <button
            className="header__button-films header__button-films_popup"
            onClick={() => {
              history.push("/");
            }}
          >
            Главная
          </button>
          <button
            className="header__button-films header__button-films_popup "
            onClick={() => {
              history.push("/movies");
            }}
          >
            Фильмы
          </button>
          <button
            className="header__button-films header__button-films_popup"
            onClick={() => {
              history.push("/saved-movies");
            }}
          >
            Сохраненые фильмы
          </button>
          <button
            className="header__button-account "
            onClick={() => {
              history.push("/profile");
            }}
          >
            Аккаунт
          </button>
          <button
            className="header__exit-button"
            onClick={() => {
              setburger(!burger);
            }}
          ></button>
        </div>
      </>
    );
  }
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <div className="header__button-container">
        <button
          className="header__button-signin"
          onClick={() => {
            history.push("/signin");
          }}
        >
          Регистрация
        </button>
        <button
          className="header__button-signup"
          onClick={() => {
            history.push("/signup");
          }}
        >
          Войти
        </button>
      </div>
    </header>
  );
}
export default Header;
