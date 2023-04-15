import MovieListItem from "../movie-items/MovieItems.jsx";

const Movie =({data,onDelete, onFavourite})=>{
    return(
        <div className="movie-list">
            {data.map((item)=>{
                return(
                    <MovieListItem
                        name={item.name}
                        views={item.views}
                        favourite={item.favourite}
                        key={item.id}
                        onDelete={() =>onDelete(item.id)}
                        onFavourite={() =>onFavourite(item.id)}
                    />
                )
            })}
        </div>
    )
}

export default Movie;