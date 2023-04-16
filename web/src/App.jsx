import './App.css'
import Search from "./Components/Search panel/Search.jsx";
import Info from "./Components/Info/Info.jsx";
import Movie from "./Components/Movie List/Movie.jsx";
import AddFilm from "./Components/Add films/AddFilm.jsx";
import React, { useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import Filter from "./Components/Filter/Filter.jsx";



const App = () =>{
    const [data, setData] = useState([])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const onDelete = (id) => {
        setData(data.filter(c=>c.id!==id))
    }

    const addItem =(item) =>{
       if (item.name === '' || item.views ===''){
           alert('Please fill in all fields')
       }
       else {
           const newItem = {name:item.name, views: item.views, id: uuidv4(),like: false}  ;
           setData([...data,newItem]);
       }
    }
    const onFavourite = (id) => {
      const likedArr = data.map(item =>{
          if (item.id === id){
             return {...item, favourite: !item.favourite }
          }
          return item
      })
        setData(likedArr)
    }
    const searchItem = (arr, term) =>{
        if (term.length===0){
            return arr;
        }
        return  arr.filter(all => all.name.toLowerCase().indexOf(term) >-1)
    }
    const filterHandler = (arr, filter) =>{
        switch (filter){
            case 'popular':
                return arr.filter(item => item.favourite);
            case 'mostViewed':
                return arr.filter(item => item.views > 40000);
            default:
                return arr

        }
    }
    const updateTermHandler = term =>{setTerm(term)}
    const filterUpdateHandler = (filter) =>{setFilter(filter)}


    useEffect(() =>{
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5').
        then(response =>response.json()).
        then(json=>{
            const newArr = json.map(item =>({
                name:item.name,
                views: item.id*4795,
                id:item.id ,
                favourite:false
            }))
            setData(newArr) ;
            setIsLoading(false);
        })
    },[])
    return (
        <div className="App">
            <Info length={data.length} favouritelength={data.filter(arr =>arr.favourite).length}/>
            <Search updateTermHandler={updateTermHandler}/>
            <Filter filter={filter} filterUpdateHandler={filterUpdateHandler}/>
            {isLoading && <div className="spinner-border text-primary d-block" role="status">
                <span className="sr-only">Loading...</span>
            </div> }
            <Movie
                data={filterHandler(searchItem(data, term), filter)}
                onDelete={onDelete}
                onFavourite={onFavourite}
            />
            <AddFilm  addItem={addItem} />
        </div>
    )
}


export default App;






