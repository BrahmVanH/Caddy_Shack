import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <section className="signup py-4 py-xl-5">
        <div className="myContainer container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-12 text-center mx-auto">
              <h2 style={{ color: "white" }}>Login</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-12">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                    <svg
                      className="bi bi-person"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>
                  </div>

                  <form className="text-center" method="post">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn d-block w-100" type="submit">
                        <Link to="/Profile">Login</Link>
                      </button>
                      <p className="noMember">Not a Member Yet?</p>
                      <button className="btn d-block w-100" type="submit">
                        <Link to="/Profile">Signup</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Signup;
