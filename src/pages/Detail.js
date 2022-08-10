import { useParams } from 'react-router'
import DetailContainer from '../components/DetailContainer'
import useFetch from '../components/useFetch'

const Detail = ({ movies, tvs }) => {
    const { type, id } = useParams()
    const { data } = useFetch(
      'https://backendwithjava.herokuapp.com/detail/' + type + '/' + id,
    )
  return <div className="detail">{data && <DetailContainer data={data} />}</div>
}

export default Detail
