import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/img/logo.png";
import "./navbar.css"
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div>
     <nav className="myNavbar navbar navbar-expand-md" >
        <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="" width="75px" />
        </Link>
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
              <Link className="loginBtn btn ms-md-2" role="button" to="/profile">
              Profile
              </Link>  
              <Link className="messagesBtn btn ms-md-2" role="button" to="/message">
              Messages
              </Link>  
              <button className="logoutBtn btn ms-md-2" role="button" onClick={Auth.logout}>
                Logout
              </button>
              </>
            ) : (
              <Link className="loginBtn btn ms-md-2" role="button" to="/login">
                Login/Sign Up
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;