import { useParams } from 'react-router'
import DetailContainer from '../components/DetailContainer'
import useFetch from '../components/useFetch'

const Detail = ({ movies, tvs }) => {
    const { type, id } = useParams()
    const { data } = useFetch(
      'http://localhost:8085/detail/' + type + '/' + id,
    )
  return <div className="detail">{data && <DetailContainer data={data} />}</div>
}

export default Detail
