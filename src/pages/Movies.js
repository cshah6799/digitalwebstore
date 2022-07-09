import { Container } from "react-bootstrap";
import MovieList from "../components/MovieList";


const Movies = ({ movies, movieIsPending, movieError }) => {

    return (
        <div className="movies m-4">
            <Container>
                <h3 my={5}>All Movies</h3>
                {movieError && <div>{movieError}</div>}
                {movieIsPending && <div>Loading...</div>}
                {movies && <MovieList movies={movies} />}
            </Container>
        </div>
    );
}

export default Movies;