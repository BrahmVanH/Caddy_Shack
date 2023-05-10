import gopher from "../../assets/img/gopher.png"
import "../Matching/potential.css";
import { LinkContainer } from 'react-router-bootstrap'

function PotentialMatch () {
    return (
            <div>
      <div className="myCard">
        <div className="card" style={{ width: "18rem" }}>
          <img src={gopher} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">User Name</h5>
            <p className="card-text">User's Bio</p>
            <LinkContainer to="/" >
            <a href="/" className="btn btn-success myBtn">
              YES
            </a>
            
            </LinkContainer>
            <a href="/" className="btn btn-danger myBtn">
              No
            </a>
            <a href="/" className="btn btn-secondary myBtn">
              User's Profile
            </a>
          </div>
        </div>
      </div>
    </div>

    );
}

export default PotentialMatch;