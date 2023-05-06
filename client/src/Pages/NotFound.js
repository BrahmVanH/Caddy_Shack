import './assets/css/404.css'
import pageNotFound from './assets/img/pagenotfound.jpg'
import logo from './assets/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
  return (
    <div>
      <nav className="lostNavbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img id="logo" src={logo} width="75px" alt="logo" />
          </a>
        </div>
      </nav>

      <div className="body">
      <div className="lostPara">
        <p className="notFound">
          "Oops! Looks like this page has gone out of bounds."
        </p>
      </div>

      <div id="lostdiv">
        <img id="lost" src={pageNotFound} alt="pagenotfound" />
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

export default NotFound;
