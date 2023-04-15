import React, { useState} from 'react';
import './Search.css';



const Search = ({updateTermHandler}) =>{
    const [term, setTerm] = useState('')

    const updateSeachHandler = (e) =>{
        const term = e.target.value;
        setTerm(term)
        updateTermHandler(term)
    }

    return (
        <div className="div">
            <input
                type="text"
                className="form-control search"
                placeholder={"Search films..."}
                value={term}
                onChange={updateSeachHandler}
            />


        </div>
    );
}


export default Search;