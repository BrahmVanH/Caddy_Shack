import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/img/logo.png";
import "./assets/css/signup.css";

function Resister() {
  return (
    <section className="register">
      <nav className="lostNavbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img id="logo" src={logo} width="75px" alt="logo" />
          </a>
        </div>
      </nav>
      <div className="row register-form">
        <div className="col-md-8 offset-md-2">
          <form className="custom-form">
            <h1>Complete Your User Profile!</h1>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" htmlFor="name-input-field">
                  First Name
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input
                  className="form-control"
                  type="text"
                  fdprocessedid="jfog2n"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" htmlFor="name-input-field">
                  Last Name
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input
                  className="form-control"
                  type="text"
                  fdprocessedid="jfog2n"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" htmlFor="name-input-field">
                  User Name
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input
                  className="form-control"
                  type="text"
                  fdprocessedid="jfog2n"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label className="col-form-label" htmlFor="name-input-field">
                  Age
                </label>
              </div>
              <div className="col-sm-6 input-column">
                <input
                  className="form-control"
                  type="text"
                  fdprocessedid="jfog2n"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label
                  className="col-form-label"
                  htmlFor="dropdown-input-field"
                >
                  My Gender
                </label>
              </div>
              <div className="col-sm-4 input-column">
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    type="button"
                    fdprocessedid="m6i41"
                  >
                    Select One
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Male
                    </a>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                    <a className="dropdown-item" href="#">
                      Other
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4 label-column">
                <label
                  className="col-form-label"
                  htmlFor="dropdown-input-field"
                >
                  Gender I'm Intersted In
                </label>
              </div>
              <div className="col-sm-4 input-column">
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    type="button"
                    fdprocessedid="m6i41"
                  >
                    Select One
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Male
                    </a>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                    <a className="dropdown-item" href="#">
                      Other
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Bio
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button
              className="btn btn-light submit-button"
              type="button"
              fdprocessedid="dpdi43"
            >
              Submit Form
            </button>
          </form>
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
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
    </section>
  );
}

export default Resister;
