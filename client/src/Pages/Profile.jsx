import gopher from "./assets/img/gopher.png";
import "./assets/css/profile.css";
import { Link } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <div className="card">
        <img src={gopher} className="card-img-top" alt="placeholder" />
        <div className="card-body">
          <h5 className="card-title">User Name</h5>
          <p className="card-text">
            User Bio - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus pretium massa auctor velit congue, id pharetra nunc
            convallis. Nullam volutpat est libero, sed tristique libero
            efficitur sed. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Suspendisse non elit nibh.
          </p>
          <Link to="/matching" className="btn btn-primary">
            Find a Partner
          </Link>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Age</li>
          <li className="list-group-item">Gender</li>
          <li className="list-group-item">Gender Interested In</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
