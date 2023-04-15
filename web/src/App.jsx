import './App.css'
import Search from "./Components/Search panel/Search.jsx";
import Info from "./Components/Info/Info.jsx";
import Movie from "./Components/Movie List/Movie.jsx";
import AddFilm from "./Components/Add films/AddFilm.jsx";
import React, { useState} from "react";
import {v4 as uuidv4} from "uuid";
import Filter from "./Components/Filter/Filter.jsx";



const App = () =>{
    const [data, setData] = useState(
        [
            { name:"Forsaj", views:34567, favourite:false, id: 1 ,like:false,},
            { name:"Titanic", views:98652, favourite:false, id: 2 ,like:false,},
            { name:"The War", views:36542, favourite:false, id: 3 ,like:false,},
            { name:"Warrior", views:46589, favourite:false, id: 4 ,like:false,},
            { name:"The Last Samurai", views:36542, favourite:false, id: 5 ,like:false,},
        ]
    )
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('')

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
    return (
        <div className="App">
            <Info length={data.length} favouritelength={data.filter(arr =>arr.favourite).length}/>
            <Search updateTermHandler={updateTermHandler}/>
            <Filter filter={filter} filterUpdateHandler={filterUpdateHandler}/>
            <Movie
                data={filterHandler(searchItem(data, term), filter)}
                onDelete={onDelete}
                onFavourite={onFavourite}
            />
            <AddFilm  addItem={addItem}/>
            {/*<Counter came={this.state.name} />*/}
        </div>
    )
}


export default App;






