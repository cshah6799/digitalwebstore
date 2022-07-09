import { useParams } from 'react-router'
import DetailContainer from '../components/DetailContainer'

const Detail = ({ movies, tvs }) => {
  const { type, id } = useParams()
  let data
  if (type === 'movie') {
    data = movies?.find((movie) => movie._id === id)
  } else {
    data = tvs?.find((tv) => tv._id === id)
  }

  return <div className="detail">{data && <DetailContainer data={data} />}</div>
}

export default Detail
