import { Container } from "react-bootstrap";
import TvList from "../components/TvList";

const Tvs = ({ tvs, tvsIsPending, tvsError }) => {
    return (
        <div className="tvs m-4">
            <Container>
                <h3 my={5}>All TV Shows</h3>
                {tvsError && <div>{tvsError}</div>}
                {tvsIsPending && <div>Loading...</div>}
                {tvs && <TvList tvs={tvs} />}
            </Container>
        </div>
    );
}

export default Tvs;