import React from 'react'

const SearchBox = (props) => {
    return (
        <div>
            <input placeholder="Search.." type="text" onChange={props.handleChange}></input>
        </div>
    )
}

export default SearchBox;