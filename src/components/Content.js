import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div className="content m-5">
            <Row className="justify-content-md-center">
                <Link to="/"><img
                    src="https://images2.vudu.com/assets/row/banner/191893-1305"
                    alt="content-section"
                /></Link>
            </Row>
        </div>
    );
}

export default Content;