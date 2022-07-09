import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TvList = ({ tvs }) => {
  return (
    <div className="tv-list my-3">
      <Row xs={2} md={4} lg={6}>
        {tvs.map((tv) => (
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
    </div>
  )
}

export default TvList
