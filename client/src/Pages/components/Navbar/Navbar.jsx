import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/img/logo.png";
import "../Navbar/navbar.css"
import Auth from '../../../utils/auth';



function Navbar() {
  return (
    <div>
     <nav className="myNavbar navbar navbar-expand-md" >
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
            {Auth.loggedIn() ? (
              <>
              <a className="loginBtn btn ms-md-2" role="button" href="/profile">
              Profile
              </a>  
          
              <button className="logoutBtn btn ms-md-2" role="button" onClick={Auth.logout}>
                Logout
              </button>
              </>
            ) : (
              <a className="loginBtn btn ms-md-2" role="button" href="/login">
                Login/Sign Up
              </a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;