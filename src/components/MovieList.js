import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list my-3">
      <Row xs={2} md={4} lg={6}>
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Link to={`/detail/movie/${movie._id}`}>
              <img
                src={movie.poster}
                alt={movie.title}
                className="image-fluid rounded"
                width={190}
                height={250}
              />
              <span className="text-dark">{movie.title}</span>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MovieList
