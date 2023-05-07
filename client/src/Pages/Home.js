import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import logo from './assets/img/logo.png'


function Home() {
    return (
      <>
      <nav className="homeNav navbar navbar-expand-md" >
        <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="" width="75px" />
        </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-2"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span
              className="navbar-toggler-icon"
              style={{ '--bs-dark': '--bs-dark-rgb: 77, 198, 20' }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"></li>
            </ul>
            <a className="loginBtn btn ms-md-2" role="button" href="/Signup">
              Login/Sign Up
            </a>
          </div>
        </div>
      </nav>
      <footer id="footer" className="text-center">
        <p className="slogan">
          Find Love that is on Par ⛳ Even if your golf game isn't!
        </p>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
    </>
    );
  }
  
  export default Home;