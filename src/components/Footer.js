import { Table, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <Table borderless className="text-center">
        <thead>
          <tr>
            <th>Watch</th>
            <th>My Account</th>
            <th>Features</th>
            <th>Help</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/movies" className="text-dark">
                Movies
              </Link>
            </td>
            <td>
              <Link to="/myAccount" className="text-dark">
                Account
              </Link>
            </td>
            <td>
              <Link to="/all" className="text-dark">
                Lists
              </Link>
            </td>
            <td>
              <Link to="/about" className="text-dark">
                About us
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/tvs" className="text-dark">
                TV
              </Link>
            </td>
            <td>
              <Link to="/setting" className="text-dark">
                Settings
              </Link>
            </td>
            <td>
              <Link to="/family" className="text-dark">
                Family
              </Link>
            </td>
            <td>
              <Link to="/contact" className="text-dark">
                Contact us
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Col md={{ span: 3, offset: 9 }}>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook mx-2 text-primary"></i>
          </a>
          <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter mx-2 text-info"></i>
          </a>
          <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin mx-2 text-primary"></i>
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram mx-2 text-info"></i>
          </a>
          <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube mx-2 text-danger"></i>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
