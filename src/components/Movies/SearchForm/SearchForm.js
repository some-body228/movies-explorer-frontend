import React from 'react';
import {  withRouter } from 'react-router-dom';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import './SearchForm.css'


function SearchForm (props) {
    
    return(
        <>
            <section className="search-form">   
                <form className="search-form__container" onSubmit={props.onFindMovie}>
                    <input type="text" name="find" placeholder="Фильм" className="search-form__input" required></input>
                    <button type="submit" className="search-form__button" ></button>
                </form>
                <div className="search-form__short-film">
                    <FilterCheckbox setShort={props.setShort} short={props.short}/>
                    <p className="search-form__short-film-paragraph">Короткометражки</p>
                </div>  
            </section>    
        </> 
    ) 
}

//export default Promo
export default withRouter(SearchForm);