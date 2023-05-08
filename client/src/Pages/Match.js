import logo from "./assets/img/logo.png";
import gopher from "./assets/img/gopher.png";
import "./assets/css/match.css";

function Match() {
  return (
    <div>
      <nav className="lostNavbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img id="logo" src={logo} width="75px" alt="logo" />
          </a>
        </div>
      </nav>

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

      <footer id="lostFooter" className="text-center">
        <p className="slogan">
          Find Love that is on Par ⛳ Even if your golf game isn't!
        </p>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Match;
