import './FilterCheckbox.css'

function FilterCheckbox(props) {
  
    return (

<label for="checkbox" className="search-bar__switch">
            <input type="checkbox" id="checkbox" className="search-bar__checkbox" onClick={()=>{props.setShort(!props.short)}}/>
            <span className="search-bar__slider"></span>
</label>

    )
}

export default FilterCheckbox;