import Header from './Header'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Movies from '../pages/Movies'
import useFetch from './useFetch'
import Tvs from '../pages/Tvs'
import Detail from '../pages/Detail'
import Dashboard from '../pages/Dashboard'

function App() {
  const { data: movies, movieIsPending, movieError } = useFetch(
    'https://backendwithjava.herokuapp.com/movies',
  )
  const { data: tvs, tvsIsPending, tvsError } = useFetch(
    'http://localhost:8085/tvs',
  )

  return (
    <div className="App bg-secondary">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              movies={movies}
              movieIsPending={movieIsPending}
              movieError={movieError}
              tvs={tvs}
              tvsIsPending={tvsIsPending}
              tvsError={tvsError}
            />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/movies">
            <Movies
              movies={movies}
              movieIsPending={movieIsPending}
              movieError={movieError}
            />
          </Route>
          <Route exact path="/tvs">
            <Tvs tvs={tvs} tvsIsPending={tvsIsPending} tvsError={tvsError} />
          </Route>
          <Route exact path="/detail/:type/:id">
            <Detail movies={movies} tvs={tvs} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
