import React, { useState} from 'react';
import './add-film.css';

const AddFilm = ({addItem}) =>{

    const [state, setState] = useState({name:'', views:''})

    const changeHandlerInput = (e) => {
      setState({...state,[e.target.name]: e.target.value})
    }

    const addFormHandler = (e) =>{
        e.preventDefault();
        addItem({name:state.name,views:state.views});
        setState({name:'',views:''})
    }

    return (
        <div className='input mt-3 mb-3'>
            <h1>Add new cinema</h1>
            <form className="add-form d-flex" onSubmit={addFormHandler}>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Name of cinema?'
                    onChange={changeHandlerInput}
                    name='name'
                    value={state.name}
                />
                <input
                    type="number"
                    className="form-control"
                    placeholder='Number of views?'
                    onChange={changeHandlerInput}
                    name='views'
                    value={state.views}
                />
                <button type={"submit"} className="btn btn-outline-dark">Add</button>
            </form>

        </div>
    );
}


export default AddFilm;