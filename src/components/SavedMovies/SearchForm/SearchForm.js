import React from 'react';
import {  withRouter } from 'react-router-dom';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import '../../Movies/SearchForm/SearchForm'


function SearchForm () {
    
    return(
        <>
            <section className="search-form">   
                <div className="search-form__container">
                    <input type="text" name="search" placeholder="Фильм" className="search-form__input"></input>
                    <button type="button" className="search-form__button"></button>
                </div>
                <div className="search-form__short-film">
                    <FilterCheckbox/>
                    <p className="search-form__short-film-paragraph">Короткометражки</p>
                </div>  
            </section>    
        </> 
    ) 
}

//export default Promo
export default withRouter(SearchForm);