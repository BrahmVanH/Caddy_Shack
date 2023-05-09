import gopher from "./assets/img/gopher.png";
import "./assets/css/match.css";

function Match() {
  return (
    <div>
      <div className="myCard">
        <div className="card" style={{ width: "18rem" }}>
          <img src={gopher} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">User Name</h5>
            <p className="card-text">User's Bio</p>
            <a href="/message" className="btn btn-primary">
              Message User
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Match;
