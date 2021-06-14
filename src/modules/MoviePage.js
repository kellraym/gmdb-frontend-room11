import { useContext } from 'react';
import AppContext from '../Context/AppContext'
import { BrowserRouter as Router, Route, Link, Switch, useHistory, Redirect } from 'react-router-dom';
import Movies from './Movies'

function MoviePage() {
  const { movies } = useContext(AppContext)
  const output = movies.map((movie) => 
    <div>
      <div>
        <li>
          <Link to={"/MoviePage/" + movie.movieId}>
            <img src={movie.poster} />
          </Link>
        </li>
      </div>
      <Route path={"/MoviePage/" + movie.movieId} render={(props) => <Movies movie={movie} {...props} />} />
    </div>
  )
  return output
}

export default MoviePage;
// Name
// release date
// genre | actors
// plot