import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FeaturedTV = ({ tvs }) => {
  const featuredTvs = tvs.slice(0, 6)

  return (
    <div className="featured-tv m-4">
      <Container>
        <h3 my={5}>Featured TV Shows</h3>
        <Row xs={2} md={4} lg={6}>
          {featuredTvs.map((tv) => (
            <Col key={tv.id}>
              <Link to={`/detail/tv/${tv._id}`}>
                <img
                  src={tv.poster}
                  alt={tv.title}
                  className="image-fluid rounded"
                  width={190}
                  height={250}
                />
                <span className="text-dark">{tv.title}</span>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FeaturedTV
