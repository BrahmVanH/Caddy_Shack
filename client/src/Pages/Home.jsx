import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
      <div>
        <div>
          <p className="text-center">
            Whether you are a Seasoned Professional or a Beginner<br></br>Caddy
            Shack is the perfect place to find a partner who shares your passion
            for golf!
          </p>
          <div className="text-center">
            <Link to="/login" className="btn btn-primary">
              Find a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
