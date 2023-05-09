import gopher from "./assets/img/gopher.png";
import "./assets/css/matching.css";

function Matching() {
  return (
    <div>
      <div className="myCard">
        <div className="card" style={{ width: "18rem" }}>
          <img src={gopher} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">User Name</h5>
            <p className="card-text">User's Bio</p>
            <a href="/" className="btn btn-success myBtn">
              YES
            </a>
            <a href="/" className="btn btn-danger myBtn">
              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matching;
