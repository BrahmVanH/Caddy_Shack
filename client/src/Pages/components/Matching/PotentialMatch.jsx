import gopher from "../../assets/img/gopher.png";
import "../Matching/potential.css";
import { Link } from "react-router-dom";


function PotentialMatch() {
  return (
    <div>
      <div className="myCard">
        <div className="card" style={{ width: "18rem" }}>
          <img src={gopher} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">User Name</h5>
            <p className="card-text">User's Bio</p>
            <Link to="/">
              <a href="/" className="btn btn-success myBtn">
                YES
              </a>
            </Link>
            <a href="/" className="btn btn-danger myBtn">
              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotentialMatch;
