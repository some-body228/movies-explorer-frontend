import './FilterCheckbox.css'

function FilterCheckbox() {
  
    return (

<label for="checkbox" className="search-bar__switch">
            <input type="checkbox" id="checkbox" className="search-bar__checkbox" />
            <span className="search-bar__slider"></span>
</label>

    )
}

export default FilterCheckbox;