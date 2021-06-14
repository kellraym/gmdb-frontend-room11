import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './modules/Nav'
import MoviePage from './modules/MoviePage'
import AppContext from './Context/AppContext'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    function Display() {
      fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(movies => movies.map((movie) => setMovies([...movies, movie])))
    }
    Display()
  }, [])


  return (
    <AppContext.Provider value={{
      movies
    }}>
      <div>
        <Router>
          <Nav />
          <Redirect exact from="/home" to="/" />
          <Route exact path="/" component={MoviePage} />
           {/* <MoviePage /> */}
        </Router>
      </div>
    </AppContext.Provider>

  );

  // async function getCatImage() {
  //   let res = await fetch("https://api.thecatapi.com/v1/images/search/");
  //   let json = await res.json();
  //   console.log(json);
  //   let imageUrl = await json[0].url;
  //   return imageUrl;
  // }


}


export default App;