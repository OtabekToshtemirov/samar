import React from 'react';
import './movie-list-item.css';


function MovieListItem (props){
    const {favourite,name, views, onDelete,onFavourite } = props

    return(
        <div className={`movie-list-item ${favourite && 'favourite '}`}>
            <div className="movie-list-item__info d-flex justify-content-between w-50">
                <div className="movie-list-item__name">{name}</div>
                <div  className="movie-list-item__views">{views}
                    <i id={"eye"} className="fa fa-eye "></i>
                </div>
            </div>
            <div className="movie-list-item__favourite">
                <button className="movie-list-item__favourite-btn m-1 pl-1 btn heart"  onClick={onFavourite}>
                    <i className="fa fa-heart"></i>
                </button>
                {/*    delete button*/}
                <button className="movie-list-item__favourite-btn m-1 pr-1 btn text-warning" onClick={onDelete}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    )
}


export default MovieListItem;