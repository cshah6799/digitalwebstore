import { Container, Row, Button } from 'react-bootstrap'

const DetailContainer = ({ data }) => {
  console.log(data)
  return (
    <div className="detail-container m-5">
      <Container>
        <Row>
          <img src={data.poster} alt={data.imdbID} width={168} height={238} />
          <div className="describe mx-3" width={761}>
            <h2>
              {data.title} - Direct by {data.director}
            </h2>
            <h4>{data.genre}</h4>
            <p className="btn btn-info btn-sm mr-2">{data.runtime}</p>
            <p className="btn btn-info btn-sm">{data.year}</p>
            <p>{data.plot}</p>
            <Button className="m-3">Rent ${data.rent}</Button>
            <Button className="m-3">Buy ${data.buy}</Button>
          </div>
        </Row>
      </Container>
      <Container>
        <img className="large-poster" src={data.largePoster} alt={data.title} />
      </Container>
    </div>
  )
}

export default DetailContainer
